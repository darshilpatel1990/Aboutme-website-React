import { Row, Col } from "reactstrap";
import CHART from '../../app/assets/img/CHART.png';
import { Link } from "react-router-dom";

const Skillsoverview = () => {
    return (
        <Row className="my-5">
            <Col xs='12' md='6' className='align-self-center'>
                <h3 className="bodyh3">Skills & Experience</h3>
                <br />
                <div className="bodyText">
                    <p>Since beginning my journey as Software Developer, I have built some websites for local businesses as freelancer.</p>
                    <p>I create unique, successful, responsive websites that are fast, user-friendly. The main area of my expertise is front-end development with JavaScript, HTML, CSS, building small to medium websites and React-native mobile apps.</p>
                    <p>I also have some back-end developer experience with Python, SQL and DevOps.</p>
                    <p>Visit my <a className="textlink" href="https://www.linkedin.com/in/darshil-patel-7b7611252/" target="_blank">LinkedIn</a> profile for more
                        details or <Link to="/contact" className="textlink">contact</Link> me.</p>
                </div>
            </Col>
            <Col xs='12' md='6'>
                <img id="imgSkills" src={CHART} className="img-fluid" alt="Darshil's skills chart" />
            </Col>
        </Row>
    );
};

export default Skillsoverview;