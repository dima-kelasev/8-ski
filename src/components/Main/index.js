import * as React from "react";
import './style.css'
import Footer from "../footer";
import {star} from '../../data/constant'
import BurgerMenu from "./components/BurgerMenu";
import SlickGoTo from "../slider/Slider";

const MainPage = () => {

  const starItem = star.map((item) =>
    <img key='item' className='main_star' src={item.starIcon} alt={item.alt}/>
  )

  return (
    <>
      <BurgerMenu/>
       <div className='MainPage'>
         <div className='Main'>
           <div className='mainWrap'>
            
             <p className='mainSubtitle'>Банно-гостиничный комплекс</p>
             <h1 className='mainTitle'>Восьмое небо</h1>
             <div>{starItem}</div>
           </div>
         </div>
         <SlickGoTo/>
       </div>
      <Footer/>

    </>
  )
}

export default React.memo(MainPage)