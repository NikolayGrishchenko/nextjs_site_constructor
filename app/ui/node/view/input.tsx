'use client';

import { InputNodeType } from "@/app/lib/type/node";

export default function InputNodeView(props: {
    data: InputNodeType,
}) {
    const data = props.data;

    return (
        <label className="w-100">
            <div>{ data.title }</div>
            <input type={data.type} name={data.name} className='input-node-input' required={data.required} defaultValue={data.value} />
        </label>
    );
}