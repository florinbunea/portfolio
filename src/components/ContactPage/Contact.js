import React, { Component } from 'react';
import { Grid, Cell } from "react-mdl";
import "./Contact.css";

class Contact extends Component {
    render() {
        return (
            <div className="container">
                <Grid className="contact-image">
                     <Cell col={12}>
                        <div className="overlay">
                           <h1> Welcome to Contact Page, work in progress!</h1>
                        </div>                 
                     </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;