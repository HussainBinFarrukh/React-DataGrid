import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Header from './Components/Header-Component/Nav.jsx'
import FaqComponent from './Components/Faq-Component/Faq.jsx';
import DataGrid from './Components/DataGrid-Component/DataGrid.jsx';

function App() {
  return (
    <div className="App">
    <Header/>
    <BrowserRouter>
    <Switch>
    <Route exact path='/' component={DataGrid}/>
    <Route exact path='/faq' component={FaqComponent}/>
    </Switch>
    </BrowserRouter>

    <footer className="footer">
    <p> VISIONET &#174;</p>    
    </footer>

    </div>
  );
}

export default App;
