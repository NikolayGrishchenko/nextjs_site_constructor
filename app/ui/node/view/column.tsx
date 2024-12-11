'use client';

import TextNodeView from "./text";
import TitleNodeView from "./title";
import { ColumnNodeType } from "@/app/lib/type/node";


export default function ColumnNodeView(props: {
    data: ColumnNodeType,
}) {
    const data = props.data;

    return (
        <div className="row column-node">
            <div className="col-12 mt-4 mb-4">
                <TitleNodeView data={data.title}></TitleNodeView>
            </div>
            <div className="col-12 mb-4">
                <TextNodeView data={data.text}></TextNodeView>
            </div>
        </div>
    );
}