'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Search({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { push } = useRouter();

    const [term, setTerm] = useState('');

    function handleChange(e: React.ChangeEvent) {
        setTerm((e.target as HTMLInputElement).value);
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        push(`${pathname}?${params.toString()}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <input onChange={handleChange} type="search" className="form-control" placeholder={placeholder} aria-label={placeholder} aria-describedby="search" defaultValue={searchParams.get('query')?.toString()} />
                <button className="btn btn-outline-secondary" type="submit" id="search">🔍</button>
            </div>
        </form>
    );
}
