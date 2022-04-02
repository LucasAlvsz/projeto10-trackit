import { ReactComponent as DeleteHabitButton } from "../../assets/imgs/delete.svg"
import * as S from "./styles"

export default function MyHabit({
	habitData: { name, days, id },
	deleteHabit,
}) {
	const daysList = [
		{ dayName: "D", dayIndex: 0 },
		{ dayName: "S", dayIndex: 1 },
		{ dayName: "T", dayIndex: 2 },
		{ dayName: "Q", dayIndex: 3 },
		{ dayName: "Q", dayIndex: 4 },
		{ dayName: "S", dayIndex: 5 },
		{ dayName: "S", dayIndex: 6 },
	]
	return (
		<S.MyHabit>
			<h1>{name}</h1>
			<div className="daysWeek">
				{daysList.map(({ dayName, dayIndex }, index) => {
					return (
						<div
							key={index}
							className={`day ${
								days.includes(dayIndex) ? "selected" : ""
							}`}>
							{dayName}
						</div>
					)
				})}
			</div>
			<button onClick={() => deleteHabit(id)}>
				<DeleteHabitButton />
			</button>
		</S.MyHabit>
	)
}
