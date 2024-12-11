'use client';

import { QuizTemplateType } from "@/app/lib/type/template";
import HeaderBlockView from "../../block/view/header";
import ColumnsBlockView from "../../block/view/columns";
import SectionBlockView from "../../block/view/section";
import MediaBlockView from "../../block/view/media";
import TitleButtonBlockView from "../../block/view/title_button";

export default function QuizTemplateView(props: {
    data: QuizTemplateType,
}) {
    const data = props.data;

    return (
        <div className="row quiz-template">
            { data.header.show && (
                <div className="col-12">
                    <HeaderBlockView data={data.header} />
                </div>
            )}
            { data.columns.show && (
                <div className="col-12">
                    <ColumnsBlockView data={data.columns} />
                </div>
            )}
            { data.section.show && (
                <div className="col-12">
                    <SectionBlockView data={data.section} />
                </div>
            )}
            { data.media.show && (
                <div className="col-12">
                    <MediaBlockView data={data.media} />
                </div>
            )}
            { data.title_button.show && (
                <div className="col-12">
                    <TitleButtonBlockView data={data.title_button} />
                </div>
            )}
        </div>
    );
}