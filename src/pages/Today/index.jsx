import Header from "../../components/Header"
import Menu from "../../components/Menu"
import TodayHabit from "../../components/TodayHabit"
import * as S from "./styles"

export default function Today() {
	return (
		<>
			<Header />
			<S.Today>
				<h1>Segunda, 17/05</h1>
				<h3>Nenhum hábito concluído ainda</h3>
				<div className="habitsContainer">
					<TodayHabit />
					<TodayHabit />
				</div>
			</S.Today>
			<Menu />
		</>
	)
}
