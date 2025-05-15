import { Link } from "react-router-dom";

function NoFoundPage(){
    return(
        <section className="text-center pt-14">
            <h1 className="Title_Medium mb-3">Окак. <br /> По этому адресу ничего не найдено, видимо страница еще не готова</h1>
            <Link to={'/'} className="cursor-pointer underline">Вернуться на главную страницу</Link>
        </section>
    )
}
export default NoFoundPage