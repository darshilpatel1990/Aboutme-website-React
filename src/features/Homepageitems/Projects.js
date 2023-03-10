import { Row, Col } from "reactstrap";
import nucampwebsite from '../../app/assets/img/nucampwebsite.png';

const Projects = () => {
    return (
        <Row className="my-5">
            <Col xs='12' className='mb-5'>
                <h3 className="bodyh3 text-center">My recent work</h3>
            </Col>
            <Col xs='12' md='7' lg='6' className="mb-4">
                <img id="nucampWeb" className="img-fluid" src={nucampwebsite} alt="Nucamp Website" />
            </Col>
            <Col xs='12' md='5' lg='6' className="align-self-center">
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
    );
};

export default Projects;