import styled from "styled-components"

export const Menu = styled.footer`
	width: 100%;
	height: 70px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: fixed;
	bottom: 0;
	left: 0;
	background-color: #fff;
	pointer-events: ${props => (props.isLoading ? "none" : "auto")};
	cursor: ${props => (props.isLoading ? "default" : "pointer")};
`

export const Option = styled.p`
	font-family: "Lexend Deca";
	font-style: normal;
	font-weight: 400;
	font-size: 17.976px;
	line-height: 22px;
	color: #52b6ff;
	cursor: pointer;
`
export const Progress = styled.div`
	width: 91px;
	height: 91px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 40px;
	border-radius: 50%;
	background: #52b6ff;
	padding: 6px;
	${Option} {
		position: absolute;
		color: #fff;
	}
	.CircularProgressbar-path {
		stroke: #fff;
	}
	.CircularProgressbar-trail {
		stroke: #52b6ff;
	}
`

export const ProgressBar = styled.div`
	width: 4px;
	height: 88px;
`
