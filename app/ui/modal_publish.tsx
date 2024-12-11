'use client';

import { useEffect, useState } from "react";

export default function ModalPublish({
    onPublish,
    site,
    url,
    isPublished
}: {
    onPublish: Function,
    site: string,
    url: string,
    isPublished: boolean
}
) {
    let [opened, setOpened] = useState(false);
    let [siteValue, setSite] = useState('');
    let [urlValue, setUrl] = useState('');

    useEffect(() => {
        setSite(site);
        setUrl(url);
    }, [site, url]);

    const isFilled = siteValue && siteValue.length > 0;

    function handleChangeSite(e: any) {
        setSite(e.target.value)
    }

    function handleChangeUrl(e: any) {
        setUrl(e.target.value)
    }

    function handleClickOpen() {
        setOpened(true);
    }

    function handleClickClose() {
        setOpened(false);
    }

    async function handleClickPublish(e: any) {
        await onPublish(siteValue, urlValue, true);
        setOpened(false);
    }

    async function handleClickUnPublish(e: any) {
        await onPublish(siteValue, urlValue, false);
        setOpened(false);
    }

    async function handleClickSave(e: any) {
        await onPublish(siteValue, urlValue, isPublished);
        setOpened(false);
    }

    return <>
        <button type="button" className="btn btn-primary" onClick={handleClickOpen}>Опубликовать</button>
        { opened && (
            <>
                <div className="modal fade show" style={{display: 'block'}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="modal-title">Публикация</div>
                                <button type="button" className="btn-close" onClick={handleClickClose}></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-12 mb-2">
                                        <label className="w-100">
                                            <div className="modal-title">Сайт</div>
                                            <input onChange={handleChangeSite} type="text" name="site" defaultValue={siteValue} className="modal-input w-100" placeholder="Сайт" required />
                                        </label>
                                    </div>
                                    <div className="col-12 mb-2">
                                        <label className="w-100">
                                            <div className="modal-title">Имя (необязательно)</div>
                                            <input onChange={handleChangeUrl} type="text" name="url" defaultValue={urlValue} className="modal-input w-100" placeholder="Имя" />
                                        </label>
                                    </div>
                                    { isPublished ? (
                                        <>
                                            <div className="col-6">
                                                <button type="button" className="btn btn-primary" onClick={handleClickSave}>Сохранить</button>
                                            </div>
                                            <div className="col-6">
                                                <button type="button" className="btn btn-primary" onClick={handleClickUnPublish}>Снять c публикации</button>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            { isFilled && (
                                                <div className="col-12">
                                                    <button type="button" className="btn btn-primary" onClick={handleClickPublish}>Опубликовать</button>
                                                </div>
                                            ) }
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-backdrop fade show"></div>
            </>
        )}
    </>;
}