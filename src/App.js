import './App.css';
import Header from './components/Header';
import {Switch,  Route, Link, Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import UnderHeaderImg from './components/UnderHeaderImg'
import Sectionhome from './components/SectionHome';
<<<<<<< HEAD
import Footer from './components/Footer';

=======
import Viewtables from './components/ViewTables';
>>>>>>> 8192c9278a5d2d079a7ad21f155708d42b0772a2



function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Header/>
      <UnderHeaderImg children='Home'/>
      <Sectionhome/>
      <Footer/>
=======
    <Switch>
      <Route path='/' exact>
        <Header/>
        <UnderHeaderImg children='Home'/>
        <Sectionhome/>
      </Route>
      <Route path='/brasileirao' component={Viewtables} />

    </Switch>
      
>>>>>>> 8192c9278a5d2d079a7ad21f155708d42b0772a2
    </div>
  );
}

export default App;
