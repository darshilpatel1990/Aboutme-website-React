import { Row, Col } from "reactstrap";
import travel from '../../app/assets/img/travel.png';
import cricket1 from '../../app/assets/img/cricket1.png';
import reading3 from '../../app/assets/img/reading3.png';
import drawing2 from '../../app/assets/img/drawing2.png';

const Hobbies = () => {
    return (
        <Row>
            <Col xs='12'>
                <h3 className="bodyh3 text-center mb-3">Hobbies</h3>
            </Col>
            <Col className="card-fun p-2" sm='3'>
                <img className="card-img-top" src={travel} alt="Travel image" />
                <div className="card-body text-center">
                    <h5 className="card-title">Travel</h5>
                </div>
            </Col>
            <Col className="card-fun p-2" sm='3'>
                <img className="card-img-top" src={cricket1} alt="Cricket sport image" />
                <div className="card-body text-center">
                    <h5 className="card-title">Playing cricket</h5>
                </div>
            </Col>
            <Col className="card-fun p-2" sm='3'>
                <img className="card-img-top" src={reading3} alt="Reading image" />
                <div className="card-body text-center">
                    <h5 className="card-title">Reading</h5>
                </div>
            </Col>
            <Col className="card-fun p-2" sm='3'>
                <img className="card-img-top" src={drawing2} alt="Drawing image" />
                <div className="card-body text-center">
                    <h5 className="card-title">Drawing</h5>
                </div>
            </Col>
        </Row>
    );
};

export default Hobbies;