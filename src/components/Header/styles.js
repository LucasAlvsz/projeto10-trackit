import styled from "styled-components"

export const Header = styled.header`
	width: 100%;
	height: 70px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	padding: 0 18px;
	background-color: #126ba5;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
	&img {
		width: 97px;
		height: 49px;
	}
`

export const ProfilePic = styled.img`
	width: 51px;
	height: 51px;
	border-radius: 50%;
	background-image: url(${(props) => props.src});
	background-size: cover;
`
