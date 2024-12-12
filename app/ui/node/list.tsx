'use client';

import { EditorEventType } from "@/app/lib/type/editor";
import { ListNodeType } from "@/app/lib/type/node";
import { useEffect, useRef, useState } from "react";

export default function ListNode(props: {
    data: ListNodeType,
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
                case 'color':
                    props.onChangeData({
                        ...data,
                        color: props.editorEvent.data.color
                    });
                    break;
                case 'list':
                    props.onChangeData({
                        ...data,
                        type: props.editorEvent.data.list
                    });
                    break;
            }
        }
    }, [props.editorEvent]);

    let style = {
        color: data.color || '#000000',
    };

    function handleClickList(e: any) {
        e.stopPropagation();

        setIsActiveEditor(true);
        props.onChangeEditor({
            buttons: ['color', 'list'],
            data: {
                color: data.color,
                list: data.type,
            }
        });
    }

    function handleChangeItem(e: any, index: number) {
        props.onChangeData({
            ...data,
            items: data.items.map((item, i) => {
                if (i == index) {
                    return e.target.value;
                } else {
                    return item;
                }
            }),
        });
    }

    function handleClickAdd(e: any) {
        let items = data.items;
        items.push('');

        props.onChangeData({
            ...data,
            items: items
        });
    }

    function drawItems(items: string[]) {
        return (
            <>
                { items.map((item, index) => {
                    return (
                        <li key={index}>
                            <input type="text" onChange={(e: any) => { handleChangeItem(e, index)}} className='node-input' defaultValue={item} />
                        </li>
                    );
                })}
                <li>
                    <button type="button" className="btn btn-primary" onClick={handleClickAdd}>+</button>
                </li>
            </>
        );
    }

    return (
        <div className="w-100" ref={wrapperRef}>
            { data.type == 'ordered' && (
                <ol style={style} onClick={handleClickList}>
                    { drawItems(data.items) }
                </ol>
            ) }
            { data.type == 'unordered' && (
                <ul style={style} onClick={handleClickList}>
                    { drawItems(data.items) }
                </ul>
            ) }
        </div>
    );
}