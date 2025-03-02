'use client';

import { ButtonNodeType, TitleNodeType } from "@/app/lib/type/node";
import ButtonNode from "../node/button";
import TitleNode from "../node/title";
import { useEffect, useRef, useState } from "react";
import { EditorEventType, EditorType } from "@/app/lib/type/editor";
import { FormBlockType, BlockType } from "@/app/lib/type/block";
import { buildStyleBlock } from "@/app/lib/util";


export default function FormBlock(props: {
    data: FormBlockType,
    editorEvent: EditorEventType | null,
    onChangeData: (data: BlockType) => void,
    onChangeEditor: (editorData: EditorType) => void,
}) {
    const data = props.data;

    const [isActiveEditor, setIsActiveEditor] = useState(false);

    const mapSettings = {
        name: 'Имя',
        birthday: 'Дата рождения',
        email: 'E-mail',
        phone: 'Телефон',
        position: 'Какую должность хочешь получить',
    };

    const style = buildStyleBlock(data);

    const wrapperRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node) && event.target && !(event.target as HTMLElement).closest('.editor')) {
                setIsActiveEditor(false);
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [wrapperRef]);

    useEffect(() => {
        if (isActiveEditor && !!props.editorEvent) {
            switch (props.editorEvent.type) {
                case 'show':
                    props.onChangeData({
                        ...data,
                        show: !!props.editorEvent.data.show
                    });
                    break;
                case 'background':
                    props.onChangeData({
                        ...data,
                        background: props.editorEvent.data.background || ''
                    });
                    break;
            }
        }
    }, [props, isActiveEditor, data]);
    
    function handleChangeTitleData(titleData: TitleNodeType) {
        props.onChangeData({
            ...data,
            title: titleData,
        });
    }

    function handleChangeButtonData(buttonData: ButtonNodeType) {
        props.onChangeData({
            ...data,
            button: buttonData,
        });
    }

    function handleChangeSetting(e: React.ChangeEvent) {
        const value = e.target ? (e.target as HTMLInputElement).value : '';

        if (e.target && (e.target as HTMLInputElement).checked) {
            props.onChangeData({
                ...data,
                settings: [
                    ...data.settings,
                    value
                ],
            });
        } else {
            props.onChangeData({
                ...data,
                settings: data.settings.filter(setting => setting != value),
            });
        }
    }

    function handleClickBlock(e: React.MouseEvent) {
        e.stopPropagation();

        setIsActiveEditor(true);
        props.onChangeEditor({
            buttons: ['show', 'background'],
            data: {
                show: data.show,
                background: data.background,
            }
        });
    }

    function handleChangeEditor(editor: EditorType) {
        setIsActiveEditor(false);
        props.onChangeEditor(editor);
    }

    return (
        <div ref={wrapperRef} className={'row block block-edit form-block' + (data.show ? '' : ' hidden')} style={style} onClick={handleClickBlock}>
            <div className="col-12 mt-4 mb-4">
                <TitleNode data={data.title} editorEvent={props.editorEvent} onChangeEditor={handleChangeEditor} onChangeData={handleChangeTitleData} />
            </div>
            <div className="col-12 mt-4 mb-4">
                <div className="row">
                    {(() => {
                        const settings: React.JSX.Element[] = [];
                        let settingCode: keyof typeof mapSettings;
                        for (settingCode in mapSettings) {
                            settings.push(
                                <div key={settingCode} className="col-12">
                                    <label>
                                        <input type="checkbox" className="d-inline-block me-1" value={settingCode} checked={data.settings.includes(settingCode)} onChange={handleChangeSetting} />
                                        <span>{ mapSettings[settingCode] }</span>
                                    </label>
                                </div>
                            );
                        }
                        return settings;
                    })()}
                </div>
            </div>
            <div className="col-12 mb-4">
                <ButtonNode data={data.button} editorEvent={props.editorEvent} onChangeEditor={handleChangeEditor} onChangeData={handleChangeButtonData} />
            </div>
        </div>
    );
}