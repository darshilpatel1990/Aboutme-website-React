import { Col, Card, CardImg, CardTitle, CardBody } from "reactstrap";
import back_end_server from '../../app/assets/img/back_end_server.png';
import { useNavigate } from "react-router-dom";

const BackendCard = () => {
    const navigate = useNavigate();
    const routeChange = () => {
        navigate('backend-development');
    }

    return (
        <Col xs='6' lg='3'>
            <Card id="backendCard" className="card-home" onClick={routeChange}>
                <CardImg src={back_end_server} alt="Backend Development" />
                <CardBody>
                    <CardTitle className="card-title">Back-End Development</CardTitle>
                </CardBody>
            </Card>
        </Col>
    );
};

export default BackendCard;