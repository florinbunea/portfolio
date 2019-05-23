import React, { Component } from 'react';
import { Grid, Cell } from "react-mdl";
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div className="container">
                <Grid className="home-image">
                    <Cell col={12}>                                  
                        <div className="overlay">
                       <h1> Welcome to Home Page, we work hard to delivere this MVP</h1>
                        </div>                         
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Home;
