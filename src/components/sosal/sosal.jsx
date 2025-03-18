import './sosal.css'
import SubImg from '../../assets/img/price.svg'

function sosal(){
    return(
        <>
        <div className="main-sosal">
            <div className="h1-perms">
                <h1>НАШИ ПРЕИМУЩЕСТВА</h1>
                <img src="#" alt='source'/>
            </div>
            <div className="block-1">    
                <p>Персональные условия<br /> для студентов</p>
                
                <div className="supblock-1">
                    <img src={SubImg} alt="" />
                </div>
            </div>


            <div className="block-2">
                <p>Оперативное решение <br />вопросов обучение</p>
                <div className="supblock-2">

                </div>
            </div>


            <div className="block-3">
                <p>Полностью прозрачное <br /> обучение</p>
                <div className="supblock-3">

                </div>
            </div>


            <div className="block-4">
                <p>Условия расположения <br />офиса и автодрома</p>
                <div className="supblock-4">

                </div>
            </div>


            <div className="block-5">
                <p>Опытные преподаватели <br />с большим стажем</p>
                <div className="supblock-5">

                </div>
            </div>


            <div className="block-6">
                <p>Обучнеие <br />в удобном для вас формате</p>
                <div className="supblock-6">
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default sosal;