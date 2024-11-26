import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const AddUpdateBlog = (props) => {
    const { formShow, handleFormClose } = props;

    return (

        <>
            <Modal show={formShow} onHide={handleFormClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add/Update Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Blog Title</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" autoFocus />
                            <Form.Label>Blog Title</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" autoFocus />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleFormClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleFormClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )


}

export default AddUpdateBlog