import './App.css';
import Header from './components/Header';
import {Switch,  Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import UnderHeaderImg from './components/UnderHeaderImg'
import Sectionhome from './components/SectionHome';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App">
      <Header/>
      <UnderHeaderImg children='Home'/>
      <Sectionhome/>
      <Footer/>
    </div>
  );
}

export default App;
