import "./aboutus.css";
import AboutFil from "../../assets/img/aboutfil.png";
import Filial1 from "../../assets/img/filial-1.png";
import Filial2 from "../../assets/img/filial-2.png";
import FilialPic1 from '../../assets/img/our-filial1.png'
import FilialPic2 from '../../assets/img/our-filial2.png'
import FilialPic3 from '../../assets/img/our-filial3.png'
import FilialPic4 from '../../assets/img/our-filial4.png'
import Avtodrom1 from '../../assets/img/avtodrom-1.png'
import Avtodrom2 from '../../assets/img/avtodrom-2.png'
import Avtodrom3 from '../../assets/img/avtodrom-3.png'
import Avtodrom4 from '../../assets/img/avtodrom-4.png'

function aboutus() {
  return (
    <>
      <div className="filliall">
      <div className="section-wrapper">
      <div className="about-header">
        <h2>О НАШЕМ ФИЛЛИАЛЕ</h2>
        <img src={AboutFil} alt="" />
      </div>
      <div className="filial-container"> {/* Новый контейнер для секций */}
        <div className="left-section">
          <div className="first-filial">
            <img src={Filial1} alt="Филиал 1" />
            <div className="filial-address">
              <p>Наш адресс на ул.Гаванская д.3</p>
            </div>
            <div className="sup-first-text">
              <p>
                ОПИСАНИЕ ОФИСА<br />
                <br />
                Офис автошколы, расположенный по адресу <br />
                ул. Гаванская, д. 3, — это современное и <br />
                комфортное пространство, созданное для <br />
                эффективного обучения будущих водителей <br />
                <br />
                В офисе оборудованы два просторных <br />
                класса, оснащенных всем необходимым для <br />
                теоретических занятий: удобными учебными <br />
                местами, проекторами, наглядными <br />
                материалами и макетами для изучения <br />
                устройства автомобиля. Уютная атмосфера и <br />
                профессиональное оборудование <br />
                способствуют легкому усвоению материала.
              </p>
            </div>
          </div>

          <div className="sup-empty-blocks">
            <div className="empty-block">
              <img src={FilialPic1}/>
            </div>
            <div className="empty-block">
              <img src={FilialPic2}/>
            </div>
            <div className="empty-block">
              <img src={FilialPic3}/>
            </div>
            <div className="empty-block">
              <img src={FilialPic4}/>
            </div>
          </div>
        </div>
        
        <div className="right-section">
          <div className="second-filial">
            <img src={Filial2} alt="Филиал 2" />
            <div className="filial-address">
              <p>Наш автодром на ул. Ряпищева 50</p>
            </div>
            <div className="sup-second-text">
              <p>
                ОПИСАНИЕ АВТОДРОМА<br />
                <br />
                Автодром автошколы — это современная,<br />
                безопасная и оборудованная площадка для<br />
                будущих водителей. Он включает в <br />
                себя все необходимые элементы для<br />
                отработки базовых навыков вождения:<br />
                эстакаду, змейку, параллельную парковку,<br />
                разворот в ограниченном пространстве,<br />
                въезд в бокс и другие упражнения<br />
                предусмотренные программой обучения.<br />
                <br />
                Площадка оснащена разметкой, дорожными<br />
                знаками и светофорами, что позволяет<br />
                максимально приблизить условия<br />
                тренировки к реальным дорожным<br />
                ситуациям. Автодром имеет ровное<br />
                асфальтовое покрытие, освещение для<br />
                занятий в вечернее время и зоны для<br />
                инструкторов и наблюдателей
              </p>
            </div>
          </div>

          <div className="sup-second-empty-blocks">
            <div className="empty-block-2">
              <img src={Avtodrom1}/>
            </div>
            <div className="empty-block-2">
              <img src={Avtodrom2}/>
            </div>
            <div className="empty-block-2">
              <img src={Avtodrom3}/>
            </div>
            <div className="empty-block-2">
              <img src={Avtodrom4}/>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default aboutus;