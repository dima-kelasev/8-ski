import * as React from "react";
import {Link} from "react-router-dom";
import './menu.css'
import logo from '../../../../images/logo.svg'

const DropMenu = () => {
  return(
    <>
    <nav className='menuNav'>
      <ul>
        <li>
          <Link className='Menu_Link' to='/'>Главная</Link>
        </li>
        <li>
          <Link className='Menu_Link' to='/waterpool'>Летний бассейн</Link>
        </li>
        <li>
          <Link className='Menu_Link' to='/rooms'>Гостиничные номера</Link>
        </li>
        <li>
          <Link className='Menu_Link' to='/russianSauna'>Русская баня на дровах №1</Link>
        </li>
         <li>
          <Link className='Menu_Link' to='/russianBathhouse'>Русская баня на дровах №2</Link>
        </li>
        <li>
          <Link className='Menu_Link' to='/finnishRoom'>Номер с финской парной и джакузи</Link>
        </li>
        <li>
          <Link className='Menu_Link' to='/hamam'>Хамам</Link>
        </li>
        <li>
          <Link className='Menu_Link' to='/hamam2'>Хамам 2</Link>
        </li>
        <li>
          <Link className='Menu_Link' to='/sauna'>Сауна №1</Link>
        </li>
        <li>
          <Link className='Menu_Link' to='/sauna2'>Сауна №2</Link>
        </li>
         <li>
          <Link className='Menu_Link' to='/hall'>Банкетный зал</Link>
        </li>
      </ul>
      <div className='dropMenu_footer'>
        <ul>
          <li className='liMobile'>
            <Link to='/services'>Услуги</Link>
          </li>
          <li className='liMobile'>
            <Link to='/gallery'>Галерея</Link>
          </li>
          <li>
            <Link className='Menu_Link' to='/price'>Стоимость услуг</Link>
          </li>
          <li>
            <Link className='Menu_Link' to='/contact'>Контакты</Link>
          </li>
        </ul>
        <img src={logo} alt="логотип"/>
      </div>
    </nav>
    </>
  )
}

export default React.memo(DropMenu)