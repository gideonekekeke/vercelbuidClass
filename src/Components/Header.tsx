import React from "react";
import styled from "styled-components";
import log from "./assets/logo.png";
const Header: React.FC = () => {
	return (
		<Container>
			<Logo src={log} />

			<NavHold>
				<Nav>Features</Nav>
				<Nav>Templates</Nav>
				<Nav>Integration</Nav>
				<Nav>Customers</Nav>
				<Nav>Enterprice</Nav>
				<Nav>Pricing</Nav>
			</NavHold>

			<NavAuth>
				<Nav>Contact</Nav>
				<Nav>Login</Nav>
				<Button>Sign Up</Button>
			</NavAuth>
		</Container>
	);
};

export default Header;

const Container = styled.div`
	height: 70px;
	width: 100%;
	background: #f8f8f9;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;
const Logo = styled.img`
	height: 30px;
	width: 100px;
	object-fit: cover;
`;
const NavHold = styled.div`
	display: flex;
	align-items: center;
`;
const Nav = styled.div`
	margin-left: 18px;
	font-size: 14px;
	color: gray;
	cursor: pointer;
	transition: all 350ms;

	:hover {
		color: black;
	}
`;
const NavAuth = styled.div`
	display: flex;
	align-items: center;
`;
const Button = styled.div`
	margin-left: 18px;

	height: 35px;
	width: 100px;
	background-color: black;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	padding-bottom: 5px;
	cursor: pointer;
	transition: all 350ms;

	:hover {
		background-color: white;
		color: black;
		transition: all 350ms;
		border: 1px solid black;
	}
`;
