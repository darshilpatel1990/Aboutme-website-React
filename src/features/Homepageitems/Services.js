import { Row, Col } from "reactstrap";
import FrontendDetails from "../../utils/Frontenddetails";
import BackendDetails from "../../utils/Backenddetails";
import WebdesignDetails from "../../utils/Webdesigndetails";
import MobileappDetails from "../../utils/Mobileappdetails";

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