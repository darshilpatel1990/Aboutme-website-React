import { Col, Card, CardImg, CardTitle, CardBody } from "reactstrap";
import Frontend_dev from '../../app/assets/img/Frontend_dev.png';
import { useNavigate } from "react-router-dom";


const FrontendCard = () => {
    const navigate = useNavigate();
    const routeChange = () => {
        navigate('frontend-development');
    }

    return (
        <Col xs='6' lg='3'>
            <Card id="frontendCard" className="card-home" onClick={routeChange}>
                <CardImg src={Frontend_dev} alt="Frontend Development" />
                <CardBody>
                    <CardTitle className="card-title">Front-End Development</CardTitle>
                </CardBody>
            </Card>
        </Col>
    );
};

export default FrontendCard;
