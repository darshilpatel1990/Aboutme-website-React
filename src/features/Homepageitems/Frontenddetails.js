import { useState } from "react";
import { Col, Popover, PopoverHeader, PopoverBody, Card, CardImg, CardTitle, CardBody, Button } from "reactstrap";
import Frontend_dev from '../../app/assets/img/Frontend_dev.png';

const FrontendDetails = () => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    return (
        <Col xs='6' lg='3'>
            <Card id="frontendCard" className="card-home">
                <CardImg src={Frontend_dev} alt="Frontend Development" />
                <CardBody>
                    <CardTitle className="card-title">Front-End Development</CardTitle>
                </CardBody>
            </Card>
            <Popover
                placement="bottom"
                isOpen={popoverOpen}
                target="frontendCard"
                toggle={() => setPopoverOpen(!popoverOpen)}
            >
                <PopoverHeader>
                    Front-End Development
                    <Button className="popoverButton offset-1" type="button" onClick={() => setPopoverOpen(false)}>&#x2715;</Button>
                </PopoverHeader>
                <PopoverBody>
                    Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with the website.
                </PopoverBody>
            </Popover>
        </Col>
    );
};

export default FrontendDetails;
