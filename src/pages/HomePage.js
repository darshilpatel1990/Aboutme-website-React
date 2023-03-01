import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
import Introduction from "../features/Homepageitems/Introduction";
import Services from "../features/Homepageitems/Services";
import './Home.css';

const HomePage = () => {
    return (
        <Container>
            {/* <SubHeader current='Home' /> */}
            <Introduction />
            <Services />
        </Container>
    );
};

export default HomePage;