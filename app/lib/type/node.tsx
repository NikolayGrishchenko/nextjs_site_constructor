export type TextNodeType = {
    text: string,
    color: string,
    align: string,
    border: boolean,
};

export const getTextNodeDefault = (): TextNodeType => {
    return {
        text: '',
        color: '#000000',
        align: 'left',
        border: false,
    };
}

export type TitleNodeType = {
    text: string,
    color: string,
    align: string,
    border: boolean,
};

export const getTitleNodeDefault = (): TitleNodeType => {
    return {
        text: '',
        color: '#000000',
        align: 'left',
        border: false,
    };
}

export type ButtonNodeType = {
    text: string,
    url: string,
    border: boolean,
    color: string,
    align: string,
};

export const getButtonNodeDefault = (): ButtonNodeType => {
    return {
        text: 'Кнопка',
        url: '',
        border: false,
        color: '#000000',
        align: 'center',
    };
}

export type ColumnNodeType = {
    title: TitleNodeType,
    text: TextNodeType,
};

export const getColumnNodeDefault = (): ColumnNodeType => {
    return {
        title: getTitleNodeDefault(),
        text: getTextNodeDefault(),
    };
}

export type MediaNodeType = {
    type: string,
    content: string,
};

export const getMediaNodeDefault = (): MediaNodeType => {
    return {
        type: '',
        content: '',
    };
}

export type ListNodeType = {
    type: string,
    color: string,
    items: string[],
};

export const getListNodeDefault = (): ListNodeType => {
    return {
        type: 'ordered',
        color: '#000000',
        items: [''],
    };
}

export type InputNodeType = {
    title: string,
    value: string,
    name: string,
    type: string,
    required: boolean,
};

export const getInputNodeDefault = (): InputNodeType => {
    return {
        title: '',
        value: '',
        name: '',
        type: 'text',
        required: false,
    };
}

export type SocialNodeType = {
    image: string,
    url: string,
};

export const getSocialNodeDefault = (): SocialNodeType => {
    return {
        image: '',
        url: '',
    };
}