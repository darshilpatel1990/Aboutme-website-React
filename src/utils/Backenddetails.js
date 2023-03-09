import { useState } from "react";
import { Col, Popover, PopoverHeader, PopoverBody, Card, CardImg, CardTitle, CardBody, Button } from "reactstrap";
import back_end_server from '../../src/app/assets/img/back_end_server.png';

const BackendDetails = () => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    return (
        <Col xs='6' lg='3'>
            <Card id="backendCard" className="card-home">
                <CardImg src={back_end_server} alt="Backend Development" />
                <CardBody>
                    <CardTitle className="card-title">Back-End Development</CardTitle>
                </CardBody>
            </Card>
            <Popover
                placement="bottom"
                isOpen={popoverOpen}
                target="backendCard"
                toggle={() => setPopoverOpen(!popoverOpen)}
            >
                <PopoverHeader>
                    Back-End Development
                    <Button className="popoverButton offset-1" type="button" onClick={() => setPopoverOpen(false)}>&#x2715;</Button>
                </PopoverHeader>
                <PopoverBody>
                    Back-end development means working on server-side software, which focuses on everything you can't see on a website.
                </PopoverBody>
            </Popover>
        </Col>
    );
};

export default BackendDetails;