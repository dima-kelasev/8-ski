import * as React from "react";
import './menu.css'
import DropMenu from "./DropMenu";
import icon from "../../../../images/iconMobileWhite.svg";

const BurgerMenu = () => {
  const [isMenuActive, setMenuActive] = React.useState(false);
  return (
      <>
        <div className='mainBurgerMenu'>
          <div className={`burger ${isMenuActive ? 'active' : ''}`} onClick={() => setMenuActive(!isMenuActive)}>
            <span></span>
            <p className={isMenuActive ? 'mobileMainActive' : 'mobileMain'}> <img
              src={icon}
              alt="иконка телефона"
              className='mobileViewIcon'
            />
              8(8652)606-300</p>
          </div>
          <div className={isMenuActive ? 'menuActive' : 'menu'}>
            <div className='menu-container'>
              <div className='blur'/>
              <DropMenu/>
            </div>
          </div>
        </div>

      </>
  )
}
export default React.memo(BurgerMenu)