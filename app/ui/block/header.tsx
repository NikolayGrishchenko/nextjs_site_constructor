'use client';

import { ButtonNodeType, TextNodeType, TitleNodeType } from "@/app/lib/type/node";
import TextNode from "../node/text";
import TitleNode from "../node/title";
import ButtonNode from "../node/button";
import { useEffect, useRef, useState } from "react";
import { EditorEventType, EditorType } from "@/app/lib/type/editor";
import { HeaderBlockType } from "@/app/lib/type/block";


export default function HeaderBlock(props: {
    data: HeaderBlockType,
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

    function handleChangeTextData(textData: TextNodeType) {
        props.onChangeData({
            ...data,
            text: textData,
        });
    }

    function handleChangeButtonData(buttonData: ButtonNodeType, index: number) {
        props.onChangeData({
            ...data,
            buttons: data.buttons.map((button, i) => {
                if (i == index) {
                    return buttonData;
                } else {
                    return button;
                }
            }),
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
        <div ref={wrapperRef} className={'row block header-block' + (data.show ? '' : ' hidden')} style={style} onClick={handleClickBlock}>
            <div className="col-12 mt-4 mb-4">
                <TitleNode data={data.title} editorEvent={props.editorEvent} onChangeEditor={handleChangeEditor} onChangeData={handleChangeTitleData} />
            </div>
            <div className="col-12 mb-4">
                <TextNode data={data.text} editorEvent={props.editorEvent} onChangeEditor={handleChangeEditor} onChangeData={handleChangeTextData} />
            </div>
            <div className="col-12 mb-4">
                <div className="row">
                    <div className='col-6'>
                        <ButtonNode data={data.buttons[0]} editorEvent={props.editorEvent} onChangeEditor={handleChangeEditor} onChangeData={(buttonData: ButtonNodeType) => { handleChangeButtonData(buttonData, 0)}} />
                    </div>
                    <div className='col-6'>
                        <ButtonNode data={data.buttons[1]} editorEvent={props.editorEvent} onChangeEditor={handleChangeEditor} onChangeData={(buttonData: ButtonNodeType) => { handleChangeButtonData(buttonData, 1)}} />
                    </div>
                </div>
            </div>
        </div>
    );
}