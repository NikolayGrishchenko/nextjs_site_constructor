import { getLandingList } from "@/app/lib/data";

export default async function LandingList() {
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
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}