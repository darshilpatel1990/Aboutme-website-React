import { Row, Col, Container } from "reactstrap";
import nucampwebsite from '../../app/assets/img/nucampwebsite.png';
import mobilefront from '../../app/assets/img/mobilefront.png';
import mobiledrawer from '../../app/assets/img/mobiledrawer.png';

const Projects = () => {
    return (
        <Container>
            <Row className='my-5'>
                <h3 className="bodyh3 text-center">My recent work</h3>
            </Row>
            <Row className='my-5'>
                <Col xs='6' md='3' className="mb-5">
                    <img className="workImg img-fluid" src={mobilefront} alt="mobile app-1" />
                </Col>
                <Col xs='6' md='3' className="mb-5">
                    <img className="workImg img-fluid" src={mobiledrawer} alt="mobile app-2" />
                </Col>
                <Col xs='12' md='6' className="align-self-center">
                    <h4 className="bodyh4 mb-3"><u>About me - Mobile App</u></h4>
                    <h5 className="bodyText">Moblie app version of this website created by using React-Native technology</h5>
                    <ul className="bodyText">
                        <li>App Design</li>
                        <li>App Development</li>
                    </ul>
                    <br />
                    <h5 className="mb-3"><u>Details</u></h5>
                    <p className="bodyText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem illum, illo autem cupiditate magnam fugit ullam velit voluptate sequi adipisci et consequuntur repellendus excepturi, dolor, nobis impedit doloribus! Dignissimos, soluta.</p>
                    <br />
                    <p>For more details & code, visit <a className="textlink" href="https://github.com/darshilpatel1990/Aboutme-React-Native-app" target="_blank">Github</a></p>
                </Col>
            </Row>
            <hr />
            <Row className='my-5'>
                <Col xs='12' md='6' className="mb-5">
                    <img className="workImg img-fluid" src={nucampwebsite} alt="Nucamp Website" />
                </Col>
                <Col xs='12' md='6' className="align-self-center">
                    <h4 className="bodyh4 mb-3"><u>Nucampsite Website</u></h4>
                    <h5 className="bodyText">A fictional website completely based on Bootstrap and some Javascript code</h5>
                    <ul className="bodyText">
                        <li>Web Design</li>
                        <li>Web Development</li>
                    </ul>
                    <br />
                    <h5 className="mb-3"><u>Details</u></h5>
                    <p className="bodyText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem illum, illo autem cupiditate magnam fugit ullam velit voluptate sequi adipisci et consequuntur repellendus excepturi, dolor, nobis impedit doloribus! Dignissimos, soluta.</p>
                    <br />
                    <p>For more details & code, visit <a className="textlink" href="https://github.com/darshilpatel1990/nucampsite" target="_blank">Github</a></p>
                </Col>
            </Row>
        </Container>
    );
};

export default Projects;