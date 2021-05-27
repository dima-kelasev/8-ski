import * as React from "react";
import DropMenu from "../../Main/components/BurgerMenu/DropMenu";
import './menuBlack.css'

const BurgerMenuBlack = () => {
  const [isMenuActive, setMenuActive] = React.useState(false);
  return(
    <div>
      <div className={`burgerBlack ${isMenuActive ? 'active' : ''}`} onClick={() => setMenuActive(!isMenuActive)}>
        <span></span>
      </div>
      <div className={isMenuActive ? 'menuActive' : 'menu'}>
        <div className='menu-container '>
          <div className='blur'/>
          <DropMenu/>

        </div>
      </div>
    </div>
  )
}

export default React.memo(BurgerMenuBlack)