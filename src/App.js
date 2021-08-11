import './App.css';
import Header from './components/Header';
import {Switch,  Route, Link, Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import UnderHeaderImg from './components/UnderHeaderImg'
import Sectionhome from './components/SectionHome';
import Viewtables from './components/ViewTables';
import Footer from './components/Footer'



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
      <Route path='/brasileirao' component={Viewtables} />

    </Switch>
      
    </div>
  );
}

export default App;
