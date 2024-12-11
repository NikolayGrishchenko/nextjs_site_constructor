import {
    ColumnsBlockType,
    getColumnsBlockDefault,
    getHeaderBlockDefault,
    getListBlockDefault,
    getMediaBlockDefault,
    getSectionBlockDefault,
    getTextImageBlockDefault,
    getTitleButtonBlockDefault,
    HeaderBlockType,
    ListBlockType,
    MediaBlockType,
    SectionBlockType,
    TextImageBlockType,
    TitleButtonBlockType
} from "./block";

export type QuizTemplateType = {
    header: HeaderBlockType,
    columns: ColumnsBlockType,
    section: SectionBlockType,
    media: MediaBlockType,
    list: ListBlockType,
    title_button: TitleButtonBlockType,
    text_image: TextImageBlockType,
};

export const getQuizTemplateDefault = (): QuizTemplateType => {
    return {
        header: getHeaderBlockDefault(),
        columns: getColumnsBlockDefault(),
        section: getSectionBlockDefault(),
        media: getMediaBlockDefault(),
        list: getListBlockDefault(),
        title_button: getTitleButtonBlockDefault(),
        text_image: getTextImageBlockDefault(),
    };
}