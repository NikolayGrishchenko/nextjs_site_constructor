import { getLandingList } from "@/app/lib/data";
import Image from "next/image";

export default async function LandingList() {
    const landings = await getLandingList();

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Лендинги</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <form>
                        <input type="search" />
                        <button type="submit">🔍</button>
                    </form>
                </div>
                <div className="col-4">
                    <button type="button" className="btn btn-primary">Создать</button>
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
                            {landings.map(item => 
                                <tr>
                                    <td>{ item.name }</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>

                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}