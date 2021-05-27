import * as React from "react";
import notFound from '../../images/404.png'
import './style.css'
import {Link} from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className='notFound'>
        <h3 className='notFound_title'>Упс, страница не найдена</h3>
        <img className='notFound_img' src={notFound} alt=""/>
        <Link className='notFound_Link' to='/'> Давай обратно</Link>
      </div>

    </>
  )
}

export default React.memo(NotFound)