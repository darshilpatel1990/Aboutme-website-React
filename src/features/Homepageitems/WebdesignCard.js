import { Col, Card, CardImg, CardTitle, CardBody } from "reactstrap";
import web_design from '../../app/assets/img/web_design.png';
import { useNavigate } from "react-router-dom";

const WebdesignCard = () => {
    const navigate = useNavigate();
    const routeChange = () =>{  
        navigate('webdesign');
      }

    return (
        <Col xs='6' lg='3'>
            <Card id="webdesignCard" className="card-home" onClick={routeChange}>
                <CardImg src={web_design} alt="Web Desinging" />
                <CardBody>
                    <CardTitle className="card-title">Web Designing</CardTitle>
                </CardBody>
            </Card>
        </Col>
    );
};

export default WebdesignCard;