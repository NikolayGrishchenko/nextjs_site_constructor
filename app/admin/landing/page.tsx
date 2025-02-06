import Landings from "./landings";

export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
}) {
    return (
        <Landings searchParams={await props.searchParams}></Landings>
    );
}