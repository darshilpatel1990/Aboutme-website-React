import { Row, Col, Card, CardTitle, CardImg } from "reactstrap";
import Frontend_dev from '../../app/assets/img/Frontend_dev.png';
import { Link } from "react-router-dom";

const FrontendDetails = () => {
    return (
        <Row className="m-5">
            <Col sm='12' className="backLink mb-3">
                <Link to="/"><i className="fa fa-angle-left text-dark"> Back</i></Link>
            </Col>
            <Col sm='12' md='5' lg='4'>
                <Card className="p-4 cardDetail">
                    <CardImg src={Frontend_dev} alt="Frontend Development" />
                </Card>
            </Col>
            <Col sm='12' md='7' lg='8'>
                <Card className="p-4 cardDetail">
                    <CardTitle className="mt-2 mb-4">
                        <h3 className="bodyh3"><i className="fa fa-code"></i> Front-End Development</h3>
                    </CardTitle>
                    <div className="serviceText">
                        <p>
                            Front-end web development is the development of the graphical user interface of a website that focuses on what users see on their end.
                        </p>
                        <p>
                            Languages and Technologies will be used for Frontend Development of your website :
                        </p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Bootstrap</li>
                            <li>React JS</li>
                        </ul>
                        <p>
                            Websites vary in sizes from single page to multiple pages.
                            <br />
                            Types :
                            <ul>
                                <li>Personal website</li>
                                <li>Business website</li>
                                <li>eCommerce website</li>
                                <li>Event website</li>
                                <li>Blog website, etc...</li>
                            </ul>
                        </p>
                    </div>
                </Card>
            </Col>
        </Row>
    );
};

export default FrontendDetails;