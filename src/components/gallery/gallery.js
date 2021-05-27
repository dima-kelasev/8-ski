import * as React from "react";
import Header from "../header/header";
import {Link} from "react-router-dom";
import {gallaryData} from '../../data/gallaryData'
import './style.css'

const Gallery = () => {
  const [open, SetOpen] = React.useState(false)
  const gallary = gallaryData.map((item) =>
    <img src={item.img} alt="" id={item.id}/>
  )
  return (
      <>
      <Header/>
        <div>
          <div className='leftSection'>
            <p className='leftSection_title'>Галерея</p>
            <h2>Восьмое небо</h2>
          </div>

          <div className='gallery__grid'>
            {gallary}
          </div>
          {/*Для новых фото*/}
          {/*<div className={open ? 'moreCardActive' : 'moreCard'}>*/}
          {/*  {gallary}*/}
          {/*</div>*/}
          <div className='gallery_block-link'>
            <button className='gallery_btn' onClick={() => SetOpen(!open)}>ПОКАЗАТЬ ЕЩЕ</button>
            <Link className='linkSection' to='/'>Вернуться на главную</Link>
            <Link className='linkSection_mobileView isNotActive' to='/'>Вернуться на главную</Link>
          </div>


        </div>
      </>
  )
}

export default React.memo(Gallery)