'use client';

import HeaderBlock from "../block/header";
import SectionBlock from "../block/section";
import {
    BlockType,
    FormBlockType,
    HeaderBlockType,
    ListBlockType,
    MediaBlockType,
    SectionBlockType,
    TextImageBlockType,
    TitleButtonBlockType
} from "@/app/lib/type/block";
import { EditorEventType, EditorType } from "@/app/lib/type/editor";
import { TextImageTemplateType, TemplateType } from "@/app/lib/type/template";
import TitleButtonBlock from "../block/title_button";
import MediaBlock from "../block/media";
import ListBlock from "../block/list";
import TextImageBlock from "../block/text_image";
import FormBlock from "../block/form";

export default function TextImageTemplate(props: {
    data: TextImageTemplateType,
    onChangeEditor: (editorData: EditorType) => void,
    onChangeData: (templateData: TemplateType) => void,
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
        <div className="row text-image-template">
            {(() => {
                const html: React.JSX.Element[] = [];
                let key: keyof TextImageTemplateType;
                for (key in data) {
                    const field = '' + key;
                    const element: BlockType = data[key];
                    html.push(<div key={key} className="col-12">
                        { element.type == 'header' && (
                            <HeaderBlock data={element as HeaderBlockType} editorEvent={props.editorEvent} onChangeEditor={props.onChangeEditor} onChangeData={(data: BlockType) => {handleChangeData(field, data)}} />
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
                    </div>);
                }
                return html;
            })()}
        </div>
    );
}