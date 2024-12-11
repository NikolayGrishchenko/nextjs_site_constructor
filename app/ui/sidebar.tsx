'use client';

import ModalPublish from "./modal_publish";

export default function Sidebar({
    onSave,
    onPublish,
    onView,
    onExit,
    site,
    url,
    isPublished,
    view
}: {
    onSave: Function,
    onPublish: Function,
    onView: Function,
    onExit: Function,
    site: string,
    url: string,
    isPublished: boolean,
    view: boolean
}
) {
    function handleClickSave(e: any) {
        onSave();
    }

    function handleClickView(e: any) {
        onView();
    }

    function handleClickExit(e: any) {
        onExit();
    }

    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <div className="mb-2">
                    <button type="button" className="btn btn-primary" onClick={handleClickSave}>Сохранить</button>
                </div>
                <div className="mb-2">
                    <ModalPublish onPublish={onPublish} site={site} url={url} isPublished={isPublished}></ModalPublish>
                </div>
                <div className="mb-2">
                    <button type="button" className="btn btn-primary" onClick={handleClickView}>{view ? 'Редактирование' : 'Просмотр'}</button>
                </div>
            </div>
            <div className="sidebar-bottom">
                <div>
                    <button type="button" className="btn btn-primary" onClick={handleClickExit}>Выйти</button>
                </div>
            </div>
        </div>
    );
}