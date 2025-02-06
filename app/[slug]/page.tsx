'use client';

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { LandingType } from "@/app/lib/type/landing";
import QuizTemplateView from "@/app/ui/template/view/quiz";
import { LandingContext } from "../lib/context/landing";
import { ImageTemplateType, QuizTemplateType, SocialTemplateType, TextImageTemplateType } from "../lib/type/template";
import SocialTemplateView from "../ui/template/view/social";
import ImageTemplateView from "../ui/template/view/image";
import TextImageTemplateView from "../ui/template/view/text_image";

export default function Page() {
    const pathname = usePathname();
    const slug = pathname.substring(1);

    const [landing, setLanding] = useState<LandingType | null>(null);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        async function loadLanding() {
            const result = await axios(
                process.env.BACKEND_DOMAIN + '/api/landings/page/' + slug,
            );
            const response = result.data;
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
        loadLanding();
    }, [slug]);

    return (
        <div className="container">
            { landing && (
                <LandingContext.Provider value={landing}>
                    <>
                        { landing.template == 'quiz' && (
                            <QuizTemplateView data={landing.data as QuizTemplateType} />
                        )}
                        { landing.template == 'social' && (
                            <SocialTemplateView data={landing.data as SocialTemplateType} />
                        )}
                        { landing.template == 'image' && (
                            <ImageTemplateView data={landing.data as ImageTemplateType} />
                        )}
                        { landing.template == 'text_image' && (
                            <TextImageTemplateView data={landing.data as TextImageTemplateType} />
                        )}
                    </>
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