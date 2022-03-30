import styled from "styled-components"

export const SingUp = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 68px;

	img {
		width: 180px;
		height: 180px;
		margin-bottom: 32px;
	}

	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	input {
		width: 303px;
		height: 45px;
		background: #ffffff;
		border: 1px solid #d5d5d5;
		border-radius: 5px;
		margin-bottom: 6px;
		font-weight: 400;
		font-size: 20px;
		line-height: 25px;
		padding-left: 11px;
		color: darkGray;

		&::placeholder {
			color: #dbdbdb;
		}

		&.disabled {
			background: #f2f2f2;
		}
	}

	button {
		width: 303px;
		height: 45px;
		background: #52b6ff;
		border: none;
		border-radius: 5px;
		font-weight: 400;
		font-size: 20.976px;
		line-height: 26px;
		text-align: center;
		color: #ffffff;
	}

	.disabled {
		opacity: 0.7;
		pointer-events: none;
	}

	p {
		font-family: "Lexend Deca";
		font-weight: 400;
		font-size: 13.976px;
		line-height: 17px;
		text-align: center;
		text-decoration-line: underline;
		color: #52b6ff;
		margin-top: 25px;
	}
	object {
		width: 200px;
		height: 45px;
	}
`
