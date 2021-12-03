import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Service from './Service';
import Navbar from './Navbar';

const App =() => {
    return (
        <>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} exact/>
            <Route exact path="/ABCDAPP" component={Home} exact/>
            <Route exact path="/service" component={ Service } />
            <Route exact path="/contact" component={ Contact } />
            <Route exact path="/about" component={ About } />
        </Switch>
        </>
    );
}

export default App;