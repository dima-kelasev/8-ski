import * as React from "react";
import './style.css'
import Header from "../header/header";
import {Link} from "react-router-dom";
import TextBlock from "./components/textBlock";
import {CardData} from '../../data/CardsData'


const Template = (props) => {
  const cardsElement = CardData.map((cards) =>
  <div className='contact__grid-item'>
    <img className='grid_img' src={cards.url} alt=""/>
    <p className='grid_text'>
      {cards.title}

      <Link to={cards.path}>
        <button className='grid_btn'></button>
      </Link>
    </p>
  </div>
  )

  return(
    <>

        <Header/>
        <div className='leftSection Contact'>
          <div className='contact_block-text'>
            <p className='leftSection_title'>Услуги</p>
            <h2>Восьмое небо</h2>
            <div className='sectionSubtitle'></div>
            <h3 className='contact__text-blue'>На территории базы отдыха находится:</h3>

            <div className='contact__wrapper'>
              <TextBlock
                li='— 25-метровый бассейн, вокруг которого так приятно расположиться;'
                li2='— Детский бассейн размером 8*4 для маленьких гостей;'
                li3='— Теплый бассейн размером 4,5*5,5 с гидромассажем;'
                li4='— Бар с освежающими напитками;'
                li5='— Летнее кафе с закусками;'
              />
              <TextBlock
                li='— Летние беседки;'
                li2='— Зона барбекю;'
                li3='— Комфортабельные домики;'
                li4='— Шатры;'
                class='contact__orange-text'
              />
            </div>
          </div>


          <div className='contact__grid-container'>
            {cardsElement}
          </div>
            <div className='contact_block-link'>
              <Link className=' Link_contact' to='/'>Вернуться на главную</Link>
            </div>

        </div>




    </>
  )
}

export default React.memo(Template)