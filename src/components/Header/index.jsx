import { useContext } from "react"

import * as S from "./styles"
import { ReactComponent as LogoHeader } from "../../assets/imgs/logo-header.svg"
import { ReactComponent as TrackItLoader } from "../../assets/imgs/trackit-loader.svg"

import LoggedContext from "../../contexts/LoggedContext"

export default function Header({ isLoading }) {
	const {
		loggedData: { image },
	} = useContext(LoggedContext)

	return (
		<S.Header>
			{isLoading ? (
				<TrackItLoader className="loading" />
			) : (
				<LogoHeader className="loading" />
			)}

			<S.ProfilePic src={image} />
		</S.Header>
	)
}
