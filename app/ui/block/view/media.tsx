'use client';

import { MediaBlockType } from "@/app/lib/type/block";
import MediaNodeView from "../../node/view/media";
import TitleNodeView from "../../node/view/title";


export default function MediaBlockView(props: {
    data: MediaBlockType,
}) {
    const data = props.data;

    let style:{
        backgroundImage?: string,
    } = {};
    if (data.background) {
        style.backgroundImage = 'url(' + data.background + ')';
    }

    let dataFilled = data.items.filter(item => item.content.length > 0);
    let colSize = '12';
    let colStyle: {
        flex?: string,
        width?: string,
    } = {};
    switch (dataFilled.length) {
        case 1:
            colSize = '12';
            break;
        case 2:
            colSize = '6';
            break;
        case 3:
            colSize = '4';
            break;
        case 4:
            colSize = '3';
            break;
        case 5:
            colSize = 'auto';
            
            colStyle.flex = '0 0 auto';
            colStyle.width = '20%';
            break;
        case 6:
            colSize = '4';
            break;
        default:
            break;
    }
    
    return (
        <>
            { data.show && (
                data.title.text.length > 0 ||
                dataFilled.length > 0
            ) && (
                <div className='row block media-block' style={style}>
                    { data.title.text.length > 0 && (
                        <div className="col-12 mt-2 mb-4">
                            <TitleNodeView data={data.title} />
                        </div>
                    )}
                    { dataFilled.length > 0 && (
                        <div className="col-12 mt-2">
                            <div className="row">
                                { dataFilled.map((item, index) => {
                                    return (
                                        <div key={index} className={'col-' + colSize + ' mb-2'} style={colStyle}>
                                            <MediaNodeView data={item} />
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