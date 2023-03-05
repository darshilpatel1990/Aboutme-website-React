import { Button, Label, Col, Row, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateContactForm } from "./validateContactForm";

const ContactForm = () => {

    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();

        alert('Thank you for reaching out to me.');
    };

    return (
        <Row className="my-5">
            <Col xs='12' className="formHeader">
                Feel free to reach out to me
            </Col>
            <Col xs='12' lg='8'>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        phoneNum: '',
                        email: '',
                        agree: false,
                        message: ''
                    }}
                    onSubmit={handleSubmit}
                    validate={validateContactForm}
                >
                    <Form className="my-5">
                        <FormGroup row>
                            <Label htmlFor='firstName' md='2' style={{ textAlign: "left" }}>
                                First Name
                            </Label>
                            <Col md='10'>
                                <Field
                                    className='form-control'
                                    name='firstName'
                                    placeholder='First Name'
                                />
                                <ErrorMessage name='firstName'>
                                    {(msg) => <p className='text-danger' style={{ textAlign: "left" }}>{msg}</p>}
                                </ErrorMessage>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor='lastName' md='2' style={{ textAlign: "left" }}>
                                Last Name
                            </Label>
                            <Col md='10'>
                                <Field
                                    className='form-control'
                                    name='lastName'
                                    placeholder='Last Name'
                                />
                                <ErrorMessage name='lastName'>
                                    {(msg) => <p className='text-danger' style={{ textAlign: "left" }}>{msg}</p>}
                                </ErrorMessage>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor='phoneNum' md='2' style={{ textAlign: "left" }}>
                                Phone
                            </Label>
                            <Col md='10'>
                                <Field
                                    className='form-control'
                                    name='phoneNum'
                                    placeholder='Phone'
                                />
                                <ErrorMessage name='phoneNum'>
                                    {(msg) => <p className='text-danger' style={{ textAlign: "left" }}>{msg}</p>}
                                </ErrorMessage>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor='email' md='2' style={{ textAlign: "left" }}>
                                Email
                            </Label>
                            <Col md='10'>
                                <Field
                                    className='form-control'
                                    name='email'
                                    placeholder='Email'
                                />
                                <ErrorMessage name='email'>
                                    {(msg) => <p className='text-danger' style={{ textAlign: "left" }}>{msg}</p>}
                                </ErrorMessage>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor='message' md='2' style={{ textAlign: "left" }}>
                                Your Message
                            </Label>
                            <Col md='10'>
                                <Field
                                    className='form-control'
                                    name='message'
                                    as='textarea'
                                    rows='12'
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col style={{ display: "flex" }} md={{ offset: 2 }}>
                                <Button type='submit' style={{ backgroundColor: '#4a2070', }}>
                                    Send Message
                                </Button>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col>
                                 
                            </Col>
                        </FormGroup>
                    </Form>
                </Formik>
            </Col>
            <Col xs='12' xl='3' className="mt-2">
                {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d329266.1418347382!2d-97.43302647983859!3d49.85388572660398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea73fbf91a2b11%3A0x2b2a1afac6b9ca64!2sWinnipeg%2C%20MB!5e0!3m2!1sen!2sca!4v1674365945424!5m2!1sen!2sca"
                    width="350" height="400" style={{border:0}} allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe> */}
            </Col>
        </Row>
    );
};

export default ContactForm;