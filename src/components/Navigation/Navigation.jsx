import './Navigation.css';
import logo from '../../assets/img/logo.png';

function Navigation() {
  // Функция для плавной прокрутки к секции
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <div className="nav-bar">
        <div className="logo-sa">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-el">
          <a
            href="#format"
            onClick={(e) => {
              e.preventDefault(); // Отменяем стандартное поведение ссылки
              scrollToSection('format'); // Плавная прокрутка к секции
            }}
          >
            Стоимость
          </a>
          <a
            href="#learning"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('learning');
            }}
          >
            Обучение
          </a>
          <a
            href="#footer"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('footer');
            }}
          >
            Контакты
          </a>
        </div>
      </div>
    </>
  );
}

export default Navigation;