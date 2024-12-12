'use client';

import { MediaNodeType, TextNodeType, TitleNodeType } from "@/app/lib/type/node";
import TitleNode from "../node/title";
import TextNode from "../node/text";
import MediaNode from "../node/media";
import { useEffect, useRef, useState } from "react";
import { EditorEventType, EditorType } from "@/app/lib/type/editor";
import { TextImageBlockType } from "@/app/lib/type/block";
import { buildStyleBlock } from "@/app/lib/util";


export default function TextImageBlock(props: {
    data: TextImageBlockType,
    editorEvent: EditorEventType | null,
    onChangeData: Function,
    onChangeEditor: Function,
}) {
    const data = props.data;

    const [isActiveEditor, setIsActiveEditor] = useState(false);

    let style = buildStyleBlock(data);

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

    function handleChangeMediaData(mediaData: MediaNodeType) {
        props.onChangeData({
            ...data,
            media: mediaData,
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
        <div ref={wrapperRef} className={'row block text-image-block' + (data.show ? '' : ' hidden')} style={style} onClick={handleClickBlock}>
            <div className="col-7 mt-4 mb-4">
                <div className="row">
                    <div className="col-12 mb-2">
                        <TitleNode data={data.title} editorEvent={props.editorEvent} onChangeEditor={handleChangeEditor} onChangeData={handleChangeTitleData} />
                    </div>
                    <div className="col-12">
                        <TextNode data={data.text} editorEvent={props.editorEvent} onChangeEditor={handleChangeEditor} onChangeData={handleChangeTextData} />
                    </div>
                </div>
            </div>
            <div className="col-5 mt-4 mb-4">
                <MediaNode data={data.media} editorEvent={props.editorEvent} onChangeEditor={handleChangeEditor} onChangeData={handleChangeMediaData} />
            </div>
        </div>
    );
}