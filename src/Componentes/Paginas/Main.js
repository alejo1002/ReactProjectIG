import React,{Component} from 'react';
import {Route, BrowserRouter as Router } from 'react-router-dom'
import Inicio from './Inicio';
import Register from './Register'
import Search from './Search';

const Navegacion = (
    <Router>
        <Route path="/Search" component={Search}/>
        <Route path="/Login" component={Inicio}/>
        <Route path="/Register" component={Register}/>
    </Router>
)

class Main extends React.Component{

    render(){
        return(
            <div className="container main-container">
                {
                    Navegacion
                }
            </div>
        );
    }
}

export default Main;