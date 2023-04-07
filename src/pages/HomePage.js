import { Container } from "reactstrap";
import Introduction from "../features/Homepageitems/Introduction";
import Projects from "../features/Homepageitems/Projects";
import Services from "../features/Homepageitems/Services";
import './HomePage.css';

const HomePage = () => {
    return (
        <Container>
            <Introduction />
            <Services />
            <Projects />
        </Container>
    );
};

export default HomePage;