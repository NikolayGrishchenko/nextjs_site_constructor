'use client';

import { ColumnNodeType } from "@/app/lib/type/node";
import { useEffect, useRef, useState } from "react";
import { EditorEventType, EditorType } from "@/app/lib/type/editor";
import { ColumnsBlockType, BlockType } from "@/app/lib/type/block";
import ColumnNode from "../node/column";
import { buildStyleBlock } from "@/app/lib/util";


export default function ColumnsBlock(props: {
    data: ColumnsBlockType,
    editorEvent: EditorEventType | null,
    onChangeData: (data: BlockType) => void,
    onChangeEditor: (editorData: EditorType) => void,
}) {
    const data = props.data;

    const [isActiveEditor, setIsActiveEditor] = useState(false);

    const style = buildStyleBlock(data);

    const wrapperRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleClickOutside(event: Event) {
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

    function handleChangeColumnData(columnData: ColumnNodeType, index: number) {
        props.onChangeData({
            ...data,
            items: data.items.map((column, i) => {
                if (i == index) {
                    return columnData;
                } else {
                    return column;
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
        <div ref={wrapperRef} className={'row block block-edit columns-block' + (data.show ? '' : ' hidden')} style={style} onClick={handleClickBlock}>
            <div className="col-12">
                <div className="row">
                    <div className='col-6'>
                        <ColumnNode data={data.items[0]} editorEvent={props.editorEvent} onChangeEditor={handleChangeEditor} onChangeData={(columnData: ColumnNodeType) => { handleChangeColumnData(columnData, 0)}} />
                    </div>
                    <div className='col-6'>
                        <ColumnNode data={data.items[1]} editorEvent={props.editorEvent} onChangeEditor={handleChangeEditor} onChangeData={(columnData: ColumnNodeType) => { handleChangeColumnData(columnData, 1)}} />
                    </div>
                </div>
            </div>
        </div>
    );
}