import { Navbar, Nav,  Container, } from "react-bootstrap";

function NavBar({ searchHandler }) {
	return (
		<Navbar bg="dark" expand="lg" variant="dark">
			<Container>
				<a href="#" className="navbar-brand text-white" style={{fontSize: "25px"}}>
					Crypto-currency
				</a >
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					
					<Nav className="ms-auto">
						<form className="d-flex">
							<input 
								className="form-control me-2" 
								type="search" 
								placeholder="Search" 
								aria-label="Search"
								onChange={(e) => searchHandler(e.target.value.toLowerCase())}
							/>
						</form>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
