import './Navigation.css'
import logo from "../../assets/img/logo.png"

function Navigation(){
    return(
        <>
        <div className="nav-bar">
            <div className="logo-sa">
                <img src={logo} alt="logo" />
            </div>
            <div className="nav-el">
                <a href="#format">Стоимость</a>
                <a href="#learning">Обучение</a>
                {/* <a href="#">Акции</a> */}
                <a href="#footer">Контакты</a>
            </div>
        </div>
        </>
    )
}

export default Navigation;