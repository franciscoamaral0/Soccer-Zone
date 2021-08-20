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
      <Route path='/copa-do-brasil' component={ViewTableCopaBrasil}/>
      <Route path='/libertadores' component={ViewTableLibertadores}/>
      <Route path='/sul-americana' component={ViewTableSulamericana}/>
      <Route path='/brasileirao/:code' component={Nextgame}/>
    </Switch>
      
    </div>
  );
}

export default App;
