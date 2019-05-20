import React, { Component } from 'react';
import { Grid, Cell } from "react-mdl";

import  aboutme from '../backgrounds/image/aboutme.jpg';


class Aboutme extends Component {
    render() {
        return (
            <div className="container">
                <Grid className="about-grid">
                     <Cell col={12}>
                        <img src={aboutme} alt ="logo" />                  
                     </Cell>
                </Grid>
            </div>
        );
    }
}

export default Aboutme;