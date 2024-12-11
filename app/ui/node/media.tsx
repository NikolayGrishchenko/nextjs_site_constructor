'use client';

import { EditorEventType } from "@/app/lib/type/editor";
import { MediaNodeType } from "@/app/lib/type/node";
import { getFileContent } from "@/app/lib/util";
import Image from 'next/image';

export default function MediaNode(props: {
    data: MediaNodeType,
    editorEvent: EditorEventType | null,
    onChangeEditor: Function,
    onChangeData: Function,
}) {
    const data = props.data;

    async function handleChangeMedia(e: any) {
        let file = e.target.files[0];
        let type = file.type.split('/')[0];

        let fileContent = await getFileContent(file);

        props.onChangeData({
            ...data,
            type: type,
            content: fileContent,
        });
    }

    function handleClickDelete(e: any) {
        props.onChangeData({
            ...data,
            type: '',
            content: '',
        });
    }

    return (
        <div className="row">
            { data.content.length > 0 && (
                <div className="col-12">
                    { data.type == 'image' && (
                        <Image src={data.content} alt="image" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}></Image>
                    )}
                    { data.type == 'video' && (
                        <video width="100%" height="auto" controls preload="none">
                            <source src={data.content} />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
            ) }
            <div className="col-12">
                <input type="file" onChange={handleChangeMedia} className='media-node-input' accept="video/*, image/*" />
            </div>
            <div className="col-12">
                { data.content.length > 0 && (
                    <button type="button" className="btn btn-danger" onClick={handleClickDelete}>Удалить</button>
                )}
            </div>
        </div>
    );
}