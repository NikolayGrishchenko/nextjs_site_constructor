import { ImageTemplateType, QuizTemplateType, SocialTemplateType, TextImageTemplateType } from "./template";

export const mapLandingTemplate = {
    quiz: 'Анкета',
    social: 'Соцсети',
    image: 'Картинки',
    text_image: 'Текст + картинки',
};

export type LandingType = {
    id: number,
    name: string,
    date_create: string,
    date_edit: string,
    template: keyof typeof mapLandingTemplate,
    is_published: boolean,
    site?: string,
    url?: string,
    data: QuizTemplateType | SocialTemplateType | ImageTemplateType | TextImageTemplateType,
};

export type LandingListType = {
    items: Array<LandingType>,
    meta: {
        totalItems: number,
        itemCount: number,
        itemsPerPage: number,
        totalPages: number,
        currentPage: number,
    }
} | null;