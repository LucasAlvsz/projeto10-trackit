import { ReactComponent as DeleteHabitButton } from "../../assets/imgs/delete.svg"
import * as S from "./styles"

export default function MyHabit() {
	return (
		<S.MyHabit>
			<h1>Ler 1 capítulo de livro</h1>
			<div className="daysWeek">
				<div className="day">D</div>
				<div className="day">S</div>
				<div className="day">T</div>
				<div className="day">Q</div>
				<div className="day">Q</div>
				<div className="day">S</div>
				<div className="day">S</div>
			</div>
			<button>
				<DeleteHabitButton />
			</button>
		</S.MyHabit>
	)
}
