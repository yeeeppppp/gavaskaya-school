import './CardsUL.css'

function CardsUL(){
    return (
        <>
            <div className="cardsUL-global">
            <div className="cardsUL">
            <div className="top-cards-ul">
                <div className="schledule">
                    <h1>Актуальное расписание занятий</h1>
                    <ul>
                        <li>
                            <p> <span>АКПП OFFLINE -</span> Вторник/Четверг</p>
                        </li>
                        <li>
                            <p> <span>МКПП OFFLINE -</span> Понедельник/Среда</p>
                        </li>
                        <li>
                            <p> <span>АКПП ONLINE -</span> Вебинары Вторник/Четверг</p>
                        </li>
                        <li>
                            <p> <span>МКПП ONLINE -</span> Вебинары Понедельник/Среда</p>
                        </li>
                    </ul>
                </div>
                <div className="time">
                    <h1>Время проведения</h1>
                    <ul>
                        <li>
                            <p><span>АКПП и МКПП OFFLINE -  </span><br /> Вторник: 18:00, Четверг: 19:00</p>
                        </li>
                        <li>
                            <p><span>АКПП и МКПП ONLINE  -</span><br />Понедельник: 18:00, Четверг: 19:00</p>
                        </li>
                    </ul>
                </div>
                <div className="duration">
                    <h1 className='title-duration'>Продолжительность занятий</h1>
                    <div className="duration-div">
                        <h1>1.5-2 ЧАСА</h1>
                    </div>
                </div>
                <div className="time-learning">
                    <h1>Время обучения <br />в автошколе</h1>
                    <div className="time-dur-div">
                        <h1>3-3.5 МЕС</h1>
                    </div>
                </div>
            </div>
            <div className="bottom-cards-ul">
                <div className="hoe">
                    <h1> <span>Индивидуальные условия</span> <br />
                    Для групп выходного дня</h1>

                    <p>Для уточнения расписания <br />
                    обращаться к администратору автошколы</p>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default CardsUL;