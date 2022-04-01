import axios from "axios"
import { useState, useEffect, useContext } from "react"

import Header from "../../components/Header"
import Menu from "../../components/Menu"
import MyHabit from "../../components/MyHabit"
import LoggedContext from "../../providers/LoggedContext"

import { ReactComponent as CreateHabitButton } from "../../assets/imgs/plus.svg"
import * as S from "./styles"

export default function Habits() {
	const {
		loggedData: { token },
	} = useContext(LoggedContext)
	const days = ["D", "S", "T", "Q", "Q", "S", "S"]
	const [createHabitData, setCreateHabitData] = useState({
		status: false,
		name: "",
		days: [],
	})
	console.log(createHabitData)
	useEffect(() => {
		axios
			.get(
				"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then(({ data }) => {
				console.log(data)
			})
			.catch(({ response }) => {
				console.log(response)
			})
	}, [])

	return (
		<>
			<Header />
			<S.Habits>
				<div className="createHabit">
					<h1>Meus hábitos</h1>
					<button
						onClick={
							() =>
								setCreateHabitData({
									...createHabitData,
									status: !createHabitData.status,
								}) // do a animation here
						}>
						<CreateHabitButton />
					</button>
				</div>
				{createHabitData.status ? (
					<S.CreateHabitForm>
						<input
							required
							type="text"
							placeholder="Nome do hábito"
						/>
						<div className="daysWeek">
							{days.map((day, id) => (
								<div
									className={`day ${
										createHabitData.days.includes(id)
											? "selected"
											: ""
									}`}
									key={id}
									onClick={() => {
										createHabitData.days.includes(id)
											? setCreateHabitData({
													...createHabitData,
													days: createHabitData.days.filter(
														day => day !== id
													),
											  })
											: setCreateHabitData({
													...createHabitData,
													days: [
														...createHabitData.days,
														id,
													],
											  })
									}}>
									{day}
								</div>
							))}
						</div>
						<div className="buttons">
							<button>Cancelar</button>
							<button>Salvar</button>
						</div>
					</S.CreateHabitForm>
				) : (
					""
				)}

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
