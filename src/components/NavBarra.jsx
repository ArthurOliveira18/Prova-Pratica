import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBarra = () => {
  return (
    <div>

        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="/show">Supermercado</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                
                <Nav.Link href="/cadastro">Cadastrar produtos</Nav.Link>
                <Nav.Link href="/show">Vizualizar produtos</Nav.Link>
            
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

    </div>
  )
}

export default NavBarra