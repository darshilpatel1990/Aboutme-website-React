import { Container } from "reactstrap";
import Skillsoverview from "../features/Skillspageitems/Skillsoverview";
import Skillstable from "../features/Skillspageitems/Skillstable";
import Skillsdocuments from "../features/Skillspageitems/Skillsdocuments";
import './SkillsPage.css';

const Skillspage = () => {
    return (
        <Container>
            <Skillsoverview />
            <Skillstable />
            <Skillsdocuments />
        </Container>
    );
};

export default Skillspage;