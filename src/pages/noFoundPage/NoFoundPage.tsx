import { Link } from "react-router-dom";

function NoFoundPage(){
    return(
        <section className="text-center pt-14">
            <h1>К сожалению по вашему запросу ничего не найдено</h1>
            <Link to={'/'} className="cursor-pointer underline">Вернуться на главную страницу</Link>
        </section>
    )
}
export default NoFoundPage