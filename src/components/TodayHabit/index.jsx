import * as S from "./styles"
import { ReactComponent as HabitCheckButton } from "../../assets/imgs/check.svg"
export default function TodayHabit() {
	return (
		<S.Habit>
			<div className="Infos">
				<h1>Ler 1 capítulo de livro</h1>
				<div className="steakInfos">
					<p>Sequência atual: 3 dias</p>
					<p>Seu recorde: 5 dias</p>
				</div>
			</div>
			<button>
				<HabitCheckButton />
			</button>
		</S.Habit>
	)
}
