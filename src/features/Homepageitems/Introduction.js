import { Col, Row } from 'reactstrap';
import profile3 from '../../app/assets/img/profile3.jpg'
import { Link } from 'react-router-dom';

const Introduction = () => {
    return (
        <Row className='my-5 bodyText' >
            <Col sm='5' className='align-self-center'>
                <img id="imgProfile" className="d-flex img-fluid mx-auto offset-1" src={profile3} alt="profile" />
            </Col>
            <Col sm='7' className='mt-3 align-self-center'>
                <h3 className="bodyh3">Let me introduce myself</h3>
                <br/>
                <p>I'm a Software Developer from Winnipeg, Canada.<br/>I have serious passion for designing & creating interactive websites. <br/>I create clean, professional, functional websites.</p>
                <p><Link to="/contact" className="textlink">Let's make something special.</Link></p>
            </Col>
        </Row>
    );
}

export default Introduction;