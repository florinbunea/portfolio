import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './HomePage/Home';
import AboutMe from './AboutPage/Aboutme';
import Contact from './ContactPage/Contact';
import Projects from './ProjectsPage/Projects';

const Main = () => {
    return (
        <Switch>            
            <Route exact path='/' component={Home} />
            <Route path='/aboutme' component={AboutMe} />
            <Route path='/contact' component={Contact} />
            <Route path='/projects' component={Projects} />
        </Switch>
    )
}

export default Main;