'use client';

import { LandingListType, LandingType } from '@/app/lib/type/landing';
import { booleanToString, dateFormat, getLandingTemplateName } from '@/app/lib/util';
import ModalCreate from '@/app/ui/modal_create';
import Pagination from '@/app/ui/pagination';
import Search from '@/app/ui/search';
import axios from 'axios'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'

export default function Landings(props: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const searchParams = props.searchParams;
    const query = searchParams?.query || '';
    const page = Number(searchParams?.page) || 1;

    const { push } = useRouter();

    const [data, setData] = useState<LandingListType>(null);

    async function loadList() {
        const params = new URLSearchParams();
        params.set('page', page.toString());
        params.set('query', query);

        const result = await axios(
            process.env.BACKEND_DOMAIN + '/api/landings?' + params.toString(),
        );
        setData(result.data);
    }

    useEffect(() => {
        async function loadList() {
            const params = new URLSearchParams();
            params.set('page', page.toString());
            params.set('query', query);

            const result = await axios(
                process.env.BACKEND_DOMAIN + '/api/landings?' + params.toString(),
            );
            setData(result.data);
        }
        loadList();
    }, [page, query]);

    async function handleClickDelete(id: number) {
        if (confirm('Вы уверены, что хотите удалить этот лэндинг?')) {
            await axios.delete(process.env.BACKEND_DOMAIN + '/api/landings/' + id);
            await loadList();
        }
    }

    async function handleClickEdit(id: number) {
        push(`/admin/landing/${id}`);
    }

    async function handleClickCopy(landing: LandingType) {
        const result = await axios.post(
            process.env.BACKEND_DOMAIN + '/api/landings', {
                name: landing.name + ' (копия)',
                template: landing.template,
                is_published: false,
                site: '',
                url: '',
                data: landing.data,
            }
        );
        const id = result.data.id;
        push(`/admin/landing/${id}`);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Лендинги</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <Search placeholder="Поиск"></Search>
                </div>
                <div className="col-4 d-flex justify-content-end">
                    <ModalCreate/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Наименование</th>
                                <th>Дата сохраненеия</th>
                                <th>Шаблон</th>
                                <th>Опубликовано</th>
                                <th>Ссылка</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.items.map(landing => 
                                <tr key={ landing.id } className="table-row-hover">
                                    <td>{ landing.name }</td>
                                    <td>{ dateFormat(landing.date_edit) }</td>
                                    <td>{ getLandingTemplateName(landing.template) }</td>
                                    <td>{ booleanToString(landing.is_published) }</td>
                                    <td>
                                        { landing.url && (
                                            <Link href={'/' + landing.url}>{ landing.url }</Link>
                                        )}
                                    </td>
                                    <td>
                                        <button type="button" className="btn" onClick={() => { handleClickEdit(landing.id); }}>
                                            <Image src="/images/edit.png" alt="edit" width="20" height="20"></Image>
                                        </button>
                                        <button type="button" className="btn">
                                            <Image src="/images/copy.png" alt="copy" width="20" height="20" onClick={() => { handleClickCopy(landing); }}></Image>
                                        </button>
                                        <button type="button" className="btn" onClick={() => { handleClickDelete(landing.id); }}>
                                            <Image src="/images/delete.png" alt="delete" width="20" height="20"></Image>
                                        </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="col-12">
                    <Pagination totalPages={data?.meta.totalPages ?? 0}></Pagination>
                </div>
            </div>
        </div>
    );
}