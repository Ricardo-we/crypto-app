import { Navbar, Nav, Button, Container, InputGroup, FormControl } from "react-bootstrap";
import { useState } from "react";
import { searchSimilars } from "../utils/get-api-data";

function NavBar({ allCryptos }) {
	const [searchValue, setSearchValue] = useState("");	
	
	const showOnlySimilars = (e) => {
		e.preventDefault();
		let searchResults = searchSimilars(searchValue, allCryptos);
		let founded = allCryptos.forEach(id => document.getElementById(id).classList.add('d-none'))
		console.log(founded)
		if (founded === undefined) document.getElementById('not-found-modal').classList.remove('d-none')
		else document.getElementById('not-found-modal').classList.add('d-none')
		searchResults.forEach(item => document.getElementById(item).classList.remove('d-none'))
	}

	const showAllCryptos = (e) => {
		e.preventDefault();
		allCryptos.forEach(id => document.getElementById(id).classList.remove('d-none'))
	}

	return (
		<Navbar bg="secondary" expand="lg">
			<Container>
				<a href="#" className="navbar-brand" style={{fontSize: "25px"}}>
					Crypto-currency
				</a >
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					
					<Nav className="ms-auto">
						<form className="d-flex">
							<input 
								value={searchValue}
								className="form-control me-2" 
								type="search" 
								placeholder="Search" 
								aria-label="Search"
								onChange={(e) => {
									setSearchValue(e.target.value)
									if(searchValue === '') showAllCryptos();
								}}
							/>
							<button className="btn btn-outline-primary" type="submit" 
								onClick={(e) => searchValue ? showOnlySimilars(e) : showAllCryptos(e)}
							>
								Search
							</button>
						</form>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
