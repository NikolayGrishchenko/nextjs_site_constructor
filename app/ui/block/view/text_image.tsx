'use client';

import { TextImageBlockType } from "@/app/lib/type/block";
import TitleNodeView from "../../node/view/title";
import TextNodeView from "../../node/view/text";
import MediaNodeView from "../../node/view/media";
import { buildStyleBlock } from "@/app/lib/util";


export default function TextImageBlockView(props: {
    data: TextImageBlockType,
}) {
    const data = props.data;

    const style = buildStyleBlock(data);

    return (
        <>
            { data.show && (
                data.title.text.length > 0 ||
                data.text.text.length > 0 ||
                data.media.content.length > 0
            ) && (
                <div className='row block text-image-block' style={style}>
                    { (data.title.text.length > 0 || data.text.text.length > 0) && (
                        <div className="col-7 mt-4 mb-4">
                            <div className="row">
                                { data.title.text.length > 0 && (
                                    <div className="col-12 mb-2">
                                        <TitleNodeView data={data.title} />
                                    </div>
                                )}
                                { data.text.text.length > 0 && (
                                    <div className="col-12">
                                        <TextNodeView data={data.text} />
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                    { data.media.content.length > 0 && (
                        <div className="col-5 mt-4 mb-4">
                            <MediaNodeView data={data.media} />
                        </div>
                    )}
                </div>
            )}
        </>
    );
}