import Edit from "./edit";

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;

    return (
        <Edit id={+id}></Edit>
    );
}