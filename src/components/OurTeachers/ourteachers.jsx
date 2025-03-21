import "./ourteachers.css";
import Dima from "../../assets/img/dima.png"
import Teachers from "../../assets/img/teachers.png"
import NissanTerano from "../../assets/img/nissan-terano.png"

function ourteachers() {
    return(
        <>

        <div className="header-our-teach">
            <p>НАШИ ИНСТРУКТОРА</p>
            <img src={Teachers} alt="teachers" />
        </div>

        <div className="teachers-list">
            <div className="teachers-item">
                <img src={Dima} alt="" />
                <span>Дмитрий<br />Масленников<br />Андреевич</span>
                <span className="teach-on">Обучает на:</span>
                <div className="car-teach">
                    <p>Nissan Terano</p>
                </div>
                <div className="car-teach-img">
                    <img src={NissanTerano} alt="" />
                </div>
                <p className="car-descrypt">· МКПП <br />· 2020 год выпуска <br />· Передний привод</p>
            </div>
            <div className="teachers-item">
                <img src={Dima} alt="" />
                <span>Дмитрий<br />Масленников<br />Андреевич</span>
                <span className="teach-on">Обучает на:</span>
                <div className="car-teach">
                    <p>Nissan Terano</p>
                </div>
                <div className="car-teach-img">
                    <img src={NissanTerano} alt="" />
                </div>
                <p className="car-descrypt">· МКПП <br />· 2020 год выпуска <br />· Передний привод</p>
            </div>
            <div className="teachers-item">
                <img src={Dima} alt="" />
                <span>Дмитрий<br />Масленников<br />Андреевич</span>
                <span className="teach-on">Обучает на:</span>
                <div className="car-teach">
                    <p>Nissan Terano</p>
                </div>
                <div className="car-teach-img">
                    <img src={NissanTerano} alt="" />
                </div>
                <p className="car-descrypt">· МКПП <br />· 2020 год выпуска <br />· Передний привод</p>
            </div>
            <div className="teachers-item">
                <img src={Dima} alt="" />
                <span>Дмитрий<br />Масленников<br />Андреевич</span>
                <span className="teach-on">Обучает на:</span>
                <div className="car-teach">
                    <p>Nissan Terano</p>
                </div>
                <div className="car-teach-img">
                    <img src={NissanTerano} alt="" />
                </div>
                <p className="car-descrypt">· МКПП <br />· 2020 год выпуска <br />· Передний привод</p>
            </div>
            <div className="teachers-item">
                <img src={Dima} alt="" />
                <span>Дмитрий<br />Масленников<br />Андреевич</span>
                <span className="teach-on">Обучает на:</span>
                <div className="car-teach">
                    <p>Nissan Terano</p>
                </div>
                <div className="car-teach-img">
                    <img src={NissanTerano} alt="" />
                </div>
                <p className="car-descrypt">· МКПП <br />· 2020 год выпуска <br />· Передний привод</p>
            </div>
            <div className="teachers-item">
                <img src={Dima} alt="" />
                <span>Дмитрий<br />Масленников<br />Андреевич</span>
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
        </>
    )
}

export default ourteachers;