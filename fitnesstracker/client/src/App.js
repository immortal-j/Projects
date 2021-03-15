import React from 'react';
import './App.css';
import {Switch,Route,Redirect} from 'react-router-dom';
import FitnessTracker from './components/FitnessTracker/FitnessTracker';
import MainPage from './components/MainPage/MainPage';
import About from './components/about/about';
import Contact from './components/Contact/contact';
import Profile from './components/Profile/profile';
import Meal from './components/Footer/footer1det';
import Excercise from './components/Excercise/Ex1det';
function App() {
 
  return (
    <div>
      
      <Switch>
       <Route exact path ="/fitnesstracker">
         <FitnessTracker/>
       </Route>
       <Route exact path ="/">
         <MainPage/>
       </Route>
       <Route exact path="/home">
       <MainPage/>
       </Route>
       <Route exact path="/about">
         <About/>
       </Route>
       <Route exact path="/contact">
         <Contact/>
       </Route>
       <Route exact path="/profile">
         <Profile/>
       </Route>
       <Route exact path="/foodmeal">
         <Meal/>
       </Route>
       <Route exact path="/excercise">
         <Excercise/>
       </Route>
       
         
       <Redirect to="/"/>
     </Switch>
    </div>
  );
}

export default App;
