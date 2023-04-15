import { Row, Col, Card, CardTitle, CardImg } from "reactstrap";
import back_end_server from '../../app/assets/img/back_end_server.png';
import { Link } from "react-router-dom";

const BackendDetails = () => {
    return (
        <Row className="m-5">
            <Col sm='12' className="backLink mb-3">
                <Link to="/"><i className="fa fa-angle-left text-dark"> Back</i></Link>
            </Col>
            <Col sm='12' md='5' lg='4'>
                <Card className="p-4 cardDetail">
                    <CardImg src={back_end_server} alt="Backend Development" />
                </Card>
            </Col>
            <Col sm='12' md='7' lg='8'>
                <Card className="p-4 cardDetail">
                    <CardTitle className="mt-2 mb-4">
                        <h3 className="bodyh3"><i className="fa fa-database"></i> Back-End Development</h3>
                    </CardTitle>
                    <div className="serviceText">
                        <p>
                            Back-end development means working on server-side software, which ensures the website performs correctly.
                        </p>
                        <p>
                            For example : You go on Amazon and search for a new phone cover. A Back-end development uses server-side language to pull all the information about phone covers from a database. That information is then processed in an application and returned to the user through Front-end language.
                        </p>
                        <p>
                            Languages and Technologies will be used for Back-end Development of your website :
                        </p>
                        <ul>
                            <li>Python</li>
                            <li>SQL</li>
                            <li>MySQL</li>
                            <li>PostgreSQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </Card>
            </Col>
        </Row>
    );
};

export default BackendDetails;