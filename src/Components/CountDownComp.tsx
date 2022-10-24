import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CountDownComp: React.FC = () => {
	const [days, setDays] = useState<number>(0);
	const [hours, setHours] = useState<number>(0);
	const [minutes, setMinutes] = useState<number>(0);
	const [seconds, setSeconds] = useState<number>(0);

	useEffect(() => {
		const target = new Date("4, may 2023").getTime();

		const interval = setInterval(() => {
			const now = new Date();
			const differance = target - now.getTime();

			// console.log(differance);

			const d = Math.floor(differance / (1000 * 60 * 60 * 24));
			setDays(d);

			const h = Math.floor(
				(differance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
			);
			setHours(h);
			const m = Math.floor((differance % (1000 * 60 * 60)) / (1000 * 60 * 60));
			setMinutes(m);
			const s = Math.floor((differance % (1000 * 60)) / 1000);
			setSeconds(s);
		}, 1000);
	}, []);

	return (
		<Container>
			<Div1>An online experience developers love • October 25, 2022</Div1>
			<Div2>
				<DaysDiv>
					<MyDay>{days}</MyDay> <span>Days</span>
				</DaysDiv>
				<DaysDiv>
					<MyDay>{hours} :</MyDay> <span>Hours</span>
				</DaysDiv>
				<DaysDiv>
					<MyDay>{minutes} :</MyDay> <span>Minute</span>
				</DaysDiv>
				<DaysDiv>
					<MyDay>{seconds} </MyDay> <span>Seconds</span>
				</DaysDiv>
			</Div2>
			<Div3>Register Now</Div3>
		</Container>
	);
};

export default CountDownComp;

const DaysDiv = styled.div`
	span {
		color: gray;
	}
`;
const MyDay = styled.div`
	font-size: 40px;
	font-weight: bold;
	margin-right: 20px;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 10px;
	margin-bottom: 40px;
`;
const Div1 = styled.pre`
	font-size: 20px;
`;
const Div2 = styled.div`
	display: flex;
	align-items: center;
`;
const Div3 = styled.div`
	height: 45px;
	width: 150px;
	box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	margin-top: 40px;
	transition: all 350ms;
	border: 1px solid gray;
	cursor: pointer;
	:hover {
		transform: scale(0.9);
	}
`;

// import React from "react";
// import styled from "styled-components";
// const CountDownComp: React.FC = () => {
// 	return (
// 		<Container>
// 			<Div1>An online experience developers love • October 25, 2022</Div1>
// 			<Div2>
// 				<DaysDiv>
// 					<MyDay>05 :</MyDay> <span>Days</span>
// 				</DaysDiv>
// 				<DaysDiv>
// 					<MyDay>05 :</MyDay> <span>Days</span>
// 				</DaysDiv>
// 				<DaysDiv>
// 					<MyDay>05 :</MyDay> <span>Days</span>
// 				</DaysDiv>
// 				<DaysDiv>
// 					<MyDay>05 </MyDay> <span>Days</span>
// 				</DaysDiv>
// 			</Div2>
// 			<Div3>Register Now</Div3>
// 		</Container>
// 	);
// };

// export default CountDownComp;

// const DaysDiv = styled.div`
// 	span {
// 		color: gray;
// 	}
// `;
// const MyDay = styled.div`
// 	font-size: 40px;
// 	font-weight: bold;
// 	margin-right: 20px;
// `;

// const Container = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	flex-direction: column;
// 	margin-top: 10px;
// 	margin-bottom: 40px;
// `;
// const Div1 = styled.pre`
// 	font-size: 20px;
// `;
// const Div2 = styled.div`
// 	display: flex;
// 	align-items: center;
// `;
// const Div3 = styled.div`
// 	height: 45px;
// 	width: 150px;
// 	box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	border-radius: 20px;
// 	margin-top: 40px;
// 	transition: all 350ms;
// 	border: 1px solid gray;
// 	cursor: pointer;
// 	:hover {
// 		transform: scale(0.9);
// 	}
// `;
