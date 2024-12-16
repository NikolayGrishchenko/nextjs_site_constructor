import {
    ButtonNodeType,
    ColumnNodeType,
    getButtonNodeDefault,
    getColumnNodeDefault,
    getListNodeDefault,
    getMediaNodeDefault,
    getSocialNodeDefault,
    getTextNodeDefault,
    getTitleNodeDefault,
    ListNodeType,
    MediaNodeType,
    SocialNodeType,
    TextNodeType,
    TitleNodeType
} from "./node";

export type HeaderBlockType = {
    type: string,
    show: boolean,
    background: string,
    title: TitleNodeType,
    text: TextNodeType,
    buttons: ButtonNodeType[],
};

export type ColumnsBlockType = {
    type: string,
    show: boolean,
    background: string,
    items: ColumnNodeType[],
};

export type SectionBlockType = {
    type: string,
    show: boolean,
    background: string,
    title: TitleNodeType,
    text: TextNodeType,
};

export type MediaBlockType = {
    type: string,
    show: boolean,
    background: string,
    title: TitleNodeType,
    items: MediaNodeType[],
};

export type ListBlockType = {
    type: string,
    show: boolean,
    background: string,
    title: TitleNodeType,
    list: ListNodeType,
};

export type TitleButtonBlockType = {
    type: string,
    show: boolean,
    background: string,
    title: TitleNodeType,
    button: ButtonNodeType,
};

export type TextImageBlockType = {
    type: string,
    show: boolean,
    background: string,
    title: TitleNodeType,
    text: TextNodeType,
    media: MediaNodeType,
};

export type FormBlockType = {
    type: string,
    show: boolean,
    background: string,
    title: TitleNodeType,
    settings: string[],
    button: ButtonNodeType,
};

export type SocialBlockType = {
    type: string,
    show: boolean,
    background: string,
    items: SocialNodeType[],
};

export type BlockType = HeaderBlockType | ColumnsBlockType | SectionBlockType | MediaBlockType | ListBlockType | TitleButtonBlockType | TextImageBlockType | FormBlockType | SocialBlockType;

export const getHeaderBlockDefault = (): HeaderBlockType => {
    return {
        type: 'header',
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

export const getColumnsBlockDefault = (): ColumnsBlockType => {
    return {
        type: 'columns',
        show: true,
        background: '',
        items: [
            getColumnNodeDefault(),
            getColumnNodeDefault(),
        ]
    };
}

export const getSectionBlockDefault = (): SectionBlockType => {
    return {
        type: 'section',
        show: true,
        background: '',
        title: getTitleNodeDefault(),
        text: getTextNodeDefault(),
    };
}

export const getMediaBlockDefault = (): MediaBlockType => {
    return {
        type: 'media',
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

export const getListBlockDefault = (): ListBlockType => {
    return {
        type: 'list',
        show: true,
        background: '',
        title: getTitleNodeDefault(),
        list: getListNodeDefault(),
    };
}

export const getTitleButtonBlockDefault = (): TitleButtonBlockType => {
    return {
        type: 'title_button',
        show: true,
        background: '',
        title: getTitleNodeDefault(),
        button: getButtonNodeDefault(),
    };
}

export const getTextImageBlockDefault = (): TextImageBlockType => {
    return {
        type: 'text_image',
        show: true,
        background: '',
        title: getTitleNodeDefault(),
        text: getTextNodeDefault(),
        media: getMediaNodeDefault(),
    };
}

export const getFormBlockDefault = (): FormBlockType => {
    return {
        type: 'form',
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

export const getSocialBlockDefault = (): SocialBlockType => {
    return {
        type: 'social',
        show: true,
        background: '',
        items: [
            getSocialNodeDefault(),
            getSocialNodeDefault(),
            getSocialNodeDefault(),
            getSocialNodeDefault(),
            getSocialNodeDefault(),
            getSocialNodeDefault(),
            getSocialNodeDefault(),
            getSocialNodeDefault(),
        ]
    };
}