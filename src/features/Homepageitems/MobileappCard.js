import { Col, Card, CardImg, CardTitle, CardBody} from "reactstrap";
import mobileapp from '../../app/assets/img/mobileapp.png';
import { useNavigate } from "react-router-dom";

const MobileappCard = () => {
    const navigate = useNavigate();
    const routeChange = () => {
        navigate('mobileapp-development');
    }

    return (
        <Col xs='6' lg='3'>
            <Card id="mobileappCard" className="card-home" onClick={routeChange}>
                <CardImg src={mobileapp} alt="Mobile Application" />
                <CardBody>
                    <CardTitle className="card-title">Mobile Application</CardTitle>
                </CardBody>
            </Card>
        </Col>
    );
};

export default MobileappCard;