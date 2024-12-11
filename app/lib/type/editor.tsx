export type EditorType = {
    buttons: string[],
    data: {
        show?: boolean,
        color?: string,
        align?: string,
        border?: boolean,
        background?: string,
        list?: string,
    }
};

export type EditorEventType = {
    type: string,
    data: {
        show?: boolean,
        align?: string,
        color?: string,
        border?: boolean,
        background?: string,
        list?: string,
    },
};
