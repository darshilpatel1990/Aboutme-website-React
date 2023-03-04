import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="site-footer">
            <Container>
                <Row>
                    <Col xs='3' md='2' className="offset-1">
                        <ul className="list-unstyled">
                            <li className="linkfont">
                                <Link to='/'>Home</Link>
                            </li>
                            <li className="linkfont">
                                <Link to='/skills'>Skills</Link>
                            </li>
                            <li className="linkfont">
                                <Link to='/funfacts'>Funfacts</Link>
                            </li>
                            <li className="linkfont">
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs='5' className="socialicon mt-2 text-center">
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/darshil.patel.332" target="_blank">
                            <i className="fa fa-facebook" />
                        </a>{' '}
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/darshil-patel-7b7611252/" target="_blank">
                            <i className="fa fa-linkedin" />
                        </a>{' '}
                        <a className="btn btn-social-icon btn-github" href="https://github.com/darshilpatel1990" target="_blank">
                            <i className="fa fa-github" />
                        </a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/@darshilpatel23" target="_blank">
                            <i className="fa fa-twitter" />
                        </a>
                    </Col>
                    <Col xs='3' md='4' className="text-center">
                        <a role="button" className="btn btn-link" href="tel:+12042186227" target="_blank" style={{color: "black"}}>
                            <i className="fa fa-phone text-dark" /> Phone
                        </a><br />
                        <a role="button" className="btn btn-link" href="mailto:darshilpatel1990@gmail.com" target="_blank" style={{color: "black"}}>
                            <i className="fa fa-envelope-o text-dark" /> Email
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;