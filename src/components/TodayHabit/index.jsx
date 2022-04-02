import * as S from "./styles"
import { ReactComponent as HabitCheckButton } from "../../assets/imgs/check.svg"
export default function TodayHabit({
	habitData: { id, name, done, currentSequence, highestSequence },
	checkHabit,
}) {
	return (
		<S.Habit
			done={done}
			newRecord={
				currentSequence >= highestSequence && currentSequence > 0
					? true
					: false
			}>
			<div className="Infos">
				<h1>{name}</h1>
				<div className="steakInfos">
					<p>
						Sequência atual:
						<b className="child1"> {currentSequence} dias</b>
					</p>
					<p>
						Seu recorde:
						<b className="child2"> {highestSequence} dias</b>
					</p>
				</div>
			</div>
			<button onClick={() => checkHabit(id, done)}>
				<HabitCheckButton />
			</button>
		</S.Habit>
	)
}
