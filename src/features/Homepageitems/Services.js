import { Row, Col } from "reactstrap";
import FrontendDetails from "./Frontenddetails"
import BackendDetails from "./Backenddetails";
import WebdesignDetails from "./Webdesigndetails";
import MobileappDetails from "./Mobileappdetails";

const Services = () => {
    return (
        <Row className="my-5">
            <Col sm='12' className='mb-3'>
                <h3 className="bodyh3 text-center">Services Provided</h3>
            </Col>
            <FrontendDetails />
            <BackendDetails />
            <WebdesignDetails />
            <MobileappDetails />
        </Row>
    );
};

export default Services;