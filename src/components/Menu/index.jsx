import { Link } from "react-router-dom"
import { useContext } from "react"
import { CircularProgressbar } from "react-circular-progressbar"

import * as S from "./styles"
import "react-circular-progressbar/dist/styles.css"

import CheckedHabitsValue from "../../providers/CheckedHabitsValue"

export default function Menu() {
	const { checkedHabitsValue } = useContext(CheckedHabitsValue)
	return (
		<S.Menu>
			<Link to="/habits">
				<S.Option>Hábitos</S.Option>
			</Link>
			<Link to="/today">
				<S.Progress>
					<S.Option>Hoje</S.Option>
					<CircularProgressbar value={checkedHabitsValue} />
				</S.Progress>
			</Link>
			<Link to="/history">
				<S.Option>Histórico</S.Option>
			</Link>
		</S.Menu>
	)
}
