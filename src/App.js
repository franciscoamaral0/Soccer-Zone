import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router,  Switch,  Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import UnderHeaderImg from './components/UnderHeaderImg'


function App() {
  return (
    <div className="App">
      <Header/>
      <UnderHeaderImg children='Home'/>
    </div>
  );
}

export default App;
