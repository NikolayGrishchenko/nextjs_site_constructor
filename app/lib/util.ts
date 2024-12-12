import { ColumnsBlockType, FormBlockType, HeaderBlockType, ListBlockType, MediaBlockType, SectionBlockType, TextImageBlockType, TitleButtonBlockType } from "./type/block";
import { mapLandingTemplate } from "./type/landing";
import { ButtonNodeType, TextNodeType, TitleNodeType } from "./type/node";

export const getLandingTemplateName = (code: keyof typeof mapLandingTemplate) => {
    return mapLandingTemplate[code];
};

export const numberToBoolean = (value: number): boolean => {
    return !!value;
}

export const booleanToString = (value: boolean): string => {
    return value ? 'Да' : 'Нет';
}

export const dateFormat = (dateString: string): string => {
    return (new Date(dateString)).toLocaleDateString();
}

export const getFileContent = (file: Blob): Promise<string | ArrayBuffer | null> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.addEventListener(
            "load", () => {
                resolve(reader.result);
            },
            false,
        );
    
        if (file) {
            reader.readAsDataURL(file);
        } else {
            reject('');
        }
    });
}

export const buildStyleNode = (data: TitleNodeType | TextNodeType | ButtonNodeType): object => {
    let style = {
        color: data.color || '#000000',
    };
    return style;
}

export const buildStyleBlock = (data: HeaderBlockType | ColumnsBlockType | SectionBlockType | MediaBlockType | ListBlockType | TitleButtonBlockType | TextImageBlockType | FormBlockType): object => {
    let style:{
        backgroundImage?: string,
    } = {};
    if (data.background) {
        style.backgroundImage = 'url(' + data.background + ')';
    }
    return style;
}

export const buildClass = (data: TitleNodeType | TextNodeType | ButtonNodeType): string[] => {
    let className = [];

    switch (data.align) {
        case 'left':
            className.push('text-start');
            break;
        case 'center':
            className.push('text-center');
            break;
        case 'right':
            className.push('text-end');
            break;
        default:
            break;
    }

    if (data.border) {
        className.push('border');
    }

    return className;
}