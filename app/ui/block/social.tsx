'use client';

import { SocialNodeType } from "@/app/lib/type/node";
import { useEffect, useRef, useState } from "react";
import { EditorEventType, EditorType } from "@/app/lib/type/editor";
import { SocialBlockType, BlockType } from "@/app/lib/type/block";
import SocialNode from "../node/social";
import { buildStyleBlock } from "@/app/lib/util";


export default function SocailBlock(props: {
    data: SocialBlockType,
    editorEvent: EditorEventType | null,
    onChangeData: (data: BlockType) => void,
    onChangeEditor: (editorData: EditorType) => void,
}) {
    const data = props.data;

    const [isActiveEditor, setIsActiveEditor] = useState(false);

    const style = buildStyleBlock(data);

    const wrapperRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleClickOutside(event: MouseEvent ) {
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

    function handleChangeSocialData(socialData: SocialNodeType, index: number) {
        props.onChangeData({
            ...data,
            items: data.items.map((item, i) => {
                if (i == index) {
                    return socialData;
                } else {
                    return item;
                }
            }),
        });
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
        <div ref={wrapperRef} className={'row block block-edit social-block' + (data.show ? '' : ' hidden')} style={style} onClick={handleClickBlock}>
            <div className="col-12 mt-4 mb-4">
                <div className="row">
                    { data.items.map((item, index) => {
                        return (
                            <div key={index} className="col-12">
                                <SocialNode data={item} editorEvent={props.editorEvent} onChangeEditor={handleChangeEditor} onChangeData={(socialData: SocialNodeType) => { handleChangeSocialData(socialData, index)}} />
                            </div>
                        )
                    }) }
                </div>
            </div>
        </div>
    );
}