import {
    ColumnsBlockType,
    getColumnsBlockDefault,
    getHeaderBlockDefault,
    getMediaBlockDefault,
    getSectionBlockDefault,
    getTitleButtonBlockDefault,
    HeaderBlockType,
    MediaBlockType,
    SectionBlockType,
    TitleButtonBlockType
} from "./block";

export type QuizTemplateType = {
    header: HeaderBlockType,
    columns: ColumnsBlockType,
    section: SectionBlockType,
    media: MediaBlockType,
    title_button: TitleButtonBlockType,
};

export const getQuizTemplateDefault = (): QuizTemplateType => {
    return {
        header: getHeaderBlockDefault(),
        columns: getColumnsBlockDefault(),
        section: getSectionBlockDefault(),
        media: getMediaBlockDefault(),
        title_button: getTitleButtonBlockDefault(),
    };
}