import React, { Component } from 'react';
import { Grid, Cell } from "react-mdl";

import  projects from "../backgrounds/image/projects.jpg";


class Projects extends Component {
    render() {
        return (
            <div className="container">
                <Grid className="project-grid">
                     <Cell col={12}>
                        <img src={projects} alt ="logo" />                  
                     </Cell>
                </Grid>
            </div>
        );
    }
}

export default Projects;