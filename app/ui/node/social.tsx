'use client';

import { EditorEventType } from "@/app/lib/type/editor";
import { SocialNodeType } from "@/app/lib/type/node";
import { getFileContent } from "@/app/lib/util";
import Image from 'next/image';

export default function SocialNode(props: {
    data: SocialNodeType,
    editorEvent: EditorEventType | null,
    onChangeEditor: Function,
    onChangeData: Function,
}) {
    const data = props.data;

    function handleClickImage(e: any) {
        e.stopPropagation();

        props.onChangeEditor({
            buttons: [],
        });
    }

    async function handleChangeImage(e: any) {
        let file = e.target.files[0];

        let fileContent = await getFileContent(file);

        props.onChangeData({
            ...data,
            image: fileContent,
        });
    }

    function handleClickUrl(e: any) {
        e.stopPropagation();

        props.onChangeEditor({
            buttons: [],
        });
    }

    function handleChangeUrl(e: any) {
        props.onChangeData({
            ...data,
            url: e.target.value
        });
    }

    return (
        <div className="row">
            <label className="col-6 mb-1" onClick={handleClickImage}>
                <span>Загрузить иконку</span>
                <input type="file" onChange={handleChangeImage} className='media-node-input' accept="image/*" />
                { data.image.length > 0 && (
                    <div className="col-12">
                        <Image src={data.image} alt="image" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}></Image>
                    </div>
                ) }
            </label>
            <label className="col-6 mb-1">
                <span>URL</span>
                <input onClick={handleClickUrl} onChange={handleChangeUrl} className='node-input' defaultValue={data.url} />
            </label>
        </div>
    );
}