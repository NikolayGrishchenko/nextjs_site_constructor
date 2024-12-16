'use client';

import { BlockType, HeaderBlockType, SectionBlockType, SocialBlockType, TitleButtonBlockType } from "@/app/lib/type/block";
import { SocialTemplateType } from "@/app/lib/type/template";
import HeaderBlockView from "../../block/view/header";
import SectionBlockView from "../../block/view/section";
import TitleButtonBlockView from "../../block/view/title_button";
import SocialBlockView from "../../block/view/social";
export default function SocialTemplateView(props: {
    data: SocialTemplateType,
}) {
    const data = props.data

    return (
        <div className="row social-template">
            {(() => {
                let html: React.JSX.Element[] = [];
                let key: keyof SocialTemplateType;
                for (key in data) {
                    const element: BlockType = data[key];
                    if (element.show) {
                        html.push(<div key={key} className="col-12">
                            { element.type == 'header' && (
                                <HeaderBlockView data={element as HeaderBlockType} />
                            )}
                            { element.type == 'section' && (
                                <SectionBlockView data={element as SectionBlockType} />
                            )}
                            { element.type == 'title_button' && (
                                <TitleButtonBlockView data={element as TitleButtonBlockType} />
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