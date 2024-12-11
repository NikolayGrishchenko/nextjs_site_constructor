'use client';

import { EditorEventType } from "@/app/lib/type/editor";
import { TitleNodeType } from "@/app/lib/type/node";
import { buildClass, buildStyle } from "@/app/lib/util";
import { useEffect, useRef, useState } from "react";

export default function TitleNode(props: {
    data: TitleNodeType,
    editorEvent: EditorEventType | null,
    onChangeEditor: Function,
    onChangeData: Function,
}) {
    const data = props.data;

    const [isActiveEditor, setIsActiveEditor] = useState(false);

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
                case 'align':
                    props.onChangeData({
                        ...data,
                        align: props.editorEvent.data.align
                    });
                    break;
                case 'color':
                    props.onChangeData({
                        ...data,
                        color: props.editorEvent.data.color
                    });
                    break;
                case 'border':
                    props.onChangeData({
                        ...data,
                        border: props.editorEvent.data.border
                    });
                    break;
            }
        }
    }, [props.editorEvent]);

    let style = buildStyle(data);
    let className = buildClass(data);

    function handleClickText(e: any) {
        e.stopPropagation();

        setIsActiveEditor(true);
        props.onChangeEditor({
            buttons: ['color', 'align', 'border'],
            data: {
                color: data.color,
                align: data.align,
                border: data.border,
            }
        });
    }

    function handleChangeText(e: any) {
        props.onChangeData({
            ...data,
            text: e.target.value
        });
    }

    return (
        <div className="d-flex justify-content-center" ref={wrapperRef}>
            <input onClick={handleClickText} onChange={handleChangeText} className={'title-node-input ' + className.join(' ')} style={style} defaultValue={data.text} />
        </div>
    );
}