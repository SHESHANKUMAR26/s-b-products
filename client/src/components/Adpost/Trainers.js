import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Row, Col, Card } from "react-bootstrap";
import api from "../../config/api";
import { getAdminRequestConfig } from "../../config/requestConfig";

const EditTrainer = ({ showEditTrainer, closeEditTrainer, editTrainer, trainer }) => {
    const [name, setName] = useState(trainer.name);
    const [description, setDescription] = useState(trainer.description);
    const [contactNumber, setContactNumber] = useState(trainer.contactNumber);
    const [address, setAddress] = useState(trainer.address);
    const [postalCode, setPostalCode] = useState(trainer.postalCode);
    const [profileImage, setProfileImage] = useState({});
    const trainerId = trainer.id;

    const formSubmitHandler = (event) => {
        event.preventDefault();
        editTrainer(name, description, contactNumber, address, postalCode, trainerId, profileImage);
    }

    return (
        <Modal
            show={showEditTrainer}
            onHide={closeEditTrainer}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title>Edit Trainer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={formSubmitHandler} encType="multipart/form-data">
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeHolder="name" value={name} onChange={(event) => setName(event.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeHolder="description" value={description} onChange={(event) => setDescription(event.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type="text" placeHolder="contact numbner" value={contactNumber} onChange={(event) => setContactNumber(event.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeHolder="address" value={address} onChange={(event) => setAddress(event.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control type="text" placeHolder="postal code" value={postalCode} onChange={(event) => setPostalCode(event.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Edit Profile</Form.Label>
                        <Form.Control type="file" onChange={(event) => setProfileImage(event.target.files[0])} />
                    </Form.Group>
                    <Button className="box secondary" type="submit">Edit</Button>
                </Form>


            </Modal.Body>
            <Modal.Footer>
                <Button className="box" onClick={closeEditTrainer}>close</Button>

            </Modal.Footer>
        </Modal>

    )
}

const AddTrainers = ({ showTrainers, closeTrainers, addTrainers }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [address, setAddress] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [profileImage, setProfileImage] = useState({});

    const formSubmitHandler = (event) => {
        event.preventDefault();
        addTrainers(name, description, contactNumber, address, postalCode, profileImage);
    }
    return (<Modal
        show={showTrainers}
        onHide={closeTrainers}
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header>
            <Modal.Title>Add Trainers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={formSubmitHandler} encType="multipart/form-data">
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="name" onChange={(event) => setName(event.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="description" onChange={(event) => setDescription(event.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="text" placeholder="contact number" onChange={(event) => setContactNumber(event.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="address" onChange={(event) => setAddress(event.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control type="text" placeholder="postal code" onChange={(event) => setPostalCode(event.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Profile Image</Form.Label>
                    <Form.Control type="file" onChange={(event) => setProfileImage(event.target.files[0])} />
                </Form.Group>
                <Button className="box secondary" type="submit">Add Trainer</Button>

            </Form>

        </Modal.Body>
        <Modal.Footer>
            <Button className="box" onClick={closeTrainers}>close</Button>
        </Modal.Footer>
    </Modal>)
}

const TrainerItems = ({ trainer, fetchTrainer }) => {
    const [showEditTrainer, setShowEditTrainer] = useState(false);

    const closeEditTrainer = () => {
        setShowEditTrainer(false);
    }
    const openEdit = () => {
        setShowEditTrainer(true);
    }
    const editTrainer = (name, description, contactNumber, address, postalCode, trainerId, profileImage) => {
        var formData = new FormData();
        formData.append("profileImage", profileImage);
        formData.append("name", name);
        formData.append("description", description);
        formData.append("contactNumber", contactNumber);
        formData.append("address", address);
        formData.append("postalCode", postalCode);

        api.put(`/trainer/${trainerId}`, formData, getAdminRequestConfig()).then(() => {
            //alert("edit trainer");
            setShowEditTrainer(false);
            fetchTrainer();
        })

    }
    return (
        <Col sm={12} md={6} lg={4} style={{ padding: '5px' }}>
            <Card style={{ marginBottom: "10px" }}>
                <Card.Body>
                    <Card.Title>
                        {trainer.name}
                        <br /><br />
                        <img className="img img-thumbnail" src={"http://localhost:3001/api/trainer/" + trainer.id + "/image"} alt="" />
                    </Card.Title>
                    <Card.Subtitle>
                        {trainer.contactNumber}
                    </Card.Subtitle>
                    <Card.Text>
                        Description : {trainer.description}<br />
                            Address : {trainer.address}<br />
                            postal Code : {trainer.postalCode}
                    </Card.Text>
                    <Button style={{ marginRight: '10px' }} onClick={openEdit}>Edit</Button>
                </Card.Body>

            </Card>
            <EditTrainer
                showEditTrainer={showEditTrainer}
                closeEditTrainer={closeEditTrainer}
                editTrainer={editTrainer}
                trainer={trainer}
            />

        </Col>
    )
}
const Trainers = () => {
    const [trainers, setTrainers] = useState([]);
    //add trainers
    const [showTrainers, setShowTrainers] = useState(false);

    useEffect(() => {
        fetchTrainer();
    }, [])

    const fetchTrainer = () => {
        api.get("/trainer").then((response) => {
            setTrainers(response.data);
        })
    }
    const closeTrainers = () => {
        setShowTrainers(false);
    }
    const openTrainers = () => {
        setShowTrainers(true);
    }
    const addTrainers = (name, description, contactNumber, address, postalCode, profileImage) => {
        var formData = new FormData();
        formData.append("profileImage", profileImage);
        formData.append("name", name);
        formData.append("description", description);
        formData.append("contactNumber", contactNumber);
        formData.append("address", address);
        formData.append("postalCode", postalCode);
        api.post("/trainer", formData, getAdminRequestConfig()).then(() => {
            // alert("add trainers");
            setShowTrainers(false);
            fetchTrainer();
        })

    }


    return (
        <div>
            <Row>
                <Col sm={12} md={6} lg={6} style={{ padding: '5px' }}><h1>Trainers</h1></Col>
                <Col sm={12} md={6} lg={6} style={{ padding: '5px' }}><Button onClick={openTrainers} style={{ float: "right" }}>Add Trainers</Button></Col>
            </Row>
            <Row>
                {
                    trainers.length === 0 && <h2>Loading...</h2>
                }
                {
                    trainers.length !== 0 && trainers.map((req, index) => (
                        <TrainerItems key={index} trainer={req} fetchTrainer={fetchTrainer} />
                    ))
                }
            </Row>
            <AddTrainers
                showTrainers={showTrainers}
                closeTrainers={closeTrainers}
                addTrainers={addTrainers}
            />
        </div>


    )
}
export default Trainers;