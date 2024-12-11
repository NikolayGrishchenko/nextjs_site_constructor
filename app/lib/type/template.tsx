import {
    ColumnsBlockType,
    getColumnsBlockDefault,
    getHeaderBlockDefault,
    getMediaBlockDefault,
    getSectionBlockDefault,
    getTextImageBlockDefault,
    getTitleButtonBlockDefault,
    HeaderBlockType,
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
    title_button: TitleButtonBlockType,
    text_image: TextImageBlockType,
};

export const getQuizTemplateDefault = (): QuizTemplateType => {
    return {
        header: getHeaderBlockDefault(),
        columns: getColumnsBlockDefault(),
        section: getSectionBlockDefault(),
        media: getMediaBlockDefault(),
        title_button: getTitleButtonBlockDefault(),
        text_image: getTextImageBlockDefault(),
    };
}