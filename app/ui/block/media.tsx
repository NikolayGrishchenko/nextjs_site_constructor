'use client';

import { MediaNodeType, TitleNodeType } from "@/app/lib/type/node";
import TitleNode from "../node/title";
import { useEffect, useRef, useState } from "react";
import { EditorEventType, EditorType } from "@/app/lib/type/editor";
import { MediaBlockType } from "@/app/lib/type/block";
import MediaNode from "../node/media";


export default function MediaBlock(props: {
    data: MediaBlockType,
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

    function handleChangeMediaData(mediaData: MediaNodeType, index: number) {
        props.onChangeData({
            ...data,
            items: data.items.map((item, i) => {
                if (i == index) {
                    return mediaData;
                } else {
                    return item;
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
            <div className="col-12 mt-4 mb-4">
                <div className="row">
                    { data.items.map((item, index) => {
                        return (
                            <div key={index} className="col-2">
                                <MediaNode data={item} editorEvent={props.editorEvent} onChangeEditor={handleChangeEditor} onChangeData={(mediaData: MediaNodeType) => { handleChangeMediaData(mediaData, index)}} />
                            </div>
                        )
                    }) }
                </div>
            </div>
        </div>
    );
}