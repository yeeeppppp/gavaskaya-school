import './Footer.css'
import LogoVK from '../../assets/img/logoVK.svg'
import LogoTG from '../../assets/img/logoTG.svg'
import LogoImg from '../../assets/img/footer-logo.svg'

function Footer(){
    return (
        <>
            <footer id='footer'>
                <div className="logo">
                    <img src={LogoImg} alt="Логотип" />
                </div>
                <div className="number">
                    <a href="tel:+79219653233">+7 921 965‑32‑33</a>
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
                    <a target='_blank' href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fe96PCbs%2F0wWCNOEBWwRHAuvIICmRcqjQTS7gOhVLtOwpNCL2aYtTji3PQGTGeU%2Fcq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5%20%D0%A1%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F.pdf&name=%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5%20%D0%A1%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F.pdf&nosw=1">Основные сведения</a>
                    <a target='_blank' href="">Структура и органы управления образовательной организацией</a>
                    <a target='_blank' href="">Документ об утверждении стоимости обучения</a>
                    <a target='_blank' href="">Образец договора об оказании платных образовательных услуг</a>
                </div>
                <div className="group-links">
                    <a target='_blank' href="">Образование</a>
                    <a target='_blank' href="">Руководство и педагогический состав</a>
                    <a target='_blank' href="">Материально-техническое обучение и оснащенность образовательного процессая</a>
                    <a target='_blank' href="">Правила приема обучающихся</a>
                    <a target='_blank' href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fe96PCbs%2F0wWCNOEBWwRHAuvIICmRcqjQTS7gOhVLtOwpNCL2aYtTji3PQGTGeU%2Fcq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F%D0%A3%D1%81%D1%82%D0%B0%D0%B2.pdf&name=%D0%A3%D1%81%D1%82%D0%B0%D0%B2.pdf&nosw=1">Устав</a>
                </div>
                <div className="group-links">
                    <a target='_blank' href="">Платные образовательные услуги</a>
                    <a target='_blank' href="">Финансово-хозяйственная деятельность</a>
                    <a target='_blank' href="">Вакантные места для приема (перевода) обучающихся</a>
                    <a target='_blank' href="">Положение о режиме занятий обучающихся</a>
                    
                </div>
                <div className="group-links">
                    <a target='_blank' href="">Доступная среда</a>
                    <a target='_blank' href="">Международное сотрудничество</a>
                    <a target='_blank' href="">Акт самообследования</a>
                    <a target='_blank' href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fe96PCbs%2F0wWCNOEBWwRHAuvIICmRcqjQTS7gOhVLtOwpNCL2aYtTji3PQGTGeU%2Fcq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F%D0%A0%D0%B5%D0%BA%D0%B2%D0%B8%D0%B7%D0%B8%D1%82%D1%8B.pdf&name=%D0%A0%D0%B5%D0%BA%D0%B2%D0%B8%D0%B7%D0%B8%D1%82%D1%8B.pdf&nosw=1">Реквизиты</a>
                    <a href="#docs">Документы</a>
                    
                </div>
            </div>
            <div className="copyright">
                <p>© 2024-2025 Система автошкол "Гаванская". <br /> Все права защищены.</p>
            </div>
        </>
    )
}

// negrashl@mail.ru

export default Footer;