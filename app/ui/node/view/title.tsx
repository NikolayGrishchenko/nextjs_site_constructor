'use client';

import { TitleNodeType } from "@/app/lib/type/node";
import { buildClass, buildStyleNode } from "@/app/lib/util";

export default function TitleNodeView(props: {
    data: TitleNodeType,
}) {
    const data = props.data;

    const style = buildStyleNode(data);
    const className = buildClass(data);

    return (
        <div className={'title-node ' + className.join(' ')} style={style}>{ data.text }</div>
    );
}