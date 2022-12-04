import './App.css';
import AppBarReact from './AppBarReact.js'
import MostPopular from './MostPopular.js';
import FindLocation from './FindLocation.js';
// import FindRoute from './FindRoute.js';
import TopRated from './TopRated.js'
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDlJ9QMrY5M7y1LHA3ZpyYNLmdfATPreSw&callback=initMap"></script>
function App() {
  return (
    <div>
      <AppBarReact/>
      <TopRated/>
      <MostPopular/>
      <FindLocation/>
    </div>
  );
}

export default App;
