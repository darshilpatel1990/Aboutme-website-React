import { Container } from "reactstrap";
import Hobbies from "../features/Funfactspageitems/Hobbies";
import Myjourney from "../features/Funfactspageitems/Myjourney";
import Photodisplay from "../features/Funfactspageitems/Photodisplay";
import './FunfactsPage.css';

const FunfactsPage = () => {
    return (
        <Container>
            <Myjourney />
            <Photodisplay />
            <Hobbies />
        </Container>
    );
};

export default FunfactsPage;