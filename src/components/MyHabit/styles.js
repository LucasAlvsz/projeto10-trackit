import styled from "styled-components"

export const MyHabit = styled.div`
	width: 100%;
	height: 91px;
	position: relative;
	display: flex;
	flex-direction: column;
	background: #ffffff;
	border-radius: 5px;
	padding: 13px 15px;
	margin-bottom: 10px;
	h1 {
		font-size: 19.976px;
		line-height: 25px;
		color: #666666;
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
		.selected {
			color: #fff;
			background: #cfcfcf;
		}
	}
	button {
		position: absolute;
		top: 11px;
		right: 10px;
		background: transparent;
	}
`
