import {
    ColumnsBlockType,
    FormBlockType,
    getColumnsBlockDefault,
    getFormBlockDefault,
    getHeaderBlockDefault,
    getListBlockDefault,
    getMediaBlockDefault,
    getSectionBlockDefault,
    getSocialBlockDefault,
    getTextImageBlockDefault,
    getTitleButtonBlockDefault,
    HeaderBlockType,
    ListBlockType,
    MediaBlockType,
    SectionBlockType,
    SocialBlockType,
    TextImageBlockType,
    TitleButtonBlockType
} from "./block";

export type QuizTemplateType = {
    header: HeaderBlockType,
    columns: ColumnsBlockType,
    section: SectionBlockType,
    media: MediaBlockType,
    list: ListBlockType,
    media2: MediaBlockType,
    section2: SectionBlockType,
    title_button: TitleButtonBlockType,
    media3: MediaBlockType,
    form: FormBlockType,
    section3: SectionBlockType,
    social: SocialBlockType,
};

export type SocialTemplateType = {
    header: HeaderBlockType,
    section: SectionBlockType,
    section2: SectionBlockType,
    social: SocialBlockType,
    section3: SectionBlockType,
    social2: SocialBlockType,
    section4: SectionBlockType,
    social3: SocialBlockType,
    section5: SectionBlockType,
    social4: SocialBlockType,
    title_button: TitleButtonBlockType,
};

export type ImageTemplateType = {
    header: HeaderBlockType,
    text_image: TextImageBlockType,
    title_button: TitleButtonBlockType,
    media: MediaBlockType,
    section: SectionBlockType,
    media2: MediaBlockType,
    media3: MediaBlockType,
    title_button2: TitleButtonBlockType,
    media4: MediaBlockType,
    section2: SectionBlockType,
    media5: MediaBlockType,
    media6: MediaBlockType,
    list: ListBlockType,
    media7: MediaBlockType,
    section3: SectionBlockType,
    media8: MediaBlockType,
    media9: MediaBlockType,
    section4: SectionBlockType,
    title_button3: TitleButtonBlockType,
    media10: MediaBlockType,
    media11: MediaBlockType,
    text_image2: TextImageBlockType,
    list2: ListBlockType,
    title_button4: TitleButtonBlockType,
    media12: MediaBlockType,
    section5: SectionBlockType,
    media13: MediaBlockType,
    media14: MediaBlockType,
    title_button5: TitleButtonBlockType,
    media15: MediaBlockType,
};

export type TextImageTemplateType = {
    header: HeaderBlockType,
    text_image: TextImageBlockType,
    section: SectionBlockType,
    media: MediaBlockType,
    list: ListBlockType,
    section2: SectionBlockType,
    text_image2: TextImageBlockType,
    title_button: TitleButtonBlockType,
    text_image3: TextImageBlockType,
    text_image4: TextImageBlockType,
    section3: SectionBlockType,
    media2: MediaBlockType,
    section4: SectionBlockType,
    text_image5: TextImageBlockType,
    text_image6: TextImageBlockType,
    text_image7: TextImageBlockType,
    section5: SectionBlockType,
    media3: MediaBlockType,
    title_button2: TitleButtonBlockType,
}

export type TemplateType = QuizTemplateType | SocialTemplateType | ImageTemplateType | TextImageTemplateType;

export const getSocialTemplateDefault = (): SocialTemplateType => {
    return {
        header: getHeaderBlockDefault(),
        section: getSectionBlockDefault(),
        section2: getSectionBlockDefault(),
        social: getSocialBlockDefault(),
        section3: getSectionBlockDefault(),
        social2: getSocialBlockDefault(),
        section4: getSectionBlockDefault(),
        social3: getSocialBlockDefault(),
        section5: getSectionBlockDefault(),
        social4: getSocialBlockDefault(),
        title_button: getTitleButtonBlockDefault(),
    };
}

export const getQuizTemplateDefault = (): QuizTemplateType => {
    return {
        header: getHeaderBlockDefault(),
        columns: getColumnsBlockDefault(),
        section: getSectionBlockDefault(),
        media: getMediaBlockDefault(),
        list: getListBlockDefault(),
        media2: getMediaBlockDefault(),
        section2: getSectionBlockDefault(),
        title_button: getTitleButtonBlockDefault(),
        media3: getMediaBlockDefault(),
        form: getFormBlockDefault(),
        section3: getSectionBlockDefault(),
        social: getSocialBlockDefault(),
    };
}

export const getImageTemplateDefault = (): ImageTemplateType => {
    return {
        header: getHeaderBlockDefault(),
        text_image: getTextImageBlockDefault(),
        title_button: getTitleButtonBlockDefault(),
        media: getMediaBlockDefault(),
        section: getSectionBlockDefault(),
        media2: getMediaBlockDefault(),
        media3: getMediaBlockDefault(),
        title_button2: getTitleButtonBlockDefault(),
        media4: getMediaBlockDefault(),
        section2: getSectionBlockDefault(),
        media5: getMediaBlockDefault(),
        media6: getMediaBlockDefault(),
        list: getListBlockDefault(),
        media7: getMediaBlockDefault(),
        section3: getSectionBlockDefault(),
        media8: getMediaBlockDefault(),
        media9: getMediaBlockDefault(),
        section4: getSectionBlockDefault(),
        title_button3: getTitleButtonBlockDefault(),
        media10: getMediaBlockDefault(),
        media11: getMediaBlockDefault(),
        text_image2: getTextImageBlockDefault(),
        list2: getListBlockDefault(),
        title_button4: getTitleButtonBlockDefault(),
        media12: getMediaBlockDefault(),
        section5: getSectionBlockDefault(),
        media13: getMediaBlockDefault(),
        media14: getMediaBlockDefault(),
        title_button5: getTitleButtonBlockDefault(),
        media15: getMediaBlockDefault(),
    };
}

export const getTextImageTemplateDefault = (): TextImageTemplateType => {
    return {
        header: getHeaderBlockDefault(),
        text_image: getTextImageBlockDefault(),
        section: getSectionBlockDefault(),
        media: getMediaBlockDefault(),
        list: getListBlockDefault(),
        section2: getSectionBlockDefault(),
        text_image2: getTextImageBlockDefault(),
        title_button: getTitleButtonBlockDefault(),
        text_image3: getTextImageBlockDefault(),
        text_image4: getTextImageBlockDefault(),
        section3: getSectionBlockDefault(),
        media2: getMediaBlockDefault(),
        section4: getSectionBlockDefault(),
        text_image5: getTextImageBlockDefault(),
        text_image6: getTextImageBlockDefault(),
        text_image7: getTextImageBlockDefault(),
        section5: getSectionBlockDefault(),
        media3: getMediaBlockDefault(),
        title_button2: getTitleButtonBlockDefault(),
    };
}