'use client';

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { LandingType } from "@/app/lib/type/landing";
import QuizTemplateView from "@/app/ui/template/view/quiz";
import { LandingContext } from "../lib/context/landing";

export default function Page() {
    const pathname = usePathname();
    const slug = pathname.substring(1);

    const [landing, setLanding] = useState<LandingType | null>(null);
    const [isError, setIsError] = useState(false);
    async function loadLanding() {
        const result = await axios(
            'http://localhost:2999/api/landings/page/' + slug,
        );
        let response = result.data;
        if (response) {
            setLanding({
                id: response.id,
                name: response.name,
                date_create: response.date_create,
                date_edit: response.date_edit,
                template: response.template,
                is_published: response.is_published,
                site: response.site,
                url: response.url,
                data: JSON.parse(response.data),
            });
        } else {
            setIsError(true);
        }
    }
    useEffect(() => {
        loadLanding();
    }, [slug]);

    return (
        <div className="container">
            { landing && (
                <LandingContext.Provider value={landing}>
                    <QuizTemplateView data={landing.data}></QuizTemplateView>
                </LandingContext.Provider>
            )}
            { isError && (
                <div className="row mt-2 mb-2">
                    <div className="col-12">
                        <div className="alert alert-danger" role="alert">Страница не найдена</div>
                    </div>
                </div>
            ) }
        </div>
    );
}