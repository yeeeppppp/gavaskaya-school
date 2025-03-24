import './Docs.css'
import { Link } from 'react-router-dom';

function Docs(){
    return (
        <>
            <div className="docs" id='docs'>
                <h1>документы:</h1>
                <div className="docs-links">
                    <div className="link-one">
                        <a target='_blank' href="https://docviewer.yandex.ru/?url=ya-disk-public%3A%2F%2Fe96PCbs%2F0wWCNOEBWwRHAuvIICmRcqjQTS7gOhVLtOwpNCL2aYtTji3PQGTGeU%2Fcq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F%D0%A0%D0%B5%D0%B5%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%B0%D1%8F_%D0%B2%D1%8B%D0%BF%D0%B8%D1%81%D0%BA%D0%B0%2C_%D0%BB%D0%B8%D1%86%D0%B5%D0%BD%D0%B7%D0%B8%D1%8F_%D0%BE%D1%82_12_03_2025.pdf&name=%D0%A0%D0%B5%D0%B5%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%B0%D1%8F_%D0%B2%D1%8B%D0%BF%D0%B8%D1%81%D0%BA%D0%B0%2C_%D0%BB%D0%B8%D1%86%D0%B5%D0%BD%D0%B7%D0%B8%D1%8F_%D0%BE%D1%82_12_03_2025.pdf">Лицензия на обучение</a>
                    </div>
                    <div className="link-two">
                    <Link to="/error" className="disabled-link">Коммерческое предложение</Link>
                    </div>
                    <div className="link-three">
                    <Link to="/error" className="disabled-link">Заключение</Link>
                    </div>
                </div>
                <a className='link-all' href="#footer">Все документы</a>
            </div>
        </>
    )
}

export default Docs;