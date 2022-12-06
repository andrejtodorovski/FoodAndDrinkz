import './App.css';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import TopNavBarComponent from './components/TopNavBarComponent'
import StartPageComponent from './components/StartPageComponent'
import MostVisitedAndTopRatedComponent from './components/MostVisitedAndTopRatedComponent'
import LoggedTopNavBarComponent from './components/LoggedTopNavBarComponent'
import BarsNavBarComponent from './components/BarsNavBarComponent'
import CafesNavBarComponent from './components/CafesNavBarComponent'
import RestaurantsNavBarComponent from './components/RestaurantsNavBarComponent'
import ListBarsComponent from './components/ListBarsComponent';
import ListRestaurantsComponent from './components/ListRestaurantsComponent'
import ListCafesComponent from './components/ListCafesComponent'
import LoginComponent from './components/LoginComponent'
import RegisterComponent from './components/RegisterComponent'
function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path='/' element = {<><TopNavBarComponent/><StartPageComponent/><MostVisitedAndTopRatedComponent/></>}></Route>
          <Route path='/bars' element = {<><LoggedTopNavBarComponent/><BarsNavBarComponent/><ListBarsComponent/></>}></Route>
          <Route path='/restaurants' element = {<><LoggedTopNavBarComponent/><RestaurantsNavBarComponent/><ListRestaurantsComponent/></>}></Route>
          <Route path='/cafes' element = {<><LoggedTopNavBarComponent/><CafesNavBarComponent/><ListCafesComponent/></>}></Route>
          <Route path='/login' element = {<><TopNavBarComponent/><LoginComponent/></>}></Route>
          <Route path='/register' element = {<><TopNavBarComponent/><RegisterComponent/></>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
