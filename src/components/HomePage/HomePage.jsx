import './HomePage.css'
import logoBig from "../../assets/img/logo-big.svg"
import logoFormat from "../../assets/img/forma.svg"
import logoOffline from "../../assets/img/offline.svg"
import logoPrice from "../../assets/img/price.svg"
import logoGrafic from "../../assets/img/grafic.svg"
import Navigation from '../Navigation/Navigation';
import Metro from '../../assets/img/metro.svg'
import FormatLearning from '../FormatLearning/FormatLearning'

function HomePage(){
    return (
        <>
            <Navigation/>
            <div className="main-page">
                <div className="logo-main">
                    <img src={logoBig} alt="Большой логотип" />
                </div>
                <div className="plits">
                <div className="categ">
                <div className="block">
                    <img src={logoFormat} alt="" />
                    <h1>online</h1>
                    <h2>формат обучения</h2>
                </div>
                <div className="block">
                    <img src={logoOffline} alt="" />
                    <h1>offline</h1>
                    <h2>формат обучения</h2>
                </div>
                <div className="block">
                    <img src={logoPrice} alt="" />
                    <h1>фиксированная</h1>
                    <h2>цена обучения</h2>
                </div>
                <div className="block">
                    <img src={logoGrafic} alt="" />
                    <h1>удобный</h1>
                    <h2>график</h2>
                </div>
                </div>
                <div className="form block">
                    <form className="form-zapis">
                        <div className="form-group">
                        <p>Ваше имя</p>
                        <input
                            type="text"
                            className="form-input"
                            placeholder="Иван"
                        />
                        </div>

                        <div className="form-group">
                        <p>Ваш телефон</p>
                        <input
                            type="tel"
                            className="form-input"
                            placeholder="+7 (999) 999 99-99"
                        />
                        </div>

                        <div className="form-group">
                        <p>Категория</p>
                        <select className="category-select">
                            <option>Категория B (онлайн)</option>
                            <option>Категория B (оффлайн)</option>
                        </select>
                        </div>

                        <div className="separator"></div>

                        <button type="button" className="submit-btn">
                        Записаться на обучение
                        </button>

                        <p className="agreement-text">
                        Нажимая на кнопку "Записаться на обучение" я соглашаюсь с 
                        Пользовательским соглашением и с обработкой персональных данных
                        </p>
                    </form>
                </div>
                </div>
                <div className="info-mesto">
                    <div className="metro">
                        <img src={Metro} alt="" />
                        <p>Метро “Горный институт”</p>
                    </div>
                    <div className="adres">
                        <p>Адрес: Санкт-Петербург, В.О. , ул . Гаванская , д. 3</p>
                    </div>
                </div>
            </div>
            <FormatLearning/>
        </>
    )
}

export default HomePage;