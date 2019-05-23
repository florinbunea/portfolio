import React, { Component } from 'react';
import { Grid, Cell } from "react-mdl";
import "./Aboutme.css";

class Aboutme extends Component {
    render() {
        return (
            <div className="container">
                <Grid className="about-image">
                    <Cell col={12}>
                        <div className="overlay">
                            <h1>Welcome to About Page, More info soon!</h1>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Aboutme;