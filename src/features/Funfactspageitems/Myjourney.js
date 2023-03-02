import { Row, Col } from "reactstrap";
import myjourney from '../../app/assets/img/myjourney.png';

const Myjourney = () => {
    return (
        <Row className="my-5">
            <Col sm='5'>
                <img id="imgFun" className="d-flex mx-auto img-fluid" src={myjourney} alt="my journey image" />
            </Col>
            <Col sm='6'>
                <div id="textFun" className="media-body align-self-center">
                    <h3 className="bodyh3">My journey</h3>
                    <br/>
                    <p>- Born in India, living in Canada.<br/>- Worked as pharmacy technician before becoming <strong>Software developer.</strong><br/>- Studied Full-stack and Backend developer course at NuCamp.<br/>- Love drawing, novel reading, playing cricket in spare time.<br/>- My cooking is so fabulous even the smoke alarm cheers me on.</p>
                </div>
            </Col>
        </Row>
    );
};

export default Myjourney;