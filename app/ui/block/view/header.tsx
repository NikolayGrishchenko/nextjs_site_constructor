'use client';

import { HeaderBlockType } from "@/app/lib/type/block";
import TitleNodeView from "../../node/view/title";
import TextNodeView from "../../node/view/text";
import ButtonNodeView from "../../node/view/button";
import { buildStyleBlock } from "@/app/lib/util";

export default function HeaderBlockView(props: {
    data: HeaderBlockType,
}) {
    const data = props.data;

    const style = buildStyleBlock(data);

    return (
        <>
            { data.show && (
                data.title.text.length > 0 ||
                data.text.text.length > 0 ||
                data.buttons[0].url.length > 0 ||
                data.buttons[1].url.length > 0
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
                    { (data.buttons[0].url.length > 0 || data.buttons[1].url.length > 0) && (
                        <div className="col-12 mb-4">
                            <div className="row">
                                { data.buttons[0].url.length > 0 && (
                                    <div className='col-6 d-flex justify-content-center'>
                                        <ButtonNodeView data={data.buttons[0]} />
                                    </div>
                                )}
                                { data.buttons[1].url.length > 0 && (
                                    <div className='col-6 d-flex justify-content-center'>
                                        <ButtonNodeView data={data.buttons[1]} />
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            ) }
        </>
    );
}