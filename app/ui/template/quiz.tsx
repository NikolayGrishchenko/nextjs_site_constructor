'use client';

import HeaderBlock from "../block/header";
import SectionBlock from "../block/section";
import { BlockType, ColumnsBlockType, FormBlockType, HeaderBlockType, ListBlockType, MediaBlockType, SectionBlockType, SocialBlockType, TextImageBlockType, TitleButtonBlockType } from "@/app/lib/type/block";
import { EditorEventType } from "@/app/lib/type/editor";
import { QuizTemplateType } from "@/app/lib/type/template";
import SocialBlock from "../block/social";
import TitleButtonBlock from "../block/title_button";
import MediaBlock from "../block/media";
import ListBlock from "../block/list";
import ColumnsBlock from "../block/columns";
import TextImageBlock from "../block/text_image";
import FormBlock from "../block/form";

export default function Template(props: {
    data: QuizTemplateType,
    onChangeEditor: Function,
    onChangeData: Function,
    editorEvent: EditorEventType | null,
}) {
    const data = props.data;

    function handleChangeData(field: string, eventData: BlockType) {
        props.onChangeData({
            ...data,
            [field]: eventData,
        });
    }

    return (
        <div className="row social-template">
            {(() => {
                let html: React.JSX.Element[] = [];
                let key: keyof QuizTemplateType;
                for (key in data) {
                    let field = key;
                    const element: BlockType = data[key];
                    html.push(<div key={key} className="col-12">
                        { element.type == 'header' && (
                            <HeaderBlock data={element as HeaderBlockType} editorEvent={props.editorEvent} onChangeEditor={props.onChangeEditor} onChangeData={(data: BlockType) => {handleChangeData(field, data)}} />
                        )}
                        { element.type == 'columns' && (
                            <ColumnsBlock data={element as ColumnsBlockType} editorEvent={props.editorEvent} onChangeEditor={props.onChangeEditor} onChangeData={(data: BlockType) => {handleChangeData(field, data)}} />
                        )}
                        { element.type == 'section' && (
                            <SectionBlock data={element as SectionBlockType} editorEvent={props.editorEvent} onChangeEditor={props.onChangeEditor} onChangeData={(data: BlockType) => {handleChangeData(field, data)}} />
                        )}
                        { element.type == 'media' && (
                            <MediaBlock data={element as MediaBlockType} editorEvent={props.editorEvent} onChangeEditor={props.onChangeEditor} onChangeData={(data: BlockType) => {handleChangeData(field, data)}} />
                        )}
                        { element.type == 'list' && (
                            <ListBlock data={element as ListBlockType} editorEvent={props.editorEvent} onChangeEditor={props.onChangeEditor} onChangeData={(data: BlockType) => {handleChangeData(field, data)}} />
                        )}
                        { element.type == 'title_button' && (
                            <TitleButtonBlock data={element as TitleButtonBlockType} editorEvent={props.editorEvent} onChangeEditor={props.onChangeEditor} onChangeData={(data: BlockType) => {handleChangeData(field, data)}} />
                        )}
                        { element.type == 'text_image' && (
                            <TextImageBlock data={element as TextImageBlockType} editorEvent={props.editorEvent} onChangeEditor={props.onChangeEditor} onChangeData={(data: BlockType) => {handleChangeData(field, data)}} />
                        )}
                        { element.type == 'form' && (
                            <FormBlock data={element as FormBlockType} editorEvent={props.editorEvent} onChangeEditor={props.onChangeEditor} onChangeData={(data: BlockType) => {handleChangeData(field, data)}} />
                        )}
                        { element.type == 'social' && (
                            <SocialBlock data={element as SocialBlockType} editorEvent={props.editorEvent} onChangeEditor={props.onChangeEditor} onChangeData={(data: BlockType) => {handleChangeData(field, data)}} />
                        )}
                    </div>);
                }
                return html;
            })()}
        </div>
    );
}