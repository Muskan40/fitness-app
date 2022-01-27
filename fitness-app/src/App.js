
import './App.css';
import Frontscreen from './components/frontscreen/Frontscreen';
import Navbar from './components/navbar/Navbar'
import Enavbar from './components/exercise_navbar/Enavbar';
import Exercises from './components/Exercises/Exercises'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Mega from './components/MegaCalculator/Mega';
import SearchFoodCalorie from './components/FoodCalorie/SearchFoodCalorie';
function App() {




  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <Navbar/>
        <Frontscreen/>
        </Route>
        <Route exact path="/exercises">
          <Enavbar/>
          
        </Route>
        <Route exact path="/megafitness">
          <Mega/>
        </Route>
        <Route exact path="/foodCalories">
          <SearchFoodCalorie/>
        </Route>
      
      </Switch>
      
    

    </Router>
    
  );
}

export default App;
