import { useState } from "react"

import * as S from "./styles"
import logoHeader from "../../assets/imgs/logo-header.svg"
import profilePicTest from "../../assets/imgs/profilePicTest.png"

export default function Header() {
	const [profilePic, setProfilePic] = useState(profilePicTest)
	return (
		<S.Header>
			<img src={logoHeader} alt="logoHeader" />
			<S.ProfilePic src={profilePic} />
		</S.Header>
	)
}
