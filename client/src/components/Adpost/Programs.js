import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Row, Col, Card } from "react-bootstrap";
import api from "../../config/api";
import { getAdminRequestConfig } from "../../config/requestConfig";

const EditProgram = ({ showEditProgram, closeEditProgram, editProgram, program }) => {
    const [title, setTitle] = useState(program.title);
    const [description, setDescription] = useState(program.description);
    const [bannerImage, setBannerImage] = useState({});
    const programId = program.id;

    const formSubmitHandler = (event) => {
        event.preventDefault();
        editProgram(title, description, programId, bannerImage);
    }

    return (<Modal
        show={showEditProgram}
        onHide={closeEditProgram}
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header>
            <Modal.Title>Edit Program</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={formSubmitHandler} encType="multipart/form-data">
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Banner Image</Form.Label>
                    <Form.Control type="file" onChange={(event) => setBannerImage(event.target.files[0])} />
                </Form.Group>
                <Button type="submit">Edit Program</Button>
            </Form>

        </Modal.Body>
        <Modal.Footer>
            <Button onClick={closeEditProgram}>Close</Button>
        </Modal.Footer>
    </Modal>)
}


const AddProgram = ({ showProgram, closeProgram, addProgram }) => {
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [bannerImage, setBannerImage] = useState({});

    const formSubmitHandler = (event) => {
        event.preventDefault();
        addProgram(title, description, bannerImage);
    }


    return (<Modal
        show={showProgram}
        onHide={closeProgram}
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header>
            <Modal.Title>Add Program</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={formSubmitHandler} encType="multipart/form-data">
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeHolder="title" onChange={(event) => setTitle(event.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeHolder="description" onChange={(event) => setDescription(event.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Banner Image</Form.Label>
                    <Form.Control type="file" onChange={(event) => setBannerImage(event.target.files[0])} />
                </Form.Group>
                <Button className="box secondary" type="submit">Add Program</Button>
            </Form>

        </Modal.Body>
        <Modal.Footer>
            <Button onClick={closeProgram}>close</Button>

        </Modal.Footer>
    </Modal>)
}


const ProgramsItem = ({ program, fetchPrograms }) => {

    const [showEditProgram, setShowEditProgram] = useState(false);
    const closeEditProgram = () => {
        setShowEditProgram(false);
    }
    const openEdit = () => {
        setShowEditProgram(true);
    }
    const editProgram = (title, description, programId, bannerImage) => {
        var formData = new FormData();
        formData.append("bannerImage", bannerImage);
        formData.append("title", title);
        formData.append("description", description);
        api.put(`/program/${programId}`, formData, getAdminRequestConfig()).then(() => {
            //alert("edit program")
            setShowEditProgram(false);
            fetchPrograms();
        })

    }


    return (
        <Col sm={12} md={6} lg={4} style={{ padding: '5px' }}>
            <Card style={{ marginBottom: "10px" }}>
                <Card.Body>
                    <Card.Title>
                        {program.title}
                        <br /><br />
                        <img id={program.id} className="img img-thumbnail" src={"http://localhost:3001/api/program/" + program.id + "/image"} alt="" />
                    </Card.Title>
                    <Card.Text>
                        Description: {program.description}
                    </Card.Text>
                    <Button className="btn btn-primary" style={{ marginRight: "10px" }} onClick={openEdit}>Edit</Button>
                </Card.Body>
            </Card>
            <EditProgram
                showEditProgram={showEditProgram}
                closeEditProgram={closeEditProgram}
                editProgram={editProgram}
                program={program}
            />


        </Col>

    )
}
const Programs = () => {

    const [programs, setPrograms] = useState([]);
    //add programs
    const [showProgram, setShowProgram] = useState(false);

    useEffect(() => {
        fetchPrograms();
    }, [])

    const fetchPrograms = () => {
        api.get("/program").then((response) => {
            setPrograms(response.data);
        })
    }
    const closeProgram = () => {
        setShowProgram(false);
    }
    const openProgram = () => {
        setShowProgram(true);
    }

    const addProgram = (title, description, bannerImage) => {
        var formData = new FormData();
        formData.append("bannerImage", bannerImage);
        formData.append("title", title);
        formData.append("description", description);

        api.post("/program", formData, getAdminRequestConfig()).then(() => {
            // alert("add prpgram");
            setShowProgram(false);
            fetchPrograms();
        })

    }

    return (

        <div>
            <Row>
                <Col sm={12} md={6} lg={6} style={{ padding: '5px' }}> <h1>Programs</h1></Col>
                <Col sm={12} md={6} lg={6} style={{ padding: '5px' }}><Button onClick={openProgram} style={{ float: "right" }}>Add Program</Button></Col>
            </Row>

            <Row>
                {
                    programs.length === 0 && <h2>Loading....</h2>
                }
                {
                    programs.length !== 0 && programs.map((req, index) => (
                        <ProgramsItem key={index} program={req} fetchPrograms={fetchPrograms} />
                    ))
                }
            </Row>
            <AddProgram
                showProgram={showProgram}
                closeProgram={closeProgram}
                addProgram={addProgram}
            />
        </div>
    )
}
export default Programs;