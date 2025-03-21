import './Footer.css'
import LogoVK from '../../assets/img/logoVK.svg'
import LogoTG from '../../assets/img/logoTG.svg'
import LogoImg from '../../assets/img/footer-logo.svg'

function Footer(){
    return (
        <>
            <footer>
                <div className="logo">
                    <img src={LogoImg} alt="Логотип" />
                </div>
                <div className="number">
                    <a href="+79999999999">+7 (999) 999 99-99</a>
                </div>
                <div className="social-nw">
                    <a href="">
                        <img src={LogoVK} alt="" />
                    </a>
                    <a href="">
                        <img src={LogoTG} alt="" />
                    </a>
                </div>
            </footer>
            <div className="links-to-docs">
                <div className="group-links">
                    <a href="">Основные сведения</a>
                    <a href="">Структура и органы управления образовательной организацией</a>
                    <a href="">Документ об утверждении стоимости обучения</a>
                    <a href="">Образец договора об оказании платных образовательных услуг</a>
                </div>
                <div className="group-links">
                    <a href="">Образование</a>
                    <a href="">Руководство и педагогический состав</a>
                    <a href="">Материально-техническое обучение и оснащенность образовательного процессая</a>
                    <a href="">Правила приема обучающихся</a>
                </div>
                <div className="group-links">
                    <a href="">Платные образовательные услуги</a>
                    <a href="">Финансово-хозяйственная деятельность</a>
                    <a href="">Вакантные места для приема (перевода) обучающихся</a>
                    <a href="">Положение о режиме занятий обучающихся</a>
                </div>
                <div className="group-links">
                    <a href="">Доступная среда</a>
                    <a href="">Международное сотрудничество</a>
                    <a href="">Акт самообследования</a>
                    <a href="">Документы</a>
                </div>
            </div>
            <div className="copyright">
                <p>© 2024-2025 Система автошкол "Гаванская". <br /> Все права защищены.</p>
            </div>
        </>
    )
}

export default Footer;