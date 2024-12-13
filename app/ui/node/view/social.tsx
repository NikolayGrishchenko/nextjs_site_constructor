'use client';

import { SocialNodeType } from "@/app/lib/type/node";
import Image from 'next/image';

export default function SocialNodeView(props: {
    data: SocialNodeType
}) {
    const data = props.data;

    return (
        <>
            { data.image.length > 0 && data.url.length > 0 && (
                <a href={data.url}>
                    <Image src={data.image} alt="social image" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}></Image>
                </a>
            ) }
        </>
    );
}