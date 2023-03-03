import { Container } from "reactstrap";
import Skillsoverview from "../features/Skillspageitems/Skillsoverview";
import Skillstable from "../features/Skillspageitems/Skillstable";

const Skillspage = () => {
    return (
        <Container>
            <Skillsoverview />
            <Skillstable />
        </Container>
    );
};

export default Skillspage;