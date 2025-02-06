'use client';

import Image from 'next/image';
import { EditorType, EditorEventType } from '../lib/type/editor';
import { getFileContent } from '../lib/util';

export default function Editor(props: {
    config: EditorType,
    onButtonClick: (editorEventData: EditorEventType) => void
}) {
    const config = props.config;

    function handleClickAlign(align: string) {
        props.onButtonClick({
            type: 'align',
            data: {
                align
            }
        });
    }

    function handleClickList(list: string) {
        props.onButtonClick({
            type: 'list',
            data: {
                list
            }
        });
    }

    function handleChangeColor(e: React.ChangeEvent) {
        props.onButtonClick({
            type: 'color',
            data: {
                color: (e.target as HTMLInputElement).value,
            }
        });
    }

    function handleClickBorder() {
        props.onButtonClick({
            type: 'border',
            data: {
                border: !config.data.border,
            }
        });
    }

    function handleClickShow() {
        props.onButtonClick({
            type: 'show',
            data: {
                show: !config.data.show,
            }
        });
    }

    async function handleChangeBackground(e: React.ChangeEvent) {
        const file = (e.target as HTMLInputElement)?.files?.[0];
        if (file) {
            const fileContent = await getFileContent(file);
            props.onButtonClick({
                type: 'background',
                data: {
                    background: fileContent as string,
                }
            });
        }
    }

    function handleClickBackgroundDelete() {
        props.onButtonClick({
            type: 'background',
            data: {
                background: '',
            }
        });
    }

    return (
        <div className="editor">
            <div className="editor-column">
                {config.buttons.includes('show') && (
                    <div className={'editor-button'} onClick={handleClickShow} title={config.data.show ? 'Скрыть блок' : 'Отобразить блок'}>
                        { config.data.show ? (
                            <Image src="/images/editor_hide.png" alt="hide" width="20" height="20"></Image>
                        ) : (
                            <Image src="/images/editor_show.png" alt="show" width="20" height="20"></Image>
                        )}
                    </div>
                )}
            </div>
            <div className="editor-column">
                {config.buttons.includes('color') && (
                    <div className={'editor-button'} title='Цвет текста'>
                        <label>
                            <Image src="/images/editor_color.png" alt="color" width="20" height="20"></Image>
                            <input type="color" className='input-color' onChange={handleChangeColor} value={config.data.color} />
                        </label>
                    </div>
                )}
                {config.buttons.includes('align') && (
                    <>
                        <div className={'editor-button' + (config.data.align == 'left' ? ' active' : '')} onClick={() => handleClickAlign('left')} title='Вывровнять текст по левому краю'>
                            <Image src="/images/editor_align_left.png" alt="align left" width="20" height="20"></Image>
                        </div>
                        <div className={'editor-button' + (config.data.align == 'center' ? ' active' : '')} onClick={() => handleClickAlign('center')} title='Вывровнять текст по центру'>
                            <Image src="/images/editor_align_center.png" alt="align center" width="20" height="20"></Image>
                        </div>
                        <div className={'editor-button' + (config.data.align == 'right' ? ' active' : '')} onClick={() => handleClickAlign('right')} title='Вывровнять текст по правому краю'>
                            <Image src="/images/editor_align_right.png" alt="align right" width="20" height="20"></Image>
                        </div>
                    </>
                )}
                {config.buttons.includes('list') && (
                    <>
                        <div className={'editor-button' + (config.data.list == 'ordered' ? ' active' : '')} onClick={() => handleClickList('ordered')} title='Нумерованный список'>
                            <Image src="/images/editor_list_ordered.png" alt="list ordered" width="20" height="20"></Image>
                        </div>
                        <div className={'editor-button' + (config.data.list == 'unordered' ? ' active' : '')} onClick={() => handleClickList('unordered')} title='Нумерованный список'>
                            <Image src="/images/editor_list_unordered.png" alt="list unordered" width="20" height="20"></Image>
                        </div>
                    </>
                )}
                {config.buttons.includes('border') && (
                    <div className={'editor-button'} onClick={handleClickBorder} title={config.data.border ? 'Убрать рамку' : 'Добавить рамку'}>
                        { config.data.border ? (
                            <Image src="/images/editor_border.png" alt="color" width="20" height="20"></Image>
                        ) : (
                            <Image src="/images/editor_border_no.png" alt="color" width="20" height="20"></Image>
                        )}
                    </div>
                )}
                {config.buttons.includes('background') && (
                    <>
                        <div className={'editor-button'} title='Загрузить фон'>
                            <label>
                                <Image src="/images/editor_background.png" alt="color" width="20" height="20"></Image>
                                <input key={config.data.background} type="file" className='input-background' accept='image/png, image/jpeg' onChange={handleChangeBackground} />
                            </label>
                        </div>
                        { (config.data.background && config.data.background.length > 0) && (
                            <div className={'editor-button'} onClick={handleClickBackgroundDelete} title='Удалить фон'>
                                <Image src="/images/editor_delete.png" alt="color" width="20" height="20"></Image>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}