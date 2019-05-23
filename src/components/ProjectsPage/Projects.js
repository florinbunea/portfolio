import React, { Component } from 'react';
import { Grid, Cell } from "react-mdl";
import "./Projects.css";

class Projects extends Component {
    render() {
        return (
            <div className="container">
                <Grid className="projects-image">
                     <Cell col={12}> 
                        <div className="overlay">
                           <h1> Welcome to Projects Page, work in progress!</h1>
                        </div>                
                     </Cell>
                </Grid>
            </div>
        );
    }
}

export default Projects;