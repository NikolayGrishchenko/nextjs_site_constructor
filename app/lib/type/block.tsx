import { ButtonNodeType, ColumnNodeType, getButtonNodeDefault, getColumnNodeDefault, getListNodeDefault, getMediaNodeDefault, getTextNodeDefault, getTitleNodeDefault, ListNodeType, MediaNodeType, TextNodeType, TitleNodeType } from "./node";

export type HeaderBlockType = {
    show: boolean,
    background: string,
    title: TitleNodeType,
    text: TextNodeType,
    buttons: ButtonNodeType[],
};

export const getHeaderBlockDefault = (): HeaderBlockType => {
    return {
        show: true,
        background: '',
        title: getTitleNodeDefault(),
        text: getTextNodeDefault(),
        buttons: [
            getButtonNodeDefault(),
            getButtonNodeDefault(),
        ]
    };
}

export type ColumnsBlockType = {
    show: boolean,
    background: string,
    items: ColumnNodeType[],
};

export const getColumnsBlockDefault = (): ColumnsBlockType => {
    return {
        show: true,
        background: '',
        items: [
            getColumnNodeDefault(),
            getColumnNodeDefault(),
        ]
    };
}

export type SectionBlockType = {
    show: boolean,
    background: string,
    title: TitleNodeType,
    text: TextNodeType,
};

export const getSectionBlockDefault = (): SectionBlockType => {
    return {
        show: true,
        background: '',
        title: getTitleNodeDefault(),
        text: getTextNodeDefault(),
    };
}

export type MediaBlockType = {
    show: boolean,
    background: string,
    title: TitleNodeType,
    items: MediaNodeType[],
};

export const getMediaBlockDefault = (): MediaBlockType => {
    return {
        show: true,
        background: '',
        title: getTitleNodeDefault(),
        items: [
            getMediaNodeDefault(),
            getMediaNodeDefault(),
            getMediaNodeDefault(),
            getMediaNodeDefault(),
            getMediaNodeDefault(),
            getMediaNodeDefault(),
        ],
    };
}

export type ListBlockType = {
    show: boolean,
    background: string,
    title: TitleNodeType,
    list: ListNodeType,
};

export const getListBlockDefault = (): ListBlockType => {
    return {
        show: true,
        background: '',
        title: getTitleNodeDefault(),
        list: getListNodeDefault(),
    };
}

export type TitleButtonBlockType = {
    show: boolean,
    background: string,
    title: TitleNodeType,
    button: ButtonNodeType,
};

export const getTitleButtonBlockDefault = (): TitleButtonBlockType => {
    return {
        show: true,
        background: '',
        title: getTitleNodeDefault(),
        button: getButtonNodeDefault(),
    };
}

export type TextImageBlockType = {
    show: boolean,
    background: string,
    title: TitleNodeType,
    text: TextNodeType,
    media: MediaNodeType,
};

export const getTextImageBlockDefault = (): TextImageBlockType => {
    return {
        show: true,
        background: '',
        title: getTitleNodeDefault(),
        text: getTextNodeDefault(),
        media: getMediaNodeDefault(),
    };
}

export type FormBlockType = {
    show: boolean,
    background: string,
    title: TitleNodeType,
    settings: string[],
    button: ButtonNodeType,
};

export const getFormBlockDefault = (): FormBlockType => {
    return {
        show: true,
        background: '',
        title: getTitleNodeDefault(),
        settings: [
            'name',
            'birthday',
            'email',
            'phone',
            'position',
        ],
        button: getButtonNodeDefault(),
    };
}