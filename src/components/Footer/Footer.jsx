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
            <div className="copyright">
                <p>© 2024-2025 Система автошкол "Гаванская". <br /> Все права защищены.</p>
            </div>
        </>
    )
}

export default Footer;