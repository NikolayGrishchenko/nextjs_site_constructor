'use client';

import { SectionBlockType } from "@/app/lib/type/block";
import TitleNodeView from "../../node/view/title";
import TextNodeView from "../../node/view/text";
import { buildStyleBlock } from "@/app/lib/util";


export default function SectionBlockView(props: {
    data: SectionBlockType,
}) {
    const data = props.data;

    const style = buildStyleBlock(data);

    return (
        <>
            { data.show && (
                data.title.text.length > 0 ||
                data.text.text.length > 0
            ) && (
                <div className="row block header-block" style={style}>
                    { data.title.text.length > 0 && (
                        <div className="col-12 mt-4 mb-4">
                            <TitleNodeView data={data.title} />
                        </div>
                    )}
                    { data.text.text.length > 0 && (
                        <div className="col-12 mb-4">
                            <TextNodeView data={data.text} />
                        </div>
                    )}
                </div>
            ) }
        </>
    );
}