'use client';

import { ButtonNodeType } from "@/app/lib/type/node";
import { buildClass, buildStyleNode } from "@/app/lib/util";

export default function ButtonNodeView(props: {
    data: ButtonNodeType,
}) {
    const data = props.data;

    let style = buildStyleNode(data);
    let className = buildClass(data);
    
    return (
        <>
            { data.url && (
                <a href={data.url} className={'button-node ' + className.join(' ')} style={style}>{ data.text }</a>
            )}
        </>
    );
}