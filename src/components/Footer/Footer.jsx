import { Link } from 'react-router-dom'; // Импортируем Link
import './Footer.css';
import LogoVK from '../../assets/img/logoVK.svg';
import LogoTG from '../../assets/img/logoTG.svg';
import LogoImg from '../../assets/img/footer-logo.svg';

function Footer() {
  return (
    <>
      <footer id='footer'>
            <div className="logo">
                <img src={LogoImg} alt="Логотип" />
            </div>
            <div className="number">
                    <a href="tel:+79219653233">+7 921 965‑32‑33</a>
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
          
          {/* Пустые ссылки заменяем на Link */}
          <Link to="/error" className="disabled-link">
            Структура и органы управления образовательной организацией
          </Link>
          <Link to="/error" className="disabled-link">
            Документ об утверждении стоимости обучения
          </Link>
          <Link to="/error" className="disabled-link">
            Образец договора об оказании платных образовательных услуг
          </Link>
        </div>
        <div className="group-links">
          <Link to="/error" className="disabled-link">Образование</Link>
          <Link to="/error" className="disabled-link">Руководство и педагогический состав</Link>
          <Link to="/error" className="disabled-link">Материально-техническое обучение и оснащенность образовательного процесса</Link>
          <Link to="/error" className="disabled-link">Правила приема обучающихся</Link>
          <a target='_blank' href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fe96PCbs%2F0wWCNOEBWwRHAuvIICmRcqjQTS7gOhVLtOwpNCL2aYtTji3PQGTGeU%2Fcq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F%D0%A3%D1%81%D1%82%D0%B0%D0%B2.pdf&name=%D0%A3%D1%81%D1%82%D0%B0%D0%B2.pdf&nosw=1">Устав</a>
        </div>
        <div className="group-links">
          <Link to="/error" className="disabled-link">Платные образовательные услуги</Link>
          <Link to="/error" className="disabled-link">Финансово-хозяйственная деятельность</Link>
          <Link to="/error" className="disabled-link">Вакантные места для приема (перевода) обучающихся</Link>
          <Link to="/error" className="disabled-link">Положение о режиме занятий обучающихся</Link>
        </div>
        <div className="group-links">
          <Link to="/error" className="disabled-link">Доступная среда</Link>
          <Link to="/error" className="disabled-link">Международное сотрудничество</Link>
          <Link to="/error" className="disabled-link">Акт самообследования</Link>
          <a target='_blank' href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fe96PCbs%2F0wWCNOEBWwRHAuvIICmRcqjQTS7gOhVLtOwpNCL2aYtTji3PQGTGeU%2Fcq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F%D0%A0%D0%B5%D0%BA%D0%B2%D0%B8%D0%B7%D0%B8%D1%82%D1%8B.pdf&name=%D0%A0%D0%B5%D0%BA%D0%B2%D0%B8%D0%B7%D0%B8%D1%82%D1%8B.pdf&nosw=1">Реквизиты</a>
          <a href="#docs">Документы</a>
        </div>
      </div>
      <div className="copyright">
        <p>© 2024-2025 Система автошкол "Гаванская". <br /> Все права защищены.</p>
      </div>
    </>
  );
}

export default Footer;