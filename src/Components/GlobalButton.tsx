import React from "react";
import styled from "styled-components";
import { BsFillTriangleFill } from "react-icons/bs";

interface Iprops {
	icon: any;
	btnText: string;
	bg: string;
	col: string;
}

const GlobalButton: React.FC<Iprops> = ({ btnText, icon, bg, col }) => {
	return (
		<Button cols={col} bgs={bg}>
			<Icn>{icon}</Icn>
			{btnText}
		</Button>
	);
};

export default GlobalButton;

const Icn = styled.div`
	margin-right: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Button = styled.div<{ bgs: string; cols: string }>`
	width: 200px;
	height: 45px;
	background-color: ${(myprops) => myprops.bgs};
	color: ${(props) => props.cols};
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	border-radius: 5px;
	margin-left: 20px;
	border: 1px solid black;
	font-weight: bold;
`;
