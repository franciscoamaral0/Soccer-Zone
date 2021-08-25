import './App.css';
import Header from './components/Header-Home/Header.js';
import {Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import UnderHeaderImg from './components/Header-Home/UnderHeaderImg'
import Sectionhome from './components/Header-Home/SectionHome';
import ViewTablesBrasileirao from './components/Brasileirao/ViewTablesBrasileirao';
import Footer from './components/Footer/Footer'
import Nextgame from './components/Brasileirao/NextGame';
import ViewTableCopaBrasil from './components/CopaBr-Liberta-SulAmericana/ViewTablesCopaBrasil';
import ViewTableLibertadores from './components/CopaBr-Liberta-SulAmericana/ViewTablesLibertadores';
import ViewTableSulamericana from './components/CopaBr-Liberta-SulAmericana/ViewTablesSulamericana';
import ContactForm from './components/Contact/ContactForm'
import NotFound from './components/NotFound/NotFound';




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
      
      <Route path='/brasileirao' component={ViewTablesBrasileirao} exact/>
      <Route path='/copa-do-brasil' component={ViewTableCopaBrasil} exact/>
      <Route path='/libertadores' component={ViewTableLibertadores} exact/>
      <Route path='/sul-americana' component={ViewTableSulamericana} exact/>
      <Route path='/contato' component={ContactForm} exact/>
      <Route path='/brasileirao/:code' component={Nextgame}/>
      <Route component={NotFound}/>
    </Switch>
      
    </div>
  );
}

export default App;
