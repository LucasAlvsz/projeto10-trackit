import Header from "../../components/Header"
import Menu from "../../components/Menu"
import MyHabit from "../../components/MyHabit"

import { ReactComponent as CreateHabitButton } from "../../assets/imgs/plus.svg"
import * as S from "./styles"

export default function Habits() {
	return (
		<>
			<Header />
			<S.Habits>
				<div className="createHabit">
					<h1>Meus hábitos</h1>
					<button>
						<CreateHabitButton />
					</button>
				</div>
				<S.CreateHabitForm>
					<input type="text" placeholder="Nome do hábito" />
					<div className="daysWeek">
						<div className="day">D</div>
						<div className="day">S</div>
						<div className="day">T</div>
						<div className="day">Q</div>
						<div className="day">Q</div>
						<div className="day">S</div>
						<div className="day">S</div>
					</div>
					<div className="buttons">
						<button>Cancelar</button>
						<button>Salvar</button>
					</div>
				</S.CreateHabitForm>
				<h3>
					Você não tem nenhum hábito cadastrado ainda. Adicione um
					hábito para começar a trackear!
				</h3>
				<MyHabit />
			</S.Habits>
			<Menu />
		</>
	)
}
