'use client';

import { ListBlockType } from "@/app/lib/type/block";
import TitleNodeView from "../../node/view/title";
import ListNodeView from "../../node/view/list";
import { buildStyleBlock } from "@/app/lib/util";

export default function ListBlockView(props: {
    data: ListBlockType,
}) {
    const data = props.data;

    let style = buildStyleBlock(data);

    return (
        <>
            { data.show && (
                data.title.text.length > 0 ||
                data.list.items.filter(item => item.length > 0).length > 0
            ) && (
                <div className='row block list-block' style={style}>
                    { data.title.text.length > 0 && (
                        <div className="col-12 mt-4 mb-4">
                            <TitleNodeView data={data.title} />
                        </div>
                    )}
                    { data.list.items.filter(item => item.length > 0).length > 0 && (
                        <div className="col-12 mb-4">
                            <ListNodeView data={data.list} />
                        </div>
                    ) }
                </div>
            )}
        </>
    );
}