import React, {Component} from "react";
import {Table} from "react-bootstrap";

export class Product extends Component {

    constructor(props){
        super(props);
        //to use this, you have to use super before. Here we create an object containing prod
        this.state ={prod:[]}
    }

    componentDidMount(){
        this.refreshList();
    }

    //temporary before we can access the API and database. Fill the product table
    refreshList(){
        /*this.setState({
            prod:[{"productName":"Mario", "productOrg":"Nintendo"},
            {"productName":"LOL", "productOrg":"Riot"}
        ]
        })*/
        fetch('https://localhost:44390/api/Product')
        .then(response=> response.json())
        .then(data => {this.setState({prod:data})});
    }

    render(){
        const {prod} = this.state;
        //mt = margin top, th = headers
        return (
        <Table className="mt-4" striped bordered hover size="sm">
        <thead>
            <tr>
                <th>productName</th>
                <th>productOrg</th>
            </tr>
        </thead>
        <tbody>
            {prod.map(p=>
                <tr key = {p.productName}>
                <td>{p.productName}</td>
                <td>{p.productOrg}</td>
                </tr>
                )}
        </tbody>
        
        </Table>
        )
    }
}