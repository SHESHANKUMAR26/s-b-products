import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Row, Col, Card } from "react-bootstrap";
import api from "../../config/api";
import { getAdminRequestConfig } from "../../config/requestConfig";


const EditSchedule = ({ showEditSchedule, closeEditSchedule, editSchedule, schedule, programs, trainers }) => {
    const [program, setProgram] = useState(schedule.program.id);
    const [trainer, setTrainer] = useState(schedule.trainer.id);
    const [day, setDay] = useState(schedule.day);
    const [time, setTime] = useState(schedule.time)
    const [availableSeats, setAvailableSeats] = useState(schedule.availableSeats);
    const scheduleId = schedule.id;
    return (
        <Modal
            show={showEditSchedule}
            onHide={closeEditSchedule}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Edit Schedule</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group>
                    <Form.Label>Program</Form.Label>
                    <Form.Control as="select" value={program} onChange={(event) => setProgram(event.target.value)}>
                        <option value="">select</option>
                        {
                            programs.map((program) => {
                                return <option value={program.id}>{program.title}</option>
                            })
                        }
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Trainer</Form.Label>
                    <Form.Control as="select" value={trainer} onChange={(event) => setTrainer(event.target.value)}>
                        <option value="">select</option>
                        {
                            trainers.map((trainer) => {
                                return <option value={trainer.id}>{trainer.name}</option>
                            })
                        }
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Day</Form.Label>
                    <Form.Control as="select" value={day} onChange={(event) => setDay(event.target.value)}>
                        <option value="">select</option>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Time</Form.Label>
                    <Form.Control type="text" value={time} placeHolder="HH:MM" onChange={(event) => setTime(event.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Available Seats</Form.Label>
                    <Form.Control type="text" value={availableSeats} placeHolder="available seats" onChange={(event) => setAvailableSeats(event.target.value)} />
                </Form.Group>

            </Modal.Body>
            <Modal.Footer>
                <Button className="box" onClick={closeEditSchedule}>close</Button>
                <Button className="box secondary" onClick={() => editSchedule(scheduleId, program, trainer, day, time, availableSeats)}>Edit</Button>
            </Modal.Footer>
        </Modal>
    )
}
const AddSchedule = ({ showSchedule, closeSchedule, addSchedule, programs, trainers }) => {
    const [program, setProgram] = useState('');
    const [trainer, setTrainer] = useState('');
    const [day, setDay] = useState('');
    const [time, setTime] = useState('');
    const [availableSeats, setAvailableSeats] = useState('');

    return (
        <Modal
            show={showSchedule}
            onHide={closeSchedule}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title>Add Schedule</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group>
                    <Form.Label>Program</Form.Label>
                    <Form.Control as="select" onChange={(event) => setProgram(event.target.value)}>
                        <option value="">select</option>
                        {
                            programs.map((programs) => {
                                return <option value={programs.id}>{programs.title}</option>
                            })
                        }
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Trainer</Form.Label>
                    <Form.Control as="select" onChange={(event) => setTrainer(event.target.value)}>
                        <option value="">select</option>
                        {
                            trainers.map((trainer) => {
                                return <option value={trainer.id}>{trainer.name}</option>
                            })
                        }
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Day</Form.Label>
                    <Form.Control as="select" onChange={(event) => setDay(event.target.value)}>
                        <option value="">select</option>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Time</Form.Label>
                    <Form.Control type="text" placeHolder="HH:MM" onChange={(event) => setTime(event.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Available Seats</Form.Label>
                    <Form.Control type="text" placeHolder="available seats" onChange={(event) => setAvailableSeats(event.target.value)} />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button className="box" onClick={closeSchedule}>close</Button>
                <Button className="box secondary" onClick={() => addSchedule(program, trainer, day, time, availableSeats)}>Add Schedule</Button>
            </Modal.Footer>

        </Modal>
    )
}

const ScheduleItems = ({ schedule, program, trainer, fetchSchedule }) => {

    const [showEditSchedule, setShowEditSchedule] = useState(false);

    const closeEditSchedule = () => {
        setShowEditSchedule(false);
    }
    const openEdit = () => {
        setShowEditSchedule(true);
    }
    const editSchedule = (scheduleId, program, trainer, day, time, availableSeats) => {
        let content = { program, trainer, day, time, availableSeats };
        api.put(`/schedule/${scheduleId}`, content, getAdminRequestConfig()).then(() => {
            //alert("edit schedule");
            setShowEditSchedule(false);
            fetchSchedule();
        })

    }
    return (
        <Col sm={12} md={6} lg={4} style={{ padding: '5px' }}>
            <Card style={{ marginBottom: "10px" }}>
                <Card.Body>
                    <Card.Title>
                        Program : {schedule.program.title !== null && schedule.program.title}
                    </Card.Title>
                    <Card.Subtitle>
                        Trainer: {schedule.trainer.name !== null && schedule.trainer.name}
                    </Card.Subtitle>
                    <Card.Text>
                        Day : {schedule.day}<br />
                        Time : {schedule.time}<br />
                        Available Seats : {schedule.availableSeats}
                    </Card.Text>
                    <Button style={{ marginRight: "10px" }} onClick={openEdit}>Edit</Button>
                </Card.Body>

            </Card>
            <EditSchedule
                showEditSchedule={showEditSchedule}
                closeEditSchedule={closeEditSchedule}
                editSchedule={editSchedule}
                schedule={schedule}
                programs={program}
                trainers={trainer}
            />
        </Col>
    )
}
const Schedules = () => {

    const [showSchedule, setShowSchedule] = useState(false);
    //get Schedule data
    const [schedules, setSchedules] = useState([]);
    //get programs data
    const [programs, setPrograms] = useState([]);
    //get trainer data
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        fetchSchedules();
        fetchPrograms();
        fetchTrainers();
    }, [])

    //fetch schedules
    const fetchSchedules = () => {
        api.get("/schedule").then((response) => {
            setSchedules(response.data);
        })
    }

    //fetch program
    const fetchPrograms = () => {
        api.get("/program").then((response) => {
            setPrograms(response.data);
        })
    }

    //fetch trainers
    const fetchTrainers = () => {
        api.get("/trainer").then((response) => {
            setTrainers(response.data);
        })
    }
    const closeSchedule = () => {
        setShowSchedule(false)
    }
    const openSchedule = () => {
        setShowSchedule(true);
    }
    const addSchedule = (program, trainer, day, time, availableSeats) => {

        let content = { program, trainer, day, time, availableSeats };
        api.post("/schedule", content, getAdminRequestConfig()).then(() => {
            //alert("add schedule");
            // setShowSchedule(false);
            fetchSchedules();
        })

    }

    return (
        <div>
            <Row>
                <Col sm={12} md={6} lg={6} style={{ padding: '5px' }}><h1>Schedules</h1></Col>
                <Col sm={12} md={6} lg={6} style={{ padding: '5px' }}><Button onClick={openSchedule} style={{ float: "right" }}>Add Schedule</Button></Col>

            </Row>
            <Row>
                {
                    schedules.length === 0 && <h2>Loading...</h2>
                }
                {
                    schedules.length !== 0 && schedules.map((req, index) => (
                        <ScheduleItems key={index} schedule={req} program={programs} trainer={trainers} fetchSchedule={fetchSchedules} />
                    ))
                }
            </Row>

            <AddSchedule
                showSchedule={showSchedule}
                closeSchedule={closeSchedule}
                addSchedule={addSchedule}
                programs={programs}
                trainers={trainers}
            />
        </div>
    )
}
export default Schedules;