import { Row, Col } from "reactstrap";
import FrontendCard from "./FrontendCard"
import BackendCard from "./BackendCard";
import WebdesignCard from "./WebdesignCard";
import MobileappCard from "./MobileappCard";

const Services = () => {
    return (
        <Row className="my-5">
            <Col sm='12' className='mb-3'>
                <h3 className="bodyh3 text-center">Services Provided</h3>
            </Col>
            <FrontendCard />
            <BackendCard />
            <WebdesignCard />
            <MobileappCard />
        </Row>
    );
};

export default Services;