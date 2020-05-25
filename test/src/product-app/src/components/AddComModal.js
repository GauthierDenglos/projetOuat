import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class AddComModal extends Component{
    constructor(props){
        super(props);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:44390/api/command',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                commandId: null,
                productName: event.target.productName.value,
                commandDate: event.target.commandDate.value,
                commandDescription: event.target.commandDescription.value
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
                        Command
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
                                <Form.Group controlId="commandDate">
                                    <Form.Label> Command date </Form.Label>
                                    <Form.Control type="text" name="commandDate" required placeholder="commandDate"/>
                                </Form.Group>
                                <Form.Group controlId="commandDescription">
                                    <Form.Label> Command description </Form.Label>
                                    <Form.Control type="text" name="commandDescription" required placeholder="commandDescription"/>
                                </Form.Group>

                                <Form.Group>
                                    <Button variant="primary" type="submit"> Command </Button>
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