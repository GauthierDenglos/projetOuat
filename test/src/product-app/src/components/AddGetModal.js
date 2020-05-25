import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class AddGetModal extends Component{
    constructor(props){
        super(props);
        this.state ={prod:[], addModalShow : false}
    }

    refreshList(){
        fetch('https://localhost:44390/api/Product')
        .then(response=> response.json())
        .then(data => {this.setState({prod:data})});
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
                        Get Product Info
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <Row>
                            <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>
                                
                                <Form.Group controlId="productId">
                                    <Form.Label> Product Id </Form.Label>
                                    <Form.Control type="text" name="productId" required placeholder="productId" defaultValue={this.props.prodId} />
                                </Form.Group>
                                <Form.Group controlId="productName">
                                    <Form.Label> Product name </Form.Label>
                                    <Form.Control type="text" name="productName" required placeholder="productName" defaultValue={this.props.prodName} />
                                </Form.Group>
                                <Form.Group controlId="productOrg">
                                    <Form.Label> Product organisation </Form.Label>
                                    <Form.Control type="text" name="productOrg" required placeholder="productOrg" defaultValue={this.props.prodOrg} />
                                </Form.Group>
                                <Form.Group controlId="productPrice">
                                    <Form.Label> Product price </Form.Label>
                                    <Form.Control type="text" name="productPrice" required placeholder="productPrice" defaultValue={this.props.prodPrice} />
                                </Form.Group>
                                <Form.Group controlId="productDate">
                                    <Form.Label> Product creation </Form.Label>
                                    <Form.Control type="text" name="productDate" required placeholder="productDate" defaultValue={this.props.prodDate} />
                                </Form.Group>

                                <Form.Group>
                                    <Button variant="primary" type="submit"> Infos </Button>
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