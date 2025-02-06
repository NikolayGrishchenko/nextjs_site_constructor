'use client';

import { ListNodeType } from "@/app/lib/type/node";

export default function ListNodeView(props: {
    data: ListNodeType,
}) {
    const data = props.data;

    const style = {
        color: data.color || '#000000',
    };

    function drawItems(items: string[]) {
        return items.map((item, index) => {
            if (item.length > 0) {
                return (
                    <li key={index}>{ item }</li>
                );
            }
        });
    }

    return (
        <div className="w-100">
            { data.type == 'ordered' && (
                <ol style={style}>{ drawItems(data.items) }</ol>
            ) }
            { data.type == 'unordered' && (
                <ul style={style}>{ drawItems(data.items) }</ul>
            ) }
        </div>
    );
}