import { CircularProgressbar } from "react-circular-progressbar"

import * as S from "./styles"
import "react-circular-progressbar/dist/styles.css"

export default function Menu() {
	return (
		<S.Menu>
			<S.Option>Hábitos</S.Option>
			<S.Progress>
				<S.Option>Hoje</S.Option>
				<CircularProgressbar value={66} />
			</S.Progress>
			<S.Option>Histórico</S.Option>
		</S.Menu>
	)
}
