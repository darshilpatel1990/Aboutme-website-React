import { Container } from "reactstrap";
import Skillsoverview from "../features/Skillspageitems/Skillsoverview";
import Skillstable from "../features/Skillspageitems/Skillstable";
import './SkillsPage.css';

const Skillspage = () => {
    return (
        <Container>
            <Skillsoverview />
            <Skillstable />
        </Container>
    );
};

export default Skillspage;