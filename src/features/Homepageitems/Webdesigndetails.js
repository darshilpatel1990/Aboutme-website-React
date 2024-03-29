import { Row, Col, Card, CardTitle, CardImg } from "reactstrap";
import web_design from '../../app/assets/img/web_design.png';
import { Link } from "react-router-dom";

const WebdesignDetails = () => {
    return (
        <Row className="m-5">
            <Col sm='12' className="backLink mb-3">
                <Link to="/"><i className="fa fa-angle-left text-dark"> Back</i></Link>
            </Col>
            <Col sm='12' md='5' lg='4'>
                <Card className="p-4 cardDetail">
                    <CardImg src={web_design} alt="Web Design" />
                </Card>
            </Col>
            <Col sm='12' md='7' lg='8'>
                <Card className="p-4 cardDetail">
                    <CardTitle className="mt-2 mb-4">
                        <h3 className="bodyh3"><i className="fa fa-pencil"></i> Web Design</h3>
                    </CardTitle>
                    <div className="serviceText">
                        <p>
                            Web designing is the process of planning, conceptualizing, and implementing the plan for designing a website in a way that is functional and offers a good user experience.
                        </p>
                        <p>
                            A web designer creates the layout and design of a website.
                        </p>
                        <p>
                            Tools and Technologies will be used to create a design of your website :
                        </p>
                        <ul>
                            <li>Figma</li>
                            <li>Moqups</li>
                            <li>Proto.io</li>
                            <li>Sketch</li>
                        </ul>
                        <p>
                            In most of the cases, Web designing will be included in Front-end development of your website.
                        </p>
                    </div>
                </Card>
            </Col>
        </Row>
    );
};

export default WebdesignDetails;