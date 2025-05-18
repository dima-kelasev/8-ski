import * as React from "react";
import Header from "../header/header";
import './style.css'
import {priceData} from '../../data/priceData'
import TemplatePrice from "./components/templatePrice";
import {Link} from "react-router-dom";

const Price = () => {
    const cardPrice = priceData.map((item) =>
    <TemplatePrice
      id={item.id}
        name={item.name}
        orangeClass={item.orangeClass}
        orangeText={item.orangeText}
        title={item.title}
        liDot={item.liDot}
        Spanli={item.Spanli}
        li={item.li}
        liSpan={item.liSpan}
        liCont={item.liCont}
        liSpan1={item.liSpan1}
        liCont1={item.liCont1}
        li2={item.li2}
        li2Span={item.liSpan}
        li2Span2={item.li2Span2}
        title2={item.title2}
        li3={item.li3}
        li4={item.li4}
        li4Span={item.li4Span}

        footerClass={item.footerClass}
        li5={item.li5}
        li5Span={item.li5Span}
        li6={item.li6}
        li6Span={item.li6Span}
        li7={item.li7}
        li7Span={item.li7Span}
        li8={item.li8}
        li8Span={item.li8Span}

        link={item.link}
    />
    )
  return(
    <>
    <Header/>
      <div>
        <div className='leftSection'>
          <p className='leftSection_title'>Стоимость услуг</p>
          <h2>Восьмое небо</h2>
        </div>
      </div>

      <div className='price_blocks'>
        {cardPrice}
        <Link className='linkSection' to='/' id='price_Link'>Вернуться на главную</Link>
      </div>
    </>
  )
}

export default React.memo(Price)