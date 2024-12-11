// Landing Page
let Landing = {
    id: 'int',
    name: 'string',
    date_create: 'date',
    date_edit: 'date',
    template: 'string',
    is_published: 'bool',
    site: 'string',
    url: 'string',
};

// base Node
let BaseNode = {
    
};
// extend BaseNode, default style
let TextNode = {
    text: 'string',
    color: 'string',
    align: 'string',
    border: 'bool',
};
// extend TextNode, another style
let TitleNode = {

};
// extend TextNode, another style
let ButtonNode = {
    url: 'string',
};
// extend BaseNode
let MediaContent = {
    url: 'string',
}
// extend MediaContent
let ImageNode = {

}
// extend MediaContent
let VideoNode = {
    
}
// extend TextNode
let ListItemNode = {
    type: 'string', // from parent List
}
// extend BaseNode
let ListNode = {
    type: 'string', // enum or marked
    items: [
        ListItemNode,
    ],
}
// extend BaseNode
let FormNode = {
    name: 'bool', // is show name
    birthday: 'bool', // is show birthday
    email: 'bool', // is show email
    phone: 'bool', // is show phone
    post: 'bool', // is show post
}
// extend ImageNode
let SocialNode = {
    icon: ImageNode,
    url: 'string',
};

// base Block
let BaseBlock = {
    show: 'bool',
    background: 'string',
    nodes: [
        TextNode,
        TitleNode,
        ButtonNode,
        ImageNode,
        VideoNode,
        ListNode,
        FormNode,
        SocialNode,
    ],
}
// extend BaseBlock
let HeaderBlock = {
    title: TitleNode,
    text: TextNode,
    buttons: [
        ButtonNode,
        ButtonNode,
    ],
};
// extend BaseBlock
let ColumnsBlock = {
    items: [
        {
            title: TitleNode,
            text: TextNode,
        }
    ],
}
// extend BaseBlock
let SectionBlock = {
    title: TitleNode,
    text: TextNode,
};
// extend BaseBlock
let MediaBlock = {
    title: TitleNode,
    items: [
        ImageNode,
        VideoNode,
    ],
};
// extend BaseBlock
let ListBlock = {
    title: TitleNode,
    list: ListNode,
};
// extend BaseBlock
let TextButtonBlock = {
    text: TextNode,
    button: ButtonNode,
};
// extend BaseBlock
let FormBlock = {
    title: TitleNode,
    form: FormNode,
    button: ButtonNode,
    policy_url: 'string',
};
// extend BaseBlock
let SocialBlock = {
    items: [
        SocialNode,
    ]
};
// extend BaseBlock
let TextImageBlock = {
    title: TitleNode,
    text: TextNode,
    image: ImageNode,
};

// base Template
let BaseTemplate = {
    blocks: [
        HeaderBlock,
        ColumnsBlock,
        SectionBlock,
        MediaBlock,
        ListBlock,
        TextButtonBlock,
        FormBlock,
        SocialBlock,
        TextImageBlock,
    ],
};
// extend BaseTemplate
let QuizTemplate = {
    block: [
        HeaderBlock,
        ColumnsBlock,
        SectionBlock,
        MediaBlock,
        ListBlock,
        MediaBlock,
        SectionBlock,
        TextButtonBlock,
        MediaBlock,
        FormBlock,
        SectionBlock,
        SocialBlock,
    ]
};
// extend BaseTemplate
let SocialTemplate = {
    block: [
        HeaderBlock,
        SectionBlock,
        SectionBlock,
        SocialBlock,
        SectionBlock,
        SocialBlock,
        SectionBlock,
        SocialBlock,
        SectionBlock,
        SocialBlock,
        TextButtonBlock,
    ]
};
// extend BaseTemplate
let ImageTemplate = {
    block: [
        HeaderBlock,
        TextImageBlock,
        TextButtonBlock,
        MediaBlock,
        SectionBlock,
        MediaBlock,
        MediaBlock,
        TextButtonBlock,
        MediaBlock,
        SectionBlock,
        MediaBlock,
        MediaBlock,
        ListBlock,
        MediaBlock,
        SectionBlock,
        MediaBlock,
        MediaBlock,
        SectionBlock,
        TextButtonBlock,
        MediaBlock,
        MediaBlock,
        TextImageBlock,
        ListBlock,
        TextButtonBlock,
        MediaBlock,
        SectionBlock,
        MediaBlock,
        MediaBlock,
        TextButtonBlock,
        MediaBlock,
    ]
};
// extend BaseTemplate
let TextImageTemplate = {
    block: [
        HeaderBlock,
        TextImageBlock,
        SectionBlock,
        MediaBlock,
        ListBlock,
        SectionBlock,
        TextImageBlock,
        TextButtonBlock,
        TextImageBlock,
        TextImageBlock,
        SectionBlock,
        MediaBlock,
        SectionBlock,
        TextImageBlock,
        TextImageBlock,
        TextImageBlock,
        SectionBlock,
        MediaBlock,
        TextButtonBlock,
    ]
};
