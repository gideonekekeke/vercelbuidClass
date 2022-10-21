import React from "react";
import styled from "styled-components";
import bgImg from "./assets/3.png";
const HeroComp = () => {
	return (
		<Container>
			<Text>
				NEXT <span>.ts</span> <Conf>CONF</Conf>
			</Text>
			<BgMainImage src={bgImg} />
		</Container>
	);
};

export default HeroComp;

const BgMainImage = styled.img`
	height: 300px;
	width: 900px;

	object-fit: cover;
`;

const Conf = styled.div`
	margin-left: 30px;
	border-top: 2px solid black;
	border-bottom: 2px solid black;
	padding: 5px 0px;
	align-self: center;
	font-size: 20px;
`;

const Container = styled.div`
	height: 400px;
	flex-direction: column;
	width: 100%;
	box-shadow: 0px 40px 40px rgba(224, 226, 227, 1);

	background-repeat: no-repeat;
	background-position: center;
	background-color: #e0e2e3;

	/* box-shadow: 0 40px 40px rgba(224, 226, 227, 1); */

	/* background-size: contain; */

	display: flex;
	justify-content: center;
	align-items: center;
`;
const Text = styled.div`
	margin-top: 20px;
	font-size: 50px;
	display: flex;
	font-weight: bold;

	align-items: center;
	height: 100px;
	position: relative;
	/* background-color: blue; */

	span {
		font-size: 15px;
		align-self: normal;
		position: absolute;
		bottom: 28%;
		right: 0;
		left: 62%;
		/* background-color: red; */
	}
`;
