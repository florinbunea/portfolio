import React, { Component } from 'react';
import { Grid, Cell } from "react-mdl";

import  contact from "../backgrounds/image/contact.jpg";


class Contact extends Component {
    render() {
        return (
            <div className="container">
                <Grid className="contact-grid">
                     <Cell col={12}>
                        <img src={contact} alt ="logo" />                  
                     </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;