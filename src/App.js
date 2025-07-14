import './App.css';
import MainPage from "./components/Main";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Services from "./components/services/services";
import Gallery from "./components/gallery/gallery";
import Contact from "./components/contact/contact";
import * as React from "react";
import NotFound from "./components/404/notfound";
import WaterPool from "./components/waterpool/waterpool";
import Rooms from "./components/rooms/rooms";
import RussianSauna from "./components/russianSauna/RussianSauna";
import FinnishRoom from "./components/finnishRoom/FinnishRoom";
import Hamam from "./components/hamam/Hamam";
import HamamTwo from "./components/hamam/HamamTwo";
import Sauna from "./components/sauna/Sauna";
import SaunaTwo from "./components/sauna/SaunaTwo";
import Price from "./components/price/price";
import Hall from './components/hall/Hall'
import RussianSauna2 from './components/russianSauna/RussianSauna2'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/services'>
            <Services/>
          </Route>
          <Route path='/services'>
            <Services/>
          </Route>
          <Route path='/gallery'>
            <Gallery/>
          </Route>
          <Route path='/contact'>
            <Contact/>
          </Route>
          <Route exact path='/'>
            <MainPage/>
          </Route>
          <Route path='/waterpool'>
            <WaterPool/>
          </Route>
          <Route path='/rooms'>
            <Rooms/>
          </Route>
          <Route path='/russianSauna'>
            <RussianSauna/>
          </Route>
          <Route path='/russianBathhouse'>
            <RussianSauna2/>
          </Route>
          <Route path='/finnishRoom'>
            <FinnishRoom/>
          </Route>
          <Route path='/hamam'>
            <Hamam  />
          </Route>
          <Route path='/hamam2'>
            <HamamTwo  />
          </Route>
             <Route path='/hall'>
            <Hall  />
          </Route>
          <Route path='/sauna'>
            <Sauna  />
          </Route>
          <Route path='/sauna2'>
            <SaunaTwo />
          </Route>
          <Route path='/price'>
            <Price />
          </Route>
          <Route component={NotFound}/>
          <Redirect to='/' />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
