import { ReactComponent as DeleteHabitButton } from "../../assets/imgs/delete.svg"
import * as S from "./styles"

export default function MyHabit({ habitData: { name, days } }) {
	return (
		<S.MyHabit>
			<h1>{name}</h1>
			<div className="daysWeek">
				{days.map((day, index) =><div className="day">D</div>)
				
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
