import React, {Component} from "react";
import {Table} from "react-bootstrap";

//import the add button, to add a product in the database. Use pop up windows
import {Button, ButtonToolbar} from 'react-bootstrap'
import {AddProModal} from './AddProModal'
import {AddGetModal} from './AddGetModal'


export class Product extends Component {

    constructor(props){
        super(props);
        //to use this, you have to use super before. Here we create an object containing prod
        this.state ={prod:[], addModalShow : false, getModalShow: false}
    }

    componentDidMount(){
        this.refreshList();
    }

    //temporary before we can access the API and database. Fill the product table
    refreshList(){
        fetch('https://localhost:44390/api/Product')
        .then(response=> response.json())
        .then(data => {this.setState({prod:data})});
    }

    componentDidUpdate(){
        this.refreshList();
    }

    render(){
        const {prod, prodId, prodName, prodOrg, prodPrice, prodDate} = this.state;
        let addModalClose =() => this.setState({addModalShow:false})
        let getModalClose =() => this.setState({getModalShow:false})
        //mt = margin top, th = headers
        return (
        <div>
        <Table className="mt-4" striped bordered hover size="sm">
        <thead>
            <tr>
                <th>Product name</th>
                <th>Product organisation</th>
                <th>Options</th>
            </tr>
        </thead>
        <tbody>
            {prod.map(p=>
                <tr key = {p.productName}>
                <td>{p.productName}</td>
                <td>{p.productOrg}</td>
                <td>
                    <Button className="mr-2" variant="info" onClick={()=> this.setState({getModalShow:true, prodId:p.productId, prodName:p.productName,
                        prodOrg:p.productOrg, prodPrice:p.productPrice, prodDate:p.productDate})}> Infos </Button>
                    <AddGetModal show = {this.state.getModalShow}
                    onHide={getModalClose}
                    prodId={prodId}
                    prodName={prodName}
                    prodOrg={prodOrg}
                    prodPrice={prodPrice}
                    prodDate={prodDate}
                    />
                </td>
                </tr>
                )}
        </tbody>
        </Table>

        <div class="text-left">
            <Button
            variant='primary'
            onClick={()=> this.setState({addModalShow: true})}>
            Add a product
            </Button>
            <AddProModal show={this.state.addModalShow}
            onHide={addModalClose}/>
        </div>
        </div>
        )
    }
}