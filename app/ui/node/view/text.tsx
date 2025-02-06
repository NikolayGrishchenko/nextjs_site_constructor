'use client';

import { TextNodeType } from "@/app/lib/type/node";
import { buildClass, buildStyleNode } from "@/app/lib/util";

export default function TextNodeView(props: {
    data: TextNodeType,
}) {
    const data = props.data;

    let textHtml = '';
    if (data.text) {
        textHtml = data.text.replaceAll("\n", "<br/>");
    }

    const style = buildStyleNode(data);
    const className = buildClass(data);

    return (
        <div className={'w-100 text-node ' + className.join(' ')} style={style} dangerouslySetInnerHTML={{__html: textHtml}}></div>
    );
}