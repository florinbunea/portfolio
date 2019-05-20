import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';

import './App.css';


function App() {
  return (
    <div className="big-content">
      <Layout>
        <Header className="header-color" title="Welcome to Florin Bunea Portfolio" scroll>
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Menu">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  )
}

export default App;

