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
import PlaceComponentWithRoute from './components/PlaceComponentWithRoute';
import TopNavBarComponentDark from './components/TopNavBarComponentDark';
import ListFavoritePlacesComponent from './components/ListFavoritePlacesComponent'
import ShowProfileComponent from './components/ShowProfileComponent';
import TopNavBarDarkComponent from './components/TopNavBarDarkComponent'
function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path='/' element = {<><div className='ccc pb-5'><TopNavBarComponent/><StartPageComponent/><MostVisitedAndTopRatedComponent/></div></>}></Route>
          <Route exact path='/bars' element = {<><TopNavBarComponent/><BarsNavBarComponent/><ListBarsComponent/></>}></Route>
          <Route exact path='/restaurants' element = {<><TopNavBarComponent/><RestaurantsNavBarComponent/><ListRestaurantsComponent/></>}></Route>
          <Route exact path='/cafes' element = {<><TopNavBarComponent/><CafesNavBarComponent/><ListCafesComponent/></>}></Route>
          <Route exact path='/login' element = {<><TopNavBarComponentDark/><LoginComponent/></>}></Route>
          <Route exact path='/register' element = {<><TopNavBarComponentDark/><RegisterComponent/></>}></Route>
          <Route exact path='/place/add' element = {<><TopNavBarComponentDark/><AddPlaceComponent/></>}></Route>
          <Route exact path='/test' element = {<><TopNavBarComponent/><FindUserLocationComponent/></>}></Route>
          <Route exact path='/closest' element = {<><TopNavBarComponent/><ShowClosestComponent/></>}></Route>
          <Route exact path='/:id' element = {<><TopNavBarComponent/><PlaceComponentWithRoute/></>}></Route>
          <Route exact path='/findClosest' element = {<><TopNavBarDarkComponent/><FindUserLocationComponent/></>}></Route>
          <Route exact path='/favorites' element = {<><TopNavBarComponent/><ListFavoritePlacesComponent/></>}></Route>
          <Route exact path='/profile' element = {<><TopNavBarComponent/><ShowProfileComponent/></>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
