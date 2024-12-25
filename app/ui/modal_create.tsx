'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { mapLandingTemplate } from "../lib/type/landing";
import { getImageTemplateDefault, getQuizTemplateDefault, getSocialTemplateDefault, getTextImageTemplateDefault } from "../lib/type/template";

export default function ModalCreate() {
    let [opened, setOpened] = useState(false);
    let [name, setName] = useState('');
    let [template, setTemplate] = useState('');

    const { push } = useRouter();

    const isFilled = name.length > 0 && template.length > 0;

    let templates = [];
    let key: keyof typeof mapLandingTemplate;
    for (key in mapLandingTemplate) {
        if (Object.prototype.hasOwnProperty.call(mapLandingTemplate, key)) {
            const element = mapLandingTemplate[key];
            templates.push({
                code: key,
                name: element,
            });
        }
    }

    function handleChangeName(e: any) {
        setName(e.target.value)
    }

    function handleChangeTemplate(e: any) {
        setTemplate(e.target.value)
    }

    function handleClickCreate() {
        setOpened(true);
    }

    function handleClickClose() {
        setOpened(false);
    }

    async function handleSubmit(e: any) {
        e.preventDefault();

        let data = null;
        switch (template) {
            case 'quiz':
                data = getQuizTemplateDefault();
                break;
            case 'social':
                data = getSocialTemplateDefault();
                break;
            case 'image':
                data = getImageTemplateDefault();
                break;
            case 'text_image':
                data = getTextImageTemplateDefault();
                break;
            default:
                break;
        }

        let result = await axios.post(
            process.env.BACKEND_DOMAIN + '/api/landings', {
                name,
                template,
                data: JSON.stringify(data),
            }
        );
        let id = result.data.id;
        push(`/admin/landing/${id}`);
    }

    return <>
        <button type="button" className="btn btn-primary" onClick={handleClickCreate}>Создать</button>
        { opened && (
            <>
                <div className="modal fade show" style={{display: 'block'}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="modal-title">Создание</div>
                                <button type="button" className="btn-close" onClick={handleClickClose}></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-12 mb-2">
                                            <label className="w-100">
                                                <div className="modal-title">Название</div>
                                                <input onChange={handleChangeName} type="text" name="name" className="modal-input w-100" placeholder="Название" required></input>
                                            </label>
                                        </div>
                                        <div className="col-12 mb-2">
                                            <div className="modal-title">Шаблон</div>
                                            <div className="row">
                                                { templates.map(template => {
                                                    return <label key={template.code} className="col-12">
                                                        <input onChange={handleChangeTemplate} type="radio" name="type" value={template.code} className="d-inline-block me-1" required></input>
                                                        <span>{template.name}</span>
                                                    </label>;
                                                }) }
                                            </div>
                                        </div>
                                        { isFilled && (
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-primary">Продолжить</button>
                                            </div>
                                        ) }
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-backdrop fade show"></div>
            </>
        )}
    </>;
}