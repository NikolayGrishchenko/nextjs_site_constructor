'use client';

import TextNode from "./text";
import TitleNode from "./title";
import { EditorEventType, EditorType } from "@/app/lib/type/editor";
import { ColumnNodeType, TextNodeType, TitleNodeType } from "@/app/lib/type/node";


export default function ColumnNode(props: {
    data: ColumnNodeType,
    editorEvent: EditorEventType | null,
    onChangeEditor: (editorData: EditorType) => void,
    onChangeData: (data: ColumnNodeType) => void,
}) {
    const data = props.data;

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

    return (
        <div className='row column-node'>
            <div className="col-12 mt-4 mb-4">
                <TitleNode data={data.title} editorEvent={props.editorEvent} onChangeEditor={props.onChangeEditor} onChangeData={handleChangeTitleData}></TitleNode>
            </div>
            <div className="col-12 mb-4">
                <TextNode data={data.text} editorEvent={props.editorEvent} onChangeEditor={props.onChangeEditor} onChangeData={handleChangeTextData}></TextNode>
            </div>
        </div>
    );
}