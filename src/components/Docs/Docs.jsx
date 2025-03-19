import './Docs.css'

function Docs(){
    return (
        <>
            <div className="docs">
                <h1>документы:</h1>
                <div className="docs-links">
                    <div className="link-one">
                        <a href="">Лицензия на обучение</a>
                    </div>
                    <div className="link-two">
                        <a href="">Коммерческое предложение</a>
                    </div>
                    <div className="link-three">
                        <a href="">Заключение</a>
                    </div>
                </div>
                <a className='link-all' href="">Все документы</a>
            </div>
        </>
    )
}

export default Docs;