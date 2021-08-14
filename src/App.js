import './App.css';
import Header from './components/Header';
import {Switch,  Route, Link, Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import UnderHeaderImg from './components/UnderHeaderImg'
import Sectionhome from './components/SectionHome';
import ViewTablesBrasileirao from './components/ViewTablesBrasileirao';
import Footer from './components/Footer'
import Nextgame from './components/NextGame';
import ViewTableCopaBrasil from './components/ViewTablesCopaBrasil';



function App() {
  return (
    <div className="App">
    <Switch>
      <Route path='/' exact>
        <Header/>
        <UnderHeaderImg children='Home'/>
        <Sectionhome/>
       <Footer/>
      </Route>
      <Route path='/brasileirao' component={ViewTablesBrasileirao} exact />
      <Route path='/copa-do-brasil' component={ViewTableCopaBrasil} exact />
      <Route path='/brasileirao/:code' component={Nextgame}/>
    </Switch>
      
    </div>
  );
}

export default App;
