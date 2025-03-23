import LogoTG from '../../assets/img/logoTG.svg';
import LogoVK from '../../assets/img/logoVK.svg';
import './Zapis.css'
import { useState } from 'react';

function Zapis(){
    const [formData, setFormData] = useState({
            name: '',
            phone: '',
            category: 'Категория B (онлайн)'
          });
        
          const handleSubmit = async (e) => {
            e.preventDefault();
            
            try {
              const response = await fetch('http://localhost:3001/submit-application', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
              });
              
              if (response.ok) {
                alert('Заявка успешно отправлена!');
                setFormData({
                  name: '',
                  phone: '',
                  category: 'Категория B (онлайн)'
                });
              } else {
                alert('Ошибка при отправке заявки');
              }
            } catch (error) {
              console.error('Ошибка:', error);
              alert('Ошибка соединения с сервером');
            }
          };
    return(
        <>
        <div className="form block" id='naves'>
            <h1 id='ee'>Оставьте заявку</h1>
            <p id='ss'>и мы свяжемся с вами!</p>
            <form className="form-zapis" onSubmit={handleSubmit}>
              <div className="form-group zapis">
                <p  id='txt-zps'>Ваше имя</p>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Иван"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group zapis">
                <p id='txt-zps'>Ваш телефон</p>
                <input
                  type="tel"
                  className="form-input"
                  placeholder="+7 (999) 999 99-99"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="form-group zapis">
                <p id='txt-zps'>Категория</p>
                <select 
                  className="category-select"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  <option>Категория B (онлайн)</option>
                  <option>Категория B (оффлайн)</option>
                </select>
              </div>

              <div className="separator"></div>

              <button type="submit" id='zps-btn' className="submit-btn">
                Записаться на обучение
              </button>

              <p className="agreement-text" id='agr-txt'>
                Нажимая на кнопку "Записаться на обучение" <br /> я соглашаюсь с <br />
                <a target='_blank' href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fe96PCbs%2F0wWCNOEBWwRHAuvIICmRcqjQTS7gOhVLtOwpNCL2aYtTji3PQGTGeU%2Fcq%2FJ6bpmRyOJonT3VoXnDag%3D%3D%3A%2F%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0_%D0%B2_%D0%BE%D1%82%D0%BD%D0%BE%D1%88%D0%B5%D0%BD%D0%B8%D0%B8_%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85.pdf&name=%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0_%D0%B2_%D0%BE%D1%82%D0%BD%D0%BE%D1%88%D0%B5%D0%BD%D0%B8%D0%B8_%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85.pdf&nosw=1">Пользовательским соглашением и с обработкой персональных данных</a>
              </p>
            </form>
            <div className="btm-zapis">
                <h1 id='hh'>Или напишите нам</h1>
                <div className="social-net">
                    <a href="">
                        <img src={LogoVK} alt="" />
                    </a>
                    <a href="">
                        <img src={LogoTG} alt="" />
                    </a>
                </div>
            </div>
          </div>
        </>
    )
}

export default Zapis;