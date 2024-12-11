'use client';

import { ColumnsBlockType } from "@/app/lib/type/block";
import ColumnNodeView from "../../node/view/column";


export default function ColumnsBlockView(props: {
    data: ColumnsBlockType,
}) {
    const data = props.data;

    let style:{
        backgroundImage?: string,
    } = {};
    if (data.background) {
        style.backgroundImage = 'url(' + data.background + ')';
    }

    return (
        <>
            { data.show && (
                (data.items[0].title.text.length > 0 || data.items[0].text.text.length > 0)
                ||
                (data.items[1].title.text.length > 0 || data.items[1].text.text.length > 0)
            ) && (
                <div className='row block columns-block' style={style}>
                    <div className="col-12">
                        <div className="row">
                            <div className='col-6 d-flex justify-content-center'>
                                <ColumnNodeView data={data.items[0]} />
                            </div>
                            <div className='col-6 d-flex justify-content-center'>
                                <ColumnNodeView data={data.items[1]} />
                            </div>
                        </div>
                    </div>
                </div>
            ) }
        </>
    );
}