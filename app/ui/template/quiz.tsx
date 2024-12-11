'use client';

import HeaderBlock from "../block/header";
import ColumnsBlock from "../block/columns";
import SectionBlock from "../block/section";
import MediaBlock from "../block/media";
import { ColumnsBlockType, HeaderBlockType, MediaBlockType, SectionBlockType, TitleButtonBlockType } from "@/app/lib/type/block";
import { EditorEventType } from "@/app/lib/type/editor";
import { QuizTemplateType } from "@/app/lib/type/template";
import TitleButtonBlock from "../block/title_button";
import TextImageBlock from "../block/text_image";

export default function QuizTemplate(props: {
    data: QuizTemplateType,
    onChangeEditor: Function,
    onChangeData: Function,
    editorEvent: EditorEventType | null,
}) {
    const data = props.data;

    function handleChangeHeaderData(headerData: HeaderBlockType) {
        props.onChangeData({
            ...data,
            header: headerData,
        });
    }

    function handleChangeColumnsData(columnsData: ColumnsBlockType) {
        props.onChangeData({
            ...data,
            columns: columnsData,
        });
    }

    function handleChangeSectionData(sectionData: SectionBlockType) {
        props.onChangeData({
            ...data,
            section: sectionData,
        });
    }

    function handleChangeMediaData(mediaData: MediaBlockType) {
        props.onChangeData({
            ...data,
            media: mediaData,
        });
    }

    function handleChangeTitleButtonData(titleButtonData: TitleButtonBlockType) {
        props.onChangeData({
            ...data,
            title_button: titleButtonData,
        });
    }

    function handleChangeTextImageData(textImageData: TitleButtonBlockType) {
        props.onChangeData({
            ...data,
            text_image: textImageData,
        });
    }

    return (
        <div className="row quiz-template">
            <div className="col-12">
                <HeaderBlock data={data.header} editorEvent={props.editorEvent} onChangeEditor={props.onChangeEditor} onChangeData={handleChangeHeaderData} />
            </div>
            <div className="col-12">
                <ColumnsBlock data={data.columns} editorEvent={props.editorEvent} onChangeEditor={props.onChangeEditor} onChangeData={handleChangeColumnsData} />
            </div>
            <div className="col-12">
                <SectionBlock data={data.section} editorEvent={props.editorEvent} onChangeEditor={props.onChangeEditor} onChangeData={handleChangeSectionData} />
            </div>
            <div className="col-12">
                <MediaBlock data={data.media} editorEvent={props.editorEvent} onChangeEditor={props.onChangeEditor} onChangeData={handleChangeMediaData} />
            </div>
            <div className="col-12">
                <TitleButtonBlock data={data.title_button} editorEvent={props.editorEvent} onChangeEditor={props.onChangeEditor} onChangeData={handleChangeTitleButtonData} />
            </div>
            <div className="col-12">
                <TextImageBlock data={data.text_image} editorEvent={props.editorEvent} onChangeEditor={props.onChangeEditor} onChangeData={handleChangeTextImageData} />
            </div>
        </div>
    );
}