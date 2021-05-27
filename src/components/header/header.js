import icon from "../../images/IconPhone.svg";
import * as React from "react";
import BurgerMenuBlack from '../template/components/BurgerMenuBlack'

const Header = () => {
  return (
    <>
      <div className='header'>
        <BurgerMenuBlack />
        <p className='textNumber'>
          <img
            src={icon}
            alt="иконка телефона"
          />
          8(8652)606-300
        </p>
      </div>
    </>
  )
}

export default React.memo(Header)