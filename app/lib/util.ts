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

export const getFileContent = (file: any): Promise<string | ArrayBuffer | null> => {
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

export const buildStyle = (data: TitleNodeType | TextNodeType | ButtonNodeType): object => {
    let style = {
        color: data.color || '#000000',
    };
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