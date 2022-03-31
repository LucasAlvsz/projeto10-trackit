import * as S from "./styles"
import { ReactComponent as HabitButton } from "../../assets/imgs/Vector.svg"
export default function Habit() {
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
				<HabitButton />
			</button>
		</S.Habit>
	)
}
