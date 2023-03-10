import { useState } from "react";
import { Col, Popover, PopoverHeader, PopoverBody, Card, CardImg, CardTitle, CardBody, Button } from "reactstrap";
import web_design from '../../app/assets/img/web_design.png';

const WebdesignDetails = () => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    return (
        <Col xs='6' lg='3'>
            <Card id="webdesignCard" className="card-home">
                <CardImg src={web_design} alt="Web Desinging" />
                <CardBody>
                    <CardTitle className="card-title">Web Designing</CardTitle>
                </CardBody>
            </Card>
            <Popover
                placement="bottom"
                isOpen={popoverOpen}
                target="webdesignCard"
                toggle={() => setPopoverOpen(!popoverOpen)}
            >
                <PopoverHeader>
                    Web Designing
                    <Button className="popoverButton offset-4" type="button" onClick={() => setPopoverOpen(false)}>&#x2715;</Button>
                </PopoverHeader>
                <PopoverBody>
                    Web designing refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development.
                </PopoverBody>
            </Popover>
        </Col>
    );
};

export default WebdesignDetails;