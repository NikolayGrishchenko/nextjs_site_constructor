'use client';

import { MediaNodeType } from "@/app/lib/type/node";
import Image from 'next/image';

export default function MediaNodeView(props: {
    data: MediaNodeType
}) {
    const data = props.data;

    return (
        <>
            { data.content.length > 0 && (
                <>
                    { data.type == 'image' && (
                        <Image src={data.content} alt="image" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}></Image>
                    )}
                    { data.type == 'video' && (
                        <video width="100%" height="auto" controls preload="none">
                            <source src={data.content} />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </>
            ) }
        </>
    );
}