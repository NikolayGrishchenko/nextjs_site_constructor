'use client';

import { SocialBlockType } from "@/app/lib/type/block";
import { buildStyleBlock } from "@/app/lib/util";
import SocialNodeView from "../../node/view/social";


export default function SocialBlockView(props: {
    data: SocialBlockType,
}) {
    const data = props.data;

    const style = buildStyleBlock(data);

    const dataFilled = data.items.filter(item => item.image.length > 0 && item.url.length > 0);
    
    return (
        <>
            { data.show && dataFilled.length > 0 && (
                <div className='row block social-block' style={style}>
                    { dataFilled.length > 0 && (
                        <div className="col-12 mt-2 mb-2">
                            <div className="row justify-content-center">
                                { dataFilled.map((item, index) => {
                                    return (
                                        <div key={index} className='col-auto'>
                                            <SocialNodeView data={item} />
                                        </div>
                                    )
                                }) }
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}