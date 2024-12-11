'use client';

import { LandingContext } from '@/app/lib/context/landing';
import { EditorEventType, EditorType } from '@/app/lib/type/editor';
import { LandingType } from '@/app/lib/type/landing';
import { QuizTemplateType } from '@/app/lib/type/template';
import Editor from '@/app/ui/editor';
import Sidebar from "@/app/ui/sidebar";
import QuizTemplate from '@/app/ui/template/quiz';
import QuizTemplateView from '@/app/ui/template/view/quiz';
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Edit(props: {
    id: number;
}) {
    const id = props.id;

    const { push } = useRouter();

    const [view, setView] = useState(false);
    const [editor, setEditor] = useState<EditorType>({
        buttons: [],
        data: {
            show: true,
            color: '#000',
            align: '',
            border: false,
        }
    });
    const [editorEvent, setEditorEvent] = useState<EditorEventType | null>(null);

    function setLandingFromAPI(response: any) {
        setLanding({
            id: response.id,
            name: response.name,
            date_create: response.date_create,
            date_edit: response.date_edit,
            template: response.template,
            is_published: response.is_published,
            site: response.site,
            url: response.url,
            data: JSON.parse(response.data),
        });
    }

    const [landing, setLanding] = useState<LandingType | null>(null);
    async function loadLanding() {
        const result = await axios(
            'http://localhost:2999/api/landings/' + id.toString(),
        );
        setLandingFromAPI(result.data);
    }
    useEffect(() => {
        loadLanding();
    }, [id]);

    const wrapperRef = useRef<any>(null);
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setEditor({
                    ...editor,
                    buttons: [],
                });
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [wrapperRef]);

    async function onSave() {
        const result = await axios.post(
            'http://localhost:2999/api/landings/' + id, {
                name: landing?.name || '',
                data: JSON.stringify(landing?.data),
            }
        );
        setLandingFromAPI(result.data);
    }

    async function onPublish(site: string, url: string, isPublised: boolean) {
        const result = await axios.post(
            'http://localhost:2999/api/landings/' + id, {
                site,
                url,
                is_published: isPublised,
            }
        );
        setLandingFromAPI(result.data);
    }

    function onView() {
        setView(!view);
    }

    function onExit() {
        push(`/admin/landing`);
    }

    function handleChangeName(e: any) {
        if (!!landing) {
            setLanding({
                ...landing,
                name: e.target.value,
            });
        }
    }

    function onChangeEditor(editorData: EditorType) {
        setEditor({
            ...editor,
            ...editorData
        });
    }

    function handleChangeQuizData(quizData: QuizTemplateType) {
        if (!!landing) {
            setLanding({
                ...landing,
                data: quizData,
            });
        }
    }

    function handleEditorButtonClick(editorEventData: EditorEventType) {
        switch (editorEventData.type) {
            case 'align':
                setEditor({
                    ...editor,
                    data: {
                        ...editor.data,
                        align: editorEventData.data.align,
                    }
                });
                break;
            case 'list':
                setEditor({
                    ...editor,
                    data: {
                        ...editor.data,
                        list: editorEventData.data.list,
                    }
                });
                break;
            case 'color':
                setEditor({
                    ...editor,
                    data: {
                        ...editor.data,
                        color: editorEventData.data.color,
                    }
                });
                break;
            case 'border':
                setEditor({
                    ...editor,
                    data: {
                        ...editor.data,
                        border: editorEventData.data.border,
                    }
                });
                break;
            case 'show':
                setEditor({
                    ...editor,
                    data: {
                        ...editor.data,
                        show: editorEventData.data.show,
                    }
                });
                break;
            case 'background':
                setEditor({
                    ...editor,
                    data: {
                        ...editor.data,
                        background: editorEventData.data.background,
                    }
                });
                break;
        }
        setEditorEvent(editorEventData);
    }
    
    return (
        <>
            { landing && (
                <LandingContext.Provider value={landing}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mt-4">
                                <input className="form-control" type="text" name="name" defaultValue={landing.name} placeholder="Название" onChange={handleChangeName} />
                            </div>
                            <div className="col-12" ref={wrapperRef}>
                                {!view &&  <Editor config={editor} onButtonClick={handleEditorButtonClick}></Editor>}
                                {landing && (
                                    view ? (
                                        <QuizTemplateView data={landing.data}></QuizTemplateView>
                                    ) : (
                                        <QuizTemplate data={landing.data} editorEvent={editorEvent} onChangeEditor={onChangeEditor} onChangeData={handleChangeQuizData}></QuizTemplate>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </LandingContext.Provider>
            )}
            <Sidebar view={view} site={landing?.site || ''} url={landing?.url || ''} isPublished={landing?.is_published || false} onSave={onSave} onPublish={onPublish} onView={onView} onExit={onExit}></Sidebar>
        </>
    );
}