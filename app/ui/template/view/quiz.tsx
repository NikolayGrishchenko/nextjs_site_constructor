'use client';

import { BlockType, ColumnsBlockType, FormBlockType, HeaderBlockType, ListBlockType, MediaBlockType, SectionBlockType, SocialBlockType, TextImageBlockType, TitleButtonBlockType } from "@/app/lib/type/block";
import { QuizTemplateType } from "@/app/lib/type/template";
import HeaderBlockView from "../../block/view/header";
import SectionBlockView from "../../block/view/section";
import MediaBlockView from "../../block/view/media";
import ColumnsBlockView from "../../block/view/columns";
import ListBlockView from "../../block/view/list";
import TitleButtonBlockView from "../../block/view/title_button";
import TextImageBlockView from "../../block/view/text_image";
import FormBlockView from "../../block/view/form";
import SocialBlockView from "../../block/view/social";
export default function QuizTemplateView(props: {
    data: QuizTemplateType,
}) {
    const data = props.data

    return (
        <div className="row quiz-template">
            {(() => {
                let html: React.JSX.Element[] = [];
                let key: keyof QuizTemplateType;
                for (key in data) {
                    const element: BlockType = data[key];
                    if (element.show) {
                        html.push(<div key={key} className="col-12">
                            { element.type == 'header' && (
                                <HeaderBlockView data={element as HeaderBlockType} />
                            )}
                            { element.type == 'columns' && (
                                <ColumnsBlockView data={element as ColumnsBlockType} />
                            )}
                            { element.type == 'section' && (
                                <SectionBlockView data={element as SectionBlockType} />
                            )}
                            { element.type == 'media' && (
                                <MediaBlockView data={element as MediaBlockType} />
                            )}
                            { element.type == 'list' && (
                                <ListBlockView data={element as ListBlockType} />
                            )}
                            { element.type == 'title_button' && (
                                <TitleButtonBlockView data={element as TitleButtonBlockType} />
                            )}
                            { element.type == 'text_image' && (
                                <TextImageBlockView data={element as TextImageBlockType} />
                            )}
                            { element.type == 'form' && (
                                <FormBlockView data={element as FormBlockType} />
                            )}
                            { element.type == 'social' && (
                                <SocialBlockView data={element as SocialBlockType} />
                            )}
                        </div>);
                    }
                }
                return html;
            })()}
        </div>
    );
}