import React from "react";
import styled from "styled-components";
import GlobalButton from "./GlobalButton";
import { BsFillTriangleFill } from "react-icons/bs";
const Develop: React.FC = () => {
	return (
		<Container>
			<Div1>
				<Dev>Develop.</Dev>
				<Prev>Preview.</Prev>
				<Sh>Ship.</Sh>
			</Div1>
			<Div2>
				Vercel is the platform for frontend developers, providing the speed and
				<br />
				reliability innovators need to create at the moment of inspiration.
			</Div2>
			<Div3>
				<GlobalButton
					bg='black'
					btnText='Start Deploying'
					icon={<BsFillTriangleFill />}
					col='white'
				/>
				<GlobalButton col='black' bg='' icon='' btnText='Get a Demo' />
			</Div3>
		</Container>
	);
};

export default Develop;

const Dev = styled.div`
	/* color: hsl(240, 100%, 50%); */
	background-image: linear-gradient(to right, blue, skyblue);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;
const Prev = styled.div`
	background-image: linear-gradient(to right, purple, #8c3d66);

	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;
const Sh = styled.div`
	background-image: linear-gradient(to right, red, orange);

	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	margin-bottom: 30px;
`;
const Div1 = styled.div`
	display: flex;
	font-size: 90px;
	font-weight: bold;
`;
const Div2 = styled.p`
	font-size: 20px;
	text-align: center;
`;
const Div3 = styled.div`
	display: flex;
`;
