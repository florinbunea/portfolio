import React, { Component } from 'react';
import { Grid, Cell,} from "react-mdl";
import './Home.css'

import  home from "../backgrounds/image/home.jpg"


class Home extends Component {
    render() {
        return (
            <div className="container">
                <Grid className="home-grid">
                     <Cell col={12}>
                        <img src={home} alt ="logo" /> 
                        {/* <Text>Hi This is Home Page</Text>                  */}
                     </Cell>
                </Grid>
            </div>
        );
    }
}

export default Home;
