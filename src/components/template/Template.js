import * as React from "react";
import './style.css'
import icon from '../../images/IconPhone.svg'
import BurgerMenuBlack from "./components/BurgerMenuBlack";
import {Link} from "react-router-dom";
import Header from "../header/header";
import Slider from "react-slick";


const Template = (props) => {
  const settings = {
    dots: true,
    arrows: true,
    fade: false,
    autoplay: false,
    autoplaySpeed: 5000,
    className: 'slidCardItem',
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return(
    <>
      <section className=''>
        <Header/>
        <div className='wrapSection'>
          <div className='leftSection'>
            <p className='leftSection_title'>{props.nameCard}</p>
            <h2>Восьмое небо</h2>

            <h5>{props.descCard}</h5>
            <div className='sectionSubtitle'>
              <p>{props.titleLi}</p>
              <p>{props.titleLi2}</p>
              <p>{props.titleLi3}</p>
              <p>{props.titleLi4}</p>
              <p className={props.Boldclass}>{props.BoldTitle}</p>
              <p>{props.titleLi5}</p>
              <p>{props.titleLi6}</p>
              <p>{props.titleLi7}</p>
              <p>{props.titleLi8}</p>
              <p>{props.titleLi9}</p>
              <p><span>{props.titleLi10}</span></p>
            </div>
            <Link className='linkSection' to='/'>Вернуться на главную</Link>
          </div>

          <div className={props.rightSection}>
            <div className={props.classNameSection}>
              <h3>{props.titleSectionPrice}</h3>
              <p className={props.classOrange}>{props.OrangeText}</p>
              <p className={props.class}>{props.titleList}</p>

                <p className='rightSection_Li' dangerouslySetInnerHTML={{ __html: props.li }}></p>
                <p className='rightSection_Li' dangerouslySetInnerHTML={{ __html: props.li2 }}></p>

              <p className={props.class}>{props.titleList2}</p>

                  <p className='rightSection_Li' dangerouslySetInnerHTML={{ __html: props.li3 }}></p>
                  <p className='rightSection_Li' dangerouslySetInnerHTML={{ __html: props.li4 }}></p>

                  <div className={props.classFooter}>
                    <p className='rightSection_Li' dangerouslySetInnerHTML={{ __html: props.li5 }}></p>
                    <p className='rightSection_Li' dangerouslySetInnerHTML={{ __html: props.li6 }}></p>
                    <p className='rightSection_Li' dangerouslySetInnerHTML={{ __html: props.li7 }}></p>
                  </div>
            </div>
                {/*<img className='rightSection_picture' src={props.src} alt="" id={props.id}/>*/}
            <Slider  {...settings}>
              <div>
                <img src={props.slide1} alt=""/>
              </div>

              <div>
                <img src={props.slide2} alt=""/>
              </div>

              <div>
                <img src={props.slide3} alt=""/>
              </div>

              <div>
                <img src={props.slide4} alt=""/>
              </div>

              <div>
                <img src={props.slide5} alt=""/>
              </div>

            </Slider>
            <div>

            </div>
            <Link className='linkSection_mobileView' to='/'>Вернуться на главную</Link>

          </div>

        </div>
      </section>
    </>
  )
}

export default React.memo(Template)