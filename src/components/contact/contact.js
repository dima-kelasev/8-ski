import * as React from "react";
import './style.css'
import {Link} from "react-router-dom";
import contactData from '../../data/contactData';
import Map from './components/Map'
import Header from "../header/header";


const Template = (props) => {
  const data = contactData.map((item) => (
    <div className='contact__info'>
      <p className='contact__title'><img className='contact__img' src={item.icon} alt=""/>{item.title}</p>
      <p className='contact__subtitle'>{item.name}</p>
    </div>
  ))

  return(
    <>
      <section className=''>
        <Header/>
        <div className='wrapSection'>

          <div className='leftSection leftSection_contact'>
             <p className='leftSection_title'>Контакты</p>
              <h2>Восьмое небо</h2>
            <div className='sectionSubtitle'>{data}</div>
            <Link className='linkSection' to='/'>Вернуться на главную</Link>
          </div>

          <div className='rightSection rightSection_contact'>
            <div className='sectionPrice'>
                <h3>Дополнительная информация:</h3>
                <p className='rightSection_Li rightSection_Li-margin'>• Бассейн с <span className='contact__color-blue'>9:00</span> ежедневно</p>
                <p className='rightSection_Li rightSection_Li-margin'>• Бани и сауны <span className='contact__color-blue'>24/7</span> </p>
                <p className='rightSection_Li rightSection_Li-margin'>• С <span className='contact__color-blue'>14:00 до 17:00</span> на летней территории работает баня и хамам</p>
            </div>
            <div>
              <Map/>
              <Link className='linkSection_mobileView' to='/'>Вернуться на главную</Link>
            </div>
          </div>


          </div>

      </section>

    </>
  )
}

export default React.memo(Template)