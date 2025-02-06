'use client';

import { EditorEventType, EditorType } from "@/app/lib/type/editor";
import { SocialNodeType } from "@/app/lib/type/node";
import { getFileContent } from "@/app/lib/util";
import Image from 'next/image';

export default function SocialNode(props: {
    data: SocialNodeType,
    editorEvent: EditorEventType | null,
    onChangeEditor: (editorData: EditorType) => void,
    onChangeData: (data: SocialNodeType) => void,
}) {
    const data = props.data;

    function handleClickImage(e: React.MouseEvent) {
        e.stopPropagation();

        props.onChangeEditor({
            buttons: [],
            data: {}
        });
    }

    async function handleChangeImage(e: React.ChangeEvent) {
        const file = (e.target as HTMLInputElement)?.files?.[0];
        if (file) {
            const fileContent = await getFileContent(file);

            props.onChangeData({
                ...data,
                image: fileContent as string,
            });
        }
    }

    function handleClickUrl(e: React.MouseEvent) {
        e.stopPropagation();

        props.onChangeEditor({
            buttons: [],
            data: {}
        });
    }

    function handleChangeUrl(e: React.ChangeEvent) {
        props.onChangeData({
            ...data,
            url: (e.target as HTMLInputElement).value
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