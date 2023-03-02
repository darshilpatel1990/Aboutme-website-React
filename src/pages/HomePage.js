import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
import Introduction from "../features/Homepageitems/Introduction";
import Projects from "../features/Homepageitems/Projects";
import Services from "../features/Homepageitems/Services";
import './HomePage.css';

const HomePage = () => {
    return (
        <Container>
            {/* <SubHeader current='Home' /> */}
            <Introduction />
            <Services />
            <Projects />
        </Container>
    );
};

export default HomePage;