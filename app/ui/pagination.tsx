'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({ totalPages }: { totalPages: number }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    const generatePagination = (totalPages: number) => {
        let result = [];
        for (let index = 1; index <= totalPages; index++) {
            result.push(index);
        }
        return result;
    }

    let pageAll = generatePagination(totalPages);

    return (
        <>
            <nav aria-label="Page navigation">
                <ul className="pagination">
                    { currentPage > 1 && 
                        <li className="page-item">
                            <Link className="page-link" href={createPageURL(currentPage - 1)}>&lt;</Link>
                        </li>
                    }
                    { pageAll.map(page => {
                        let isActive = page == currentPage;
                        return (
                            <li key={page} className={'page-item' + (isActive && ' active')}>
                                { isActive ? (
                                    <span className='page-link'>{ page }</span>
                                ) : (
                                    <Link className="page-link" href={createPageURL(page)}>{ page }</Link>
                                )}
                            </li>
                        );
                    })}
                    { currentPage < totalPages && 
                        <li className="page-item">
                            <Link className="page-link" href={createPageURL(currentPage + 1)}>&gt;</Link>
                        </li>
                    }
                </ul>
            </nav>
        </>
    );
}
