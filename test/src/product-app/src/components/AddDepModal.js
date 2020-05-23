import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class AddDepModal extends Component{
    constructor(props){
        super(props);
    }

    handleSubmit(event){
        event.preventDefault();
        alert(event.target.productName.value);
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
                                    <Form.Label> productName </Form.Label>
                                    <Form.Control type="text" name="productName" required placeholder="productName"/>
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