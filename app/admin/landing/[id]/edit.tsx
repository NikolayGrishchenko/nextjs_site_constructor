'use client';

import { LandingContext } from '@/app/lib/context/landing';
import { EditorEventType, EditorType } from '@/app/lib/type/editor';
import { LandingType, mapLandingTemplate } from '@/app/lib/type/landing';
import { ImageTemplateType, QuizTemplateType, SocialTemplateType, TemplateType, TextImageTemplateType } from '@/app/lib/type/template';
import Editor from '@/app/ui/editor';
import Sidebar from "@/app/ui/sidebar";
import QuizTemplate from '@/app/ui/template/quiz';
import QuizTemplateView from '@/app/ui/template/view/quiz';
import SocialTemplate from '@/app/ui/template/social';
import SocialTemplateView from '@/app/ui/template/view/social';
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ImageTemplate from '@/app/ui/template/image';
import ImageTemplateView from '@/app/ui/template/view/image';
import TextImageTemplate from '@/app/ui/template/text_image';
import TextImageTemplateView from '@/app/ui/template/view/text_image';

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

    function setLandingFromAPI(response: {
        id: number,
        name: string,
        date_create: string,
        date_edit: string,
        template: keyof typeof mapLandingTemplate,
        is_published: boolean,
        site?: string,
        url?: string,
        data: string,
    }) {
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
    useEffect(() => {
        async function loadLanding() {
            const result = await axios(
                process.env.BACKEND_DOMAIN + '/api/landings/' + id.toString(),
            );
            setLandingFromAPI(result.data);
        }
        loadLanding();
    }, [id]);

    const wrapperRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        function handleClickOutside(event: Event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
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
    }, [wrapperRef, editor]);

    async function onSave() {
        const result = await axios.post(
            process.env.BACKEND_DOMAIN + '/api/landings/' + id, {
                name: landing?.name || '',
                data: JSON.stringify(landing?.data),
            }
        );
        setLandingFromAPI(result.data);
    }

    async function onPublish(site: string, url: string, isPublised: boolean) {
        const result = await axios.post(
            process.env.BACKEND_DOMAIN + '/api/landings/' + id, {
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

    function handleChangeName(e: React.ChangeEvent) {
        if (!!landing) {
            setLanding({
                ...landing,
                name: (e.target as HTMLInputElement).value,
            });
        }
    }

    function onChangeEditor(editorData: EditorType) {
        setEditor({
            ...editor,
            ...editorData
        });
    }

    function handleChangeTemplateData(templateData: TemplateType) {
        if (!!landing) {
            setLanding({
                ...landing,
                data: templateData,
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
                                        <>
                                            { landing.template == 'quiz' && (
                                                <QuizTemplateView data={landing.data as QuizTemplateType} />
                                            )}
                                            { landing.template == 'social' && (
                                                <SocialTemplateView data={landing.data as SocialTemplateType} />
                                            )}
                                            { landing.template == 'image' && (
                                                <ImageTemplateView data={landing.data as ImageTemplateType} />
                                            )}
                                            { landing.template == 'text_image' && (
                                                <TextImageTemplateView data={landing.data as TextImageTemplateType} />
                                            )}
                                        </>
                                        
                                    ) : (
                                        <>
                                            { landing.template == 'quiz' && (
                                                <QuizTemplate data={landing.data as QuizTemplateType} editorEvent={editorEvent} onChangeEditor={onChangeEditor} onChangeData={handleChangeTemplateData} />
                                            )}
                                            { landing.template == 'social' && (
                                                <SocialTemplate data={landing.data as SocialTemplateType} editorEvent={editorEvent} onChangeEditor={onChangeEditor} onChangeData={handleChangeTemplateData} />
                                            )}
                                            { landing.template == 'image' && (
                                                <ImageTemplate data={landing.data as ImageTemplateType} editorEvent={editorEvent} onChangeEditor={onChangeEditor} onChangeData={handleChangeTemplateData} />
                                            )}
                                            { landing.template == 'text_image' && (
                                                <TextImageTemplate data={landing.data as TextImageTemplateType} editorEvent={editorEvent} onChangeEditor={onChangeEditor} onChangeData={handleChangeTemplateData} />
                                            )}
                                        </>
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