import * as React from "react";
import notFound from '../../images/404.png'
import './style.css'
import {Link} from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className='notFound'>

        <div className='notFound_block'>
          <p className='notFound_title'>Ууупс... Произошла ошибка, попробуйте обновить страницу</p>
          <Link className='notFound_Link' to='/'> <button>Обновить</button></Link>
        </div>

      </div>

    </>
  )
}

export default React.memo(NotFound)