import { useState } from 'react';
import { 
    Navbar, 
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav, 
    NavItem,
    Row,
    Col
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Whitelogo from '../app/assets/img/Whitelogo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar light color='primary' className='jumbotron' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                <Row>
                    <Col>
                        <img src={Whitelogo} alt='logo' id='Logo' className='img-fluid' />
                    </Col>
                    <Col>
                        <h1 className='mt-3'>Darshil Patel</h1>
                    </Col>
                </Row>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav id='dpNavbar' className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/skills'>
                            Skills
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/funfacts'>
                            Funfacts
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                            Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;