import "./ourteachers.css";
import Dima from "../../assets/img/dima.png"
import Vlad from '../../assets/img/vlad.png'
import Matvey from '../../assets/img/matvey.png'
import Ivan from '../../assets/img/ivan.png'
import Egor from '../../assets/img/egor.png'
import Anton from '../../assets/img/anton.png' 
import Teachers from "../../assets/img/teachers.png"
import NissanTerano from "../../assets/img/nissan-terano.png"
import NissanAlmera from '../../assets/img/NissalAlmera.png'
import ShkodaKodiaq from '../../assets/img/ShkodaKodiaq.png'
import KiaRio from '../../assets/img/KiaRio.png'
import Polo from '../../assets/img/VWPolo.png'
import Granta from '../../assets/img/LadaGranta.png'


function ourteachers() {
    return(
        <>

        <div className="header-our-teach">
            <p>НАШИ ИНСТРУКТОРА</p>
            <img src={Teachers} alt="teachers" />
        </div>

        <div className="teachers-list">
            <div className="teachers-item">
                <img src={Anton} alt="" />
                <span>Антон<br />Антонович<br />Антонов</span>
                <div className="anon-teach">
                    <span className="teach-on">Обучает на:</span>
                    <div className="car-teach">
                        <p>Nissan Terano</p>
                    </div>
                    <div className="car-teach-img">
                        <img src={NissanTerano} alt="" />
                    </div>
                    <p className="car-descrypt">· МКПП <br />· 2020 год выпуска <br />· Передний привод</p>
                </div>
            </div>
            <div className="teachers-item">
                <img src={Egor} alt="" />
                <span>Егор<br />Егорович<br />Егоров</span>
                <span className="teach-on">Обучает на:</span>
                <div className="car-teach">
                    <p>Nissan Almera</p>
                </div>
                <div className="car-teach-img">
                    <img src={NissanAlmera} alt="" />
                </div>
                <p className="car-descrypt">· АКПП <br />· 2021 год выпуска <br />· Передний привод</p>
            </div>
            <div className="teachers-item">
                <img src={Matvey} alt="" />
                <span>Матвей<br />Матвеевич<br />Матвеев</span>
                <span className="teach-on">Обучает на:</span>
                <div className="car-teach">
                    <p>Shkoda Kodiaq</p>
                </div>
                <div className="car-teach-img">
                    <img src={ShkodaKodiaq} alt="" />
                </div>
                <p className="car-descrypt">· АКПП <br />· 2022 год выпуска <br />· Полный привод</p>
            </div>
            <div className="teachers-item">
                <img src={Ivan} alt="" />
                <span>Иван<br />Иванович<br />Иванов</span>
                <span className="teach-on">Обучает на:</span>
                <div className="car-teach">
                    <p>Kia Rio</p>
                </div>
                <div className="car-teach-img">
                    <img src={KiaRio} alt="" />
                </div>
                <p className="car-descrypt">· МКПП <br />· 2019 год выпуска <br />· Передний привод</p>
            </div>
            <div className="teachers-item">
                <img src={Vlad} alt="" />
                <span>Владимир<br />Владимирович<br />Владимов</span>
                <span className="teach-on">Обучает на:</span>
                <div className="car-teach">
                    <p>VW Polo</p>
                </div>
                <div className="car-teach-img">
                    <img src={Polo} alt="" />
                </div>
                <p className="car-descrypt">· МКПП <br />· 2021 год выпуска <br />· Передний привод</p>
            </div>
            <div className="teachers-item">
                <img src={Dima} alt="" />
                <span>Дмитрий<br />Масленников<br />Андреевич</span>
                <span className="teach-on">Обучает на:</span>
                <div className="car-teach">
                    <p>Lada Granta</p>
                </div>
                <div className="car-teach-img">
                    <img src={Granta} alt="" />
                </div>
                <p className="car-descrypt">· МКПП <br />· 2018 год выпуска <br />· Передний привод</p>
            </div>
        </div>
        </>
    )
}

export default ourteachers;