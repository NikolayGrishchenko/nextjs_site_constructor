'use client';

import HeaderBlock from "../block/header";
import SectionBlock from "../block/section";
import { BlockType, HeaderBlockType, SectionBlockType, SocialBlockType, TitleButtonBlockType } from "@/app/lib/type/block";
import { EditorEventType } from "@/app/lib/type/editor";
import { SocialTemplateType } from "@/app/lib/type/template";
import SocialBlock from "../block/social";
import TitleButtonBlock from "../block/title_button";

export default function Template(props: {
    data: SocialTemplateType,
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
                let key: keyof SocialTemplateType;
                for (key in data) {
                    let field = key;
                    const element: BlockType = data[key];
                    html.push(<div key={key} className="col-12">
                        { element.type == 'header' && (
                            <HeaderBlock data={element as HeaderBlockType} editorEvent={props.editorEvent} onChangeEditor={props.onChangeEditor} onChangeData={(data: BlockType) => {handleChangeData(field, data)}} />
                        )}
                        { element.type == 'section' && (
                            <SectionBlock data={element as SectionBlockType} editorEvent={props.editorEvent} onChangeEditor={props.onChangeEditor} onChangeData={(data: BlockType) => {handleChangeData(field, data)}} />
                        )}
                        { element.type == 'social' && (
                            <SocialBlock data={element as SocialBlockType} editorEvent={props.editorEvent} onChangeEditor={props.onChangeEditor} onChangeData={(data: BlockType) => {handleChangeData(field, data)}} />
                        )}
                        { element.type == 'title_button' && (
                            <TitleButtonBlock data={element as TitleButtonBlockType} editorEvent={props.editorEvent} onChangeEditor={props.onChangeEditor} onChangeData={(data: BlockType) => {handleChangeData(field, data)}} />
                        )}
                    </div>);
                }
                return html;
            })()}
        </div>
    );
}