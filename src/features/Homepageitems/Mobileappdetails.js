import { Row, Col, Card, CardTitle, CardImg } from "reactstrap";
import mobileapp from '../../app/assets/img/mobileapp.png';
import { Link } from "react-router-dom";

const MobileappDetails = () => {
    return (
        <Row className="m-5">
            <Col sm='12' className="backLink mb-3">
                <Link to="/"><i className="fa fa-angle-left text-dark"> Back</i></Link>
            </Col>
            <Col sm='12' md='5' lg='4'>
                <Card className="p-4 cardDetail">
                    <CardImg src={mobileapp} alt="Mobile Application" />
                </Card>
            </Col>
            <Col sm='12' md='7' lg='8'>
                <Card className="p-4 cardDetail">
                    <CardTitle className="mt-2 mb-4">
                        <h3 className="bodyh3"><i className="fa fa-mobile"></i> Mobile Application</h3>
                    </CardTitle>
                    <div className="serviceText">
                        <p>
                            A mobile app is a software application developed specifically for use on small, wireless computing devices, such as smartphones and tablets, rather than desktop or laptop computers.
                        </p>
                        <p>
                            Languages and Technologies will be used for development of your Mobile Application :
                        </p>
                        <ul>
                            <li>React Native</li>
                            <li>JavaScript</li>
                            <li>Redux</li>
                            <li>Animation</li>
                        </ul>
                        <p>
                            Mobile apps built in React Native are suitable for both: Iphones&#40;iOS&#41; and Android phones.
                        </p>
                        <p>
                            Nearly, 76% consumers prefer to do shopping on their phone which is quicker and time-saver. Having a mobile application for your business can be a game changer in this fast growing digital industry.
                        </p>
                    </div>
                </Card>
            </Col>
        </Row>
    );
};

export default MobileappDetails;