import React, {Component} from "react";
import {Table} from "react-bootstrap";

//import the add button, to add a product in the database. Use pop up windows
import {Button, ButtonToolbar} from 'react-bootstrap'
import {AddProModal} from './AddProModal'
import {AddComModal} from './AddComModal'

export class Command extends Component {
    constructor(props){
        super(props);
        //to use this, you have to use super before. Here we create an object containing prod
        this.state ={prod:[], addModalShow : false}
    }

    componentDidMount(){
        this.refreshList();
    }

    //temporary before we can access the API and database. Fill the product table
    refreshList(){
        fetch('https://localhost:44390/api/Command')
        .then(response=> response.json())
        .then(data => {this.setState({prod:data})});
    }

    componentDidUpdate(){
        this.refreshList();
    }

    render(){
        const {prod} = this.state;
        let addModalClose =() => this.setState({addModalShow:false})
        //mt = margin top, th = headers
        return (
        <div>
        <Table className="mt-4" striped bordered hover size="sm">
        <thead>
            <tr>
                <th>Product name</th>
                <th>Command date</th>
                <th>Command description</th>
            </tr>
        </thead>
        <tbody>
            {prod.map(p=>
                <tr key = {p.productName}>
                <td>{p.productName}</td>
                <td>{p.commandDate}</td>
                <td>{p.commandDescription}</td>
                </tr>
                )}
        </tbody>
        </Table>

        <div class="text-left">
            <Button
            variant='primary'
            onClick={()=> this.setState({addModalShow: true})}>
            Command !
            </Button>
            <AddComModal show={this.state.addModalShow}
            onHide={addModalClose}/>
        </div>
        </div>
        )
    }
}