import styled from "styled-components"

export const Today = styled.main`
	width: 100%;
	height: calc(100vh - 140px);
	display: flex;
	flex-direction: column;
	font-family: "Lexend Deca";
	background-color: #e5e5e5;
	margin-top: 70px;
	padding: 28px 18px;
	h1 {
		font-size: 22.976px;
		line-height: 29px;
		color: #126ba5;
	}
	h3 {
		font-size: 17.976px;
		line-height: 22px;
		color: ${props => (props.checkHabits > 0 ? "#8FC549" : "#BABABA")};
	}
	.habitsContainer {
		margin-top: 28px;
	}
`
