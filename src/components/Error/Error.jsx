import "./Error.css"
import { Link } from 'react-router-dom'; // Импортируем Link

function Error(){
    return (
        <>
            <div className="error">
                <h1>Ведутся технические работы. Временно недоступно.</h1>
                <p>Приносим свои извинения.</p>

                <Link to="/" className="back">Вернуться назад</Link>
            </div>
        </>
    )
}

export default Error