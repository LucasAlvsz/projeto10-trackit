import Header from "../../components/Header"
import Menu from "../../components/Menu"
import Habit from "../../components/Habit"
import * as S from "./styles"

export default function Today() {
	return (
		<>
			<Header />
			<S.Today>
				<h1>Segunda, 17/05</h1>
				<h3>Nenhum hábito concluído ainda</h3>
				<div className="habitsContainer">
					<Habit />
					<Habit />
				</div>
			</S.Today>
			<Menu />
		</>
	)
}
