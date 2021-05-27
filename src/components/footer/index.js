import * as React from "react";
import './style.css';
import {Link, Route} from "react-router-dom";
import Icon from '../../images/IconPhone.svg'

const Footer = () => {
  return  (
    <footer className='footer'>
      <Route>
        <nav>
          <ul className='footer_list'>
            <li>
              <Link className='footer_link' to='/services'>Услуги</Link>
            </li>
            <li>
              <Link className='footer_link' to='/gallery'>Галерея</Link>
            </li>
            <li>
              <Link className='footer_link' to='/contact'>Контакты</Link>
            </li>
            <li>
              <Link className='footer_link'>
                <img className='footer_icon' src={Icon} alt=""/>
                8(8652)606-300 </Link>
            </li>
          </ul>
        </nav>
      </Route>
    </footer>
  )
}

export default React.memo(Footer)