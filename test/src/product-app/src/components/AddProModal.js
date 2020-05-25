import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class AddProModal extends Component{
    constructor(props){
        super(props);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:44390/api/product',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                productId: null,
                productName: event.target.productName.value,
                productOrg: event.target.productOrg.value,
                productPrice: event.target.productPrice.value,
                productDate: event.target.productDate.value
            })
        })
        .then(res=> res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed')
        }
        )
    }

    render(){
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add A Product
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <Row>
                            <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>

                                <Form.Group controlId="productName">
                                    <Form.Label> Product name </Form.Label>
                                    <Form.Control type="text" name="productName" required placeholder="productName"/>
                                </Form.Group>
                                <Form.Group controlId="productOrg">
                                    <Form.Label> Product organisation </Form.Label>
                                    <Form.Control type="text" name="productOrg" required placeholder="productOrg"/>
                                </Form.Group>
                                <Form.Group controlId="productPrice">
                                    <Form.Label> Product price </Form.Label>
                                    <Form.Control type="text" name="productPrice" required placeholder="productPrice"/>
                                </Form.Group>
                                <Form.Group controlId="productDate">
                                    <Form.Label> Product creation </Form.Label>
                                    <Form.Control type="text" name="productDate" required placeholder="productDate"/>
                                </Form.Group>

                                <Form.Group>
                                    <Button variant="primary" type="submit"> Add product </Button>
                                </Form.Group>
                            </Form>
                            </Col>
                        </Row>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}