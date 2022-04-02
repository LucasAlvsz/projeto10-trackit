import { useContext } from "react"

import * as S from "./styles"
import logoHeader from "../../assets/imgs/logo-header.svg"

import LoggedContext from "../../providers/LoggedContext"

export default function Header() {
	const {
		loggedData: { image },
	} = useContext(LoggedContext)
	return (
		<S.Header>
			<img src={logoHeader} alt="logoHeader" />
			<S.ProfilePic src={image} />
		</S.Header>
	)
}
