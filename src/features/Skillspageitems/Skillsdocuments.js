import { Row, Col } from "reactstrap";
import Backend_Certificate from '../../app/assets/documents/Backend_Certificate.pdf';
import frontend_developer from '../../app/assets/documents/frontend_developer.pdf';
import webdev_fundamentals from '../../app/assets/documents/webdev_fundamentals.pdf';

const Skillsdocuments = () => {
    return (
        <Row className="my-5">
            <Col sm='6'>
                <div className="bodyText offset-1">
                    <h5><i className="fa fa-certificate"></i><strong> Certificates</strong><br />(downloadable)</h5>
                    <ul>
                        <li><a href={Backend_Certificate} alt="Nucamp Backend Developer certificate"
                            download>Back-End Developer</a>
                        </li>
                        <li><a href={frontend_developer} alt="Nucamp Frontend Developer certificate"
                            download>Front-End Developer</a>
                        </li>
                        <li><a href={webdev_fundamentals} alt="Nucamp Web Development Fundamentals certificate" download>Web Development
                            Fundamentals</a>
                        </li>
                    </ul>
                </div>
            </Col>
            <Col sm='6'>
                <div className="bodyText offset-1">
                    <h5><i className="fa fa-briefcase"></i> Job related documents<br />(downloadable)</h5>
                    <ul>
                        <li><a href="/documents/Resume.pdf" alt="Darshil resume" download>Resume</a>
                        </li>
                        <li><a href="/documents/reference_letter.pdf" alt="Reference letter" download>Reference letter</a>
                        </li>
                    </ul>
                </div>
            </Col>
        </Row>
    );
};

export default Skillsdocuments;