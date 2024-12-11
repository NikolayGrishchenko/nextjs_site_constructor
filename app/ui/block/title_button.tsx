'use client';

import { ButtonNodeType, TitleNodeType } from "@/app/lib/type/node";
import ButtonNode from "../node/button";
import TitleNode from "../node/title";
import { useEffect, useRef, useState } from "react";
import { EditorEventType, EditorType } from "@/app/lib/type/editor";
import { TitleButtonBlockType } from "@/app/lib/type/block";


export default function TitleButtonBlock(props: {
    data: TitleButtonBlockType,
    editorEvent: EditorEventType | null,
    onChangeData: Function,
    onChangeEditor: Function,
}) {
    const data = props.data;

    const [isActiveEditor, setIsActiveEditor] = useState(false);

    let style:{
        backgroundImage?: string,
    } = {};
    if (data.background) {
        style.backgroundImage = 'url(' + data.background + ')';
    }

    const wrapperRef = useRef<any>(null);
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target) && !event.target.closest('.editor')) {
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
                        show: props.editorEvent.data.show
                    });
                    break;
                case 'background':
                    props.onChangeData({
                        ...data,
                        background: props.editorEvent.data.background
                    });
                    break;
            }
        }
    }, [props.editorEvent]);
    
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

    function handleClickBlock(e: any) {
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
        <div ref={wrapperRef} className={'row block title-button-block' + (data.show ? '' : ' hidden')} style={style} onClick={handleClickBlock}>
            <div className="col-8 mt-4 mb-4">
                <TitleNode data={data.title} editorEvent={props.editorEvent} onChangeEditor={handleChangeEditor} onChangeData={handleChangeTitleData} />
            </div>
            <div className="col-4 mb-4">
                <ButtonNode data={data.button} editorEvent={props.editorEvent} onChangeEditor={handleChangeEditor} onChangeData={handleChangeButtonData} />
            </div>
        </div>
    );
}