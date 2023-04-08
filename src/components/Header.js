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
import { NavLink, Link } from 'react-router-dom';
import Whitelogo from '../app/assets/img/Whitelogo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar light id='navbar' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                <Row>
                    <Col>
                        <Link to='/'><img src={Whitelogo} alt='logo' id='Logo' className='float-start' />
                        </Link>
                    </Col>
                    <Col>
                        <h1 className='mt-3'><Link to='/' id='nameHeader'>Darshil Patel</Link></h1>
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