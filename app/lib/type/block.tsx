import { ButtonNodeType, ColumnNodeType, getButtonNodeDefault, getColumnNodeDefault, getMediaNodeDefault, getTextNodeDefault, getTitleNodeDefault, MediaNodeType, TextNodeType, TitleNodeType } from "./node";

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
