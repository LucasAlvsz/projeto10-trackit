import { Link } from "react-router-dom"
import { CircularProgressbar } from "react-circular-progressbar"

import * as S from "./styles"
import "react-circular-progressbar/dist/styles.css"

export default function Menu() {
	return (
		<S.Menu>
			<Link to="/habits">
				<S.Option>Hábitos</S.Option>
			</Link>
			<S.Progress>
				<S.Option>Hoje</S.Option>
				<CircularProgressbar value={66} />
			</S.Progress>
			<Link to="/history">
				<S.Option>Histórico</S.Option>
			</Link>
		</S.Menu>
	)
}
