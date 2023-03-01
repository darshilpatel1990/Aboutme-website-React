import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import Frontend_dev from '../../app/assets/img/Frontend_dev.png';
import back_end_server from '../../app/assets/img/back_end_server.png';
import web_design from '../../app/assets/img/web_design.png';
import mobileapp from '../../app/assets/img/mobileapp.png';

const Services = () => {
    return (
        <Row className="my-5">
            <Col sm='12' className='mb-3'>
                <h3 className="bodyh3 text-center">Services Provided</h3>
            </Col>
            <Col sm='6' lg='3'>
                <Card>
                    <CardImg className="card-img-top" src={Frontend_dev} alt="Frontend Development" />
                    <CardBody className="card-body">
                        <CardTitle>Front-End Development</CardTitle>
                    </CardBody>
                </Card>
            </Col>
            <Col sm='6' lg='3'>
                <Card>
                    <CardImg className="card-img-top" src={back_end_server} alt="Backend Development" />
                    <CardBody className="card-body">
                        <CardTitle>Back-End Development</CardTitle>
                    </CardBody>
                </Card>
            </Col>
            <Col sm='6' lg='3'>
                <Card>
                    <CardImg className="card-img-top" src={web_design} alt="Web Desinging" />
                    <CardBody className="card-body">
                        <CardTitle>Web Design</CardTitle>
                    </CardBody>
                </Card>
            </Col>
            <Col sm='6' lg='3'>
                <Card>
                    <CardImg className="card-img-top" src={mobileapp} alt="Mobile Application" />
                    <CardBody className="card-body">
                        <CardTitle>Mobile Application</CardTitle>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default Services;