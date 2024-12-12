'use client';

import { EditorEventType } from "@/app/lib/type/editor";
import { ButtonNodeType } from "@/app/lib/type/node";
import { buildClass, buildStyleNode } from "@/app/lib/util";
import { useEffect, useRef, useState } from "react";

export default function ButtonNode(props: {
    data: ButtonNodeType,
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

    let style = buildStyleNode(data);
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

    function handleClickUrl(e: any) {
        e.stopPropagation();

        props.onChangeEditor({
            buttons: [],
        });
    }

    function handleChangeUrl(e: any) {
        props.onChangeData({
            ...data,
            url: e.target.value
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