'use client';

import { FormBlockType } from "@/app/lib/type/block";
import TitleNodeView from "../../node/view/title";
import InputNodeView from "../../node/view/input";
import { LandingContext } from "@/app/lib/context/landing";
import { useContext } from "react";
import { buildClass, buildStyleBlock, buildStyleNode } from "@/app/lib/util";


export default function FormBlockView(props: {
    data: FormBlockType,
}) {
    const data = props.data;

    const landing = useContext(LandingContext);

    const style = buildStyleBlock(data);

    const buttonStyle = buildStyleNode(data.button);
    const buttonClassName = buildClass(data.button);

    return (
        <>
            { (data.title.text.length > 0 || data.button.url.length > 0) && (
                <div className='row block form-block' style={style}>
                    { data.title.text.length > 0 && (
                        <div className="col-12 mt-4 mb-4">
                            <TitleNodeView data={data.title} />
                        </div>
                    )}
                    { data.button.url.length > 0 && (
                        <div className="col-12 mt-4 mb-4">
                            <form className="row" action={data.button.url}>
                                { data.settings.includes('name') && (
                                    <div className="col-12 mb-2">
                                        <InputNodeView data={{
                                            title: "Твое имя",
                                            name: "name",
                                            value: "",
                                            type: "text",
                                            required: true,
                                        }} />
                                    </div>
                                )}
                                { data.settings.includes('birthday') && (
                                    <div className="col-12 mb-2">
                                        <InputNodeView data={{
                                            title: "Дата рождения",
                                            name: "birthday",
                                            value: "",
                                            type: "date",
                                            required: true,
                                        }} />
                                    </div>
                                )}
                                { data.settings.includes('email') && (
                                    <div className="col-12 mb-2">
                                        <InputNodeView data={{
                                            title: "E-mail",
                                            name: "email",
                                            value: "",
                                            type: "email",
                                            required: true,
                                        }} />
                                    </div>
                                )}
                                { data.settings.includes('phone') && (
                                    <div className="col-12 mb-2">
                                        <InputNodeView data={{
                                            title: "Телефон",
                                            name: "phone",
                                            value: "",
                                            type: "text",
                                            required: true,
                                        }} />
                                    </div>
                                )}
                                { data.settings.includes('position') && (
                                    <div className="col-12 mb-2">
                                        <InputNodeView data={{
                                            title: "Какую должность хочешь получить?",
                                            name: "position",
                                            value: "",
                                            type: "text",
                                            required: true,
                                        }} />
                                    </div>
                                )}
                                <div className="col-12 d-flex justify-content-center">
                                    <button type="submit" className={'button-node ' + buttonClassName.join(' ')} style={buttonStyle}>{ data.button.text }</button>
                                </div>
                                <div className="col-12 text-center">
                                    <span>Нажимая на кнопку, вы соглашаетесь с условиями о <a href={landing?.site + '/policy'}>персональных данных</a></span>
                                </div>
                            </form>
                        </div>   
                    )}
                </div>
            )}
        </>
    );
}