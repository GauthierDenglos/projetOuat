import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

//represent the toolbar, to navigate between product and command

export class Navigation extends Component{
    render(){
        return(
            <Navbar bg="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/">Home</NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/Product">Product</NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/Command">Command</NavLink>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}
