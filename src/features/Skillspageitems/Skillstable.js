import { Row, Col } from "reactstrap";

const Skillstable = () => {
    return (
        <Row className="my-5">
            <Col>
                <div className="card cardskills text-center">
                    <div className="card-header">
                        Frontend Developer
                    </div>
                    <div className="card-body">
                        <p>I like to code from scratch and like to bring new ideas to websites.</p>
                        <br />
                        <p className="card-text">Frontend Languages I use for coding:</p>
                        <p>JavaScript, HTML, CSS</p>
                        <br />
                        <p className="card-text">Dev tools:</p>
                        <p>Bootstrap</p>
                        <p>Github</p>
                        <p>Sass</p>
                        <p>React</p>
                        <p>React native</p>
                        <p>Jquery</p>
                        <p>Codepen</p>
                    </div>
                </div>
            </Col>
            <Col>
                <div className="card cardskills text-center">
                    <div className="card-header">
                        Backend Developer
                    </div>
                    <div className="card-body">
                        <p>I like to build and maintain the mechanisms that process data and perform
                            actions on websites.</p>
                        <br />
                        <p className="card-text">Backend Languages I use for coding:</p>
                        <p>JavaScript, Python, SQL</p>
                        <br />
                        <p className="card-text">Dev tools:</p>
                        <p>Django</p>
                        <p>MongoDB</p>
                        <p>MySQL</p>
                        <p>Docker</p>
                        <p>Kubernetes</p>
                        <p>Insomnia</p>
                    </div>
                </div>
            </Col>
            <Col>
                <div className="card cardskills text-center">
                    <div className="card-header">
                        Web Designer
                    </div>
                    <div className="card-body">
                        <p>I like to make unique yet user friendly web designs.</p>
                        <br />
                        <p className="card-text">Things I design:</p>
                        <p>Web, App, Logos</p>
                        <br />
                        <p className="card-text">Design tools:</p>
                        <p>Font Awesome</p>
                        <p>Sketch</p>
                        <p>Figma</p>
                        <p>Moqups</p>
                        <p>Proto.io</p>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Skillstable;