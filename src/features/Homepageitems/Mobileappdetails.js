import { useState } from "react";
import { Col, Popover, PopoverHeader, PopoverBody, Card, CardImg, CardTitle, CardBody, Button } from "reactstrap";
import mobileapp from '../../app/assets/img/mobileapp.png';

const MobileappDetails = () => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    return (
        <Col xs='6' lg='3'>
            <Card id="mobileappCard" className="card-home">
                <CardImg src={mobileapp} alt="Mobile Application" />
                <CardBody>
                    <CardTitle className="card-title">Mobile Application</CardTitle>
                </CardBody>
            </Card>
            <Popover
                placement="bottom"
                isOpen={popoverOpen}
                target="mobileappCard"
                toggle={() => setPopoverOpen(!popoverOpen)}
            >
                <PopoverHeader>
                    Mobile Application
                    <Button className="popoverButton offset-3" type="button" onClick={() => setPopoverOpen(false)}>&#x2715;</Button>
                </PopoverHeader>
                <PopoverBody>
                    A mobile app is a software application developed specifically for use on small, wireless computing devices, such as smartphones and tablets, rather than desktop or laptop computers.
                </PopoverBody>
            </Popover>
        </Col>
    );
};

export default MobileappDetails;