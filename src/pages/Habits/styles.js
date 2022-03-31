import styled from "styled-components"

export const Habits = styled.main`
	width: 100%;
	height: calc(100vh - 140px);
	display: flex;
	flex-direction: column;
	background-color: #e5e5e5;
	margin-top: 70px;
	padding: 28px 18px;

	font-family: "Lexend Deca";
	font-style: normal;
	font-weight: 400;
	.createHabit {
		display: flex;
		justify-content: space-between;
		h1 {
			font-size: 22.976px;
			line-height: 29px;
			color: #126ba5;
		}
		button {
			width: 40px;
			height: 35px;
			display: flex;
			justify-content: center;
			align-items: center;
			background: #52b6ff;
			border-radius: 5px;
		}
	}
	h3 {
		font-size: 17.976px;
		line-height: 22px;
		color: #666666;
		margin-top: 28px;
	}
`

export const CreateHabitForm = styled.div`
	width: 100%;
	height: 180px;
	display: flex;
	flex-direction: column;
	background: #ffffff;
	border-radius: 5px;
	padding: 18px;
	margin-top: 20px;
	input {
		width: 100%;
		height: 45px;
		border: 1px solid #d5d5d5;
		border-radius: 5px;
		font-size: 19.976px;
		line-height: 25px;
		padding-left: 11px;
		&::placeholder {
			color: #dbdbdb;
		}
	}
	.daysWeek {
		display: flex;
		margin-top: 8px;
		font-size: 19.976px;
		line-height: 25px;
		color: #dbdbdb;
		.day {
			width: 30px;
			height: 30px;
			border: 1px solid #d5d5d5;
			border-radius: 5px;
			text-align: center;
			margin-right: 4px;
		}
	}
	.buttons {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: end;
		align-items: center;
		margin-top: 32px;
		button {
			font-size: 15.976px;
			line-height: 20px;
			&:nth-child(1) {
				width: 69px;
				height: 20px;
				background: transparent;
				color: #52b6ff;
				margin-right: 23px;
			}
			&:nth-child(2) {
				width: 84px;
				height: 35px;
				color: #fff;
				background: #52b6ff;
				border-radius: 5px;
			}
		}
	}
`