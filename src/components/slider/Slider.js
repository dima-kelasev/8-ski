import * as React  from "react";
import Slider from "react-slick";
import waterImg from '../../images/slide/waterpool.png';
import roomsImg from '../../images/slide/rooms.png';
import RusSauna from '../../images/slide/rusSauna.png';
import finroom from '../../images/slide/finSauna.png'
import hamam from '../../images/slide/hamam.png';
import hamam2 from '../../images/slide/hamam2.png';
import sauna from '../../images/slide/sauna.png';
import sauna2 from '../../images/slide/sauna2.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styleSlider.css';
import {Link} from "react-router-dom";
import {sliderData} from '../../data/sliderData'

export default class SlickGoTo extends React.Component {
  state = {
    // activeSlide: 1,
    slideIndex: 1,
    updateCount: 0
  };

  render() {
    const settings = {
      dots: false,
      arrows: true,
      fade: false,
      autoplay: false,
      autoplaySpeed: 5000,
      className: 'slidCard',
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      afterChange: () =>
        this.setState(state => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (oldIndex, newIndex) => this.setState({ slideIndex: newIndex, activeSlide: newIndex })
    };

    return (
      <>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div>
            <img src={waterImg} alt=""/>
            <div className='cardNav'>
              <h3>Летний бассейн</h3>
              <p>В комфортном шезлонге вы сможете насладиться летним солнцем, а контрастные по температуре бассейны
                оставят положительные эмоции и впечатления.</p>
              <Link to='/waterpool'>Смотреть подробнее</Link>
            </div>

          </div>
          <div>
            <img src={roomsImg} alt=""/>
            <div className='cardNav'>
              <h3>Гостиничные номера</h3>
              <p>Комфортабельные номера, которые подходят как для краткосрочного, так и для длительного проживания.</p>
              <Link to='/rooms'>Смотреть подробнее</Link>
            </div>
          </div>
          <div>
            <img src={RusSauna} alt=""/>
            <div className='cardNav'>
              <h3>Русская баня на дровах</h3>
              <p>Отдых в русской бане избавит вас от усталости, укрепит дух, парение с помощью дров благоприятно скажется
                на нервной, дыхательной и сердечно-сосудистой системе.</p>
              <Link to='/russianSauna'>Смотреть подробнее</Link>
            </div>
          </div>
          <div>
            <img src={finroom} alt=""/>
            <div className='cardNav'>
              <h3>Номер с финской парной и джакузи</h3>
              <p>Финская парная, аэрогидромассажная ванна, комната отдыха с просторной комфортабельной кроватью, а также
                зал отдыха.</p>
              <Link to='/finnishRoom'>Смотреть подробнее</Link>
            </div>
          </div>
          <div>
            <img src={hamam} alt=""/>
            <div className='cardNav'>
              <h3>Хамам</h3>
              <p>Уютна зона отдыха включает в себя несколько видов парных: русская парная и турецкий хаммам, теплый бассейн
                с гидромассажем, зал с массажным столом.</p>
              <Link to='/hamam'>Смотреть подробнее</Link>
            </div>
          </div>
          <div>
            <img src={hamam2} alt=""/>
            <div className='cardNav'>
              <h3>Хамам2</h3>
              <p>Турецкая баня имеет минимальные противопоказания. Главная особенность хамама - высокая влажность и
                температура 35-55 градусов.</p>
              <Link to='/hamam2'>Смотреть подробнее</Link>
            </div>
          </div>
          <div>
            <img src={sauna} alt=""/>
            <div className='cardNav'>
              <h3>Сауна 1</h3>
              <p>Отдых компании друзей, уютного вечера в кругу близких, деловой встречи или празднование дня рождения и др.
                К вашим услугам 2 этажа.</p>
              <Link to='/sauna'>Смотреть подробнее</Link>
            </div>
          </div>
          <div>
            <img src={sauna2} alt=""/>
            <div className='cardNav'>
              <h3>Сауна 2</h3>
              <p>Просторный зал, для отдыха компании до 10 человек, русская парная, подогреваемый бассейн 4,8*2,6 с гейзером, телевизор, музыкальный аппарат/караоке.</p>
              <Link to='/sauna2'>Смотреть подробнее</Link>
            </div>
          </div>

        </Slider>
        <div className='navSlider'>
          <p className='navSlider_scrollBar'>
            {this.state.slideIndex}
            <input
              onChange={e => this.slider.slickGoTo(e.target.value)}
              value={this.state.slideIndex}
              type="range"
              min={1}
              max={7}
              className='inputSlider'
            />
            8
          </p>
        </div>

      </>
    );
  }
}