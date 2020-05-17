import React, { useState, useEffect } from "react";
import { Button, Col, Row, Modal, Form, Card, Tabs, Tab } from "react-bootstrap";
import api from "../../config/api";
import { getAdminRequestConfig } from "../../config/requestConfig";

const EditBooking = ({ showEditBookings, closeEdit, editBookings, bookings }) => {
    const [status, setStatus] = useState(bookings.status);
    const bookingId = bookings.id;
    return (
        <Modal
            show={showEditBookings}
            onHide={closeEdit}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title>Edit Status</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form.Group>
                    <Form.Label>Status</Form.Label>
                    <Form.Control as="select" value={status} onChange={(event) => setStatus(event.target.value)}>
                        <option value="">select</option>
                        <option>requested</option>
                        <option>accepted</option>
                    </Form.Control>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button className="box" onClick={closeEdit}>close</Button>
                <Button className="box secondary" onClick={() => editBookings(status, bookingId)}>Edit</Button>
            </Modal.Footer>
        </Modal>
    )
}
const BookingsItems = ({ bookings, fetchBooking }) => {

    const [showEditBookings, setShowEditBookings] = useState(false);

    const closeEdit = () => {
        setShowEditBookings(false);
    }
    const openEdit = () => {
        setShowEditBookings(true);
    }
    const editBookings = (status, bookingId) => {

        let content = { status };
        api.put(`/booking/${bookingId}`, content, getAdminRequestConfig()).then(() => {
            // alert("edit bookings");
            setShowEditBookings(false);
            fetchBooking();
        })

    }
    return (
        <Col sm={12} md={6} lg={4} style={{ padding: '5px' }}>
            <Card style={{ marginBottom: "10px" }}>
                <Card.Body>
                    <Card.Title>
                        <h4>Program : {bookings.program.title}</h4>
                    </Card.Title>
                    <Card.Subtitle>
                        User Name: {bookings.user.name}
                    </Card.Subtitle>
                    <Card.Text>
                        Contact Number : {bookings.user.contactNumber}<br />
                        Email : {bookings.user.email}<br />
                    </Card.Text>
                    <Button style={{ marginRight: "10px" }} onClick={openEdit}>Edit</Button>
                </Card.Body>
            </Card>
            <EditBooking
                showEditBookings={showEditBookings}
                closeEdit={closeEdit}
                editBookings={editBookings}
                bookings={bookings}
            />

        </Col>
    )
}

const Bookings = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetchBookings();
    }, [])

    const fetchBookings = () => {
        api.get("/booking").then((response) => {
            setBookings(response.data);
        })
    }
    return (
        <div>
            <h1>Bookings</h1>

            {
                bookings.length === 0 && <h2>Loading...</h2>
            }
            <Tabs className="requests" defaultActiveKey="requested" id="uncontrolled-tab-example">
                <Tab eventKey="requested" title="Requested">
                    <br />
                    <Row>
                        {
                            bookings.length !== 0 && bookings.filter((req) => req.status === "requested").map((req, index) => (
                                <BookingsItems key={index} bookings={req} fetchBooking={fetchBookings} />
                            ))
                        }
                    </Row>
                </Tab>
                <Tab eventKey="accepted" title="Accepted">
                    <br />
                    <Row>
                        {
                            bookings.length !== 0 && bookings.filter((req) => req.status === "accepted").map((req, index) => (
                                <BookingsItems key={index} bookings={req} fetchBooking={fetchBookings} />
                            ))
                        }
                    </Row>

                </Tab>


            </Tabs>




        </div>

    )
}
export default Bookings;