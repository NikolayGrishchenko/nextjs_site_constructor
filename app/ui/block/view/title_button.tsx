'use client';

import { TitleButtonBlockType } from "@/app/lib/type/block";
import TitleNodeView from "../../node/view/title";
import ButtonNodeView from "../../node/view/button";


export default function TitleButtonBlockView(props: {
    data: TitleButtonBlockType,
}) {
    const data = props.data;

    let style:{
        backgroundImage?: string,
    } = {};
    if (data.background) {
        style.backgroundImage = 'url(' + data.background + ')';
    }

    return (
        <div className='row block title-button-block' style={style}>
            <div className="col-8 mt-4 mb-4 d-flex align-items-center">
                <TitleNodeView data={data.title} />
            </div>
            <div className="col-4 mt-4 mb-4 d-flex align-items-center">
                <ButtonNodeView data={data.button} />
            </div>
        </div>
    );
}