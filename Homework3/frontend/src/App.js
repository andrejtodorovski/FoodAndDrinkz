import './App.css';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import TopNavBarComponent from './components/TopNavBarComponent'
import StartPageComponent from './components/StartPageComponent'
import MostVisitedAndTopRatedComponent from './components/MostVisitedAndTopRatedComponent'
import LoggedTopNavBarComponent from './components/LoggedTopNavBarComponent'
import BarsNavBarComponent from './components/NavBarComponentBars'
import CafesNavBarComponent from './components/NavBarComponentCafes'
import RestaurantsNavBarComponent from './components/NavBarComponentRestaurants'
import ListBarsComponent from './components/ListBarsComponent';
import ListRestaurantsComponent from './components/ListRestaurantsComponent'
import ListCafesComponent from './components/ListCafesComponent'
import LoginComponent from './components/LoginComponent'
import RegisterComponent from './components/RegisterComponent'
import AddPlaceComponent from './components/AddPlaceComponent';
import ShowClosestComponent from './components/ShowClosestComponent';
import FindUserLocationComponent from './components/FindUserLocationComponent';
import PlaceComponent from './components/PlaceComponent';
function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path='/' element = {<><div className='ccc pb-5'><TopNavBarComponent/><StartPageComponent/><MostVisitedAndTopRatedComponent/></div></>}></Route>
          <Route exact path='/bars' element = {<><LoggedTopNavBarComponent/><BarsNavBarComponent/><ListBarsComponent/></>}></Route>
          <Route exact path='/restaurants' element = {<><LoggedTopNavBarComponent/><RestaurantsNavBarComponent/><ListRestaurantsComponent/></>}></Route>
          <Route exact path='/cafes' element = {<><LoggedTopNavBarComponent/><CafesNavBarComponent/><ListCafesComponent/></>}></Route>
          <Route exact path='/login' element = {<><LoginComponent/></>}></Route>
          <Route exact path='/register' element = {<><RegisterComponent/></>}></Route>
          <Route exact path='/place/add' element = {<><TopNavBarComponent/><AddPlaceComponent/></>}></Route>
          <Route exact path='/test' element = {<><TopNavBarComponent/><FindUserLocationComponent/></>}></Route>
          <Route exact path='/closest' element = {<><TopNavBarComponent/><ShowClosestComponent/></>}></Route>
          <Route exact path='/:id' element = {<><TopNavBarComponent/><PlaceComponent/></>}></Route>
          <Route exact path='/findClosest' element = {<><TopNavBarComponent/><FindUserLocationComponent/></>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
