'use client';

import { EditorEventType, EditorType } from "@/app/lib/type/editor";
import { ButtonNodeType } from "@/app/lib/type/node";
import { buildClass, buildStyleNode } from "@/app/lib/util";
import { useEffect, useRef, useState } from "react";

export default function ButtonNode(props: {
    data: ButtonNodeType,
    editorEvent: EditorEventType | null,
    onChangeEditor: (editorData: EditorType) => void,
    onChangeData: (data: ButtonNodeType) => void,
}) {
    const data = props.data;

    const [isActiveEditor, setIsActiveEditor] = useState(false);

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
                case 'align':
                    props.onChangeData({
                        ...data,
                        align: props.editorEvent.data.align || ''
                    });
                    break;
                case 'color':
                    props.onChangeData({
                        ...data,
                        color: props.editorEvent.data.color || ''
                    });
                    break;
                case 'border':
                    props.onChangeData({
                        ...data,
                        border: props.editorEvent.data.border || false
                    });
                    break;
            }
        }
    }, [props.editorEvent]);

    const style = buildStyleNode(data);
    const className = buildClass(data);

    function handleClickText(e: React.MouseEvent) {
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

    function handleChangeText(e: React.ChangeEvent) {
        props.onChangeData({
            ...data,
            text: (e.target as HTMLInputElement).value
        });
    }

    function handleClickUrl(e: React.MouseEvent) {
        e.stopPropagation();

        props.onChangeEditor({
            buttons: [],
            data: {}
        });
    }

    function handleChangeUrl(e: React.ChangeEvent) {
        props.onChangeData({
            ...data,
            url: (e.target as HTMLInputElement).value
        });
    }

    return (
        <div className="row" ref={wrapperRef}>
            <label className="col-12 mb-2">
                <span>Название</span>
                <input onClick={handleClickText} onChange={handleChangeText} className={'node-input ' + className.join(' ')} style={style} defaultValue={data.text} />
            </label>
            <label className="col-12 mb-1">
                <span>URL</span>
                <input onClick={handleClickUrl} onChange={handleChangeUrl} className='node-input' defaultValue={data.url} />
            </label>
        </div>
    );
}