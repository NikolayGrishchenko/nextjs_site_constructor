'use client';

import { TextNodeType } from "@/app/lib/type/node";
import { buildClass, buildStyle } from "@/app/lib/util";

export default function TextNodeView(props: {
    data: TextNodeType,
}) {
    const data = props.data;

    let textHtml = '';
    if (data.text) {
        textHtml = data.text.replaceAll("\n", "<br/>");
    }

    let style = buildStyle(data);
    let className = buildClass(data);

    return (
        <div className={'w-100 text-node ' + className.join(' ')} style={style} dangerouslySetInnerHTML={{__html: textHtml}}></div>
    );
}