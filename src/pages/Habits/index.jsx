import axios from "axios"
import { useState, useEffect, useContext } from "react"

import Header from "../../components/Header"
import Menu from "../../components/Menu"
import MyHabit from "../../components/MyHabit"
import LoggedContext from "../../providers/LoggedContext"

import { ReactComponent as CreateHabitButton } from "../../assets/imgs/plus.svg"
import loading from "../../assets/imgs/loading.svg"
import * as S from "./styles"

export default function Habits() {
	const {
		loggedData: { token },
	} = useContext(LoggedContext)
	const days = ["D", "S", "T", "Q", "Q", "S", "S"]
	const [habits, setHabits] = useState([])
	const [createHabitData, setCreateHabitData] = useState({
		status: false,
		name: "",
		days: [],
	})
	const [isLoading, setIsLoading] = useState(false)
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
				setHabits(data)
			})
			.catch(({ response }) => {
				console.log(response)
			})
	}, [])
	function createHabit(e) {
		e.preventDefault()
		console.log(createHabitData)
		if (createHabitData.days.length === 0) {
		} else {
			setIsLoading(true)
			axios
				.post(
					"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
					{
						name: createHabitData.name,
						days: createHabitData.days,
					},
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				)
				.then(({ data }) => {
					console.log(data)
					setCreateHabitData({ ...createHabitData, status: false })
					setHabits([...habits, data])
					setIsLoading(false)
				})
				.catch(({ response }) => {
					console.log(response)
					setIsLoading(false)
				})
		}
	}
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
					<S.CreateHabitForm
						onSubmit={createHabit}
						isLoading={isLoading}>
						<input
							required
							type="text"
							placeholder="Nome do hábito"
							onChange={e =>
								setCreateHabitData({
									...createHabitData,
									name: e.target.value,
								})
							}
						/>
						<div className="daysWeek">
							{console.log(createHabitData.days)}
							<input
								// required
								type="checkbox"
								// onInvalid={e =>
								// 	e.target.setCustomValidity(
								// 		"Selecione pelo menos um dia da semana"
								// 	)
								// }
								// onInput={e => e.target.setCustomValidity("")}
							/>
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
							<button
								onClick={() =>
									setCreateHabitData({
										...createHabitData,
										status: false,
									})
								}>
								Cancelar
							</button>
							<button type="submit">Salvar</button>
						</div>
					</S.CreateHabitForm>
				) : (
					""
				)}

				{habits.length > 0 ? (
					habits.map(habit => <MyHabit habitData={habit} />)
				) : (
					<h3>
						Você não tem nenhum hábito cadastrado ainda. Adicione um
						hábito para começar a trackear!
					</h3>
				)}
			</S.Habits>
			<Menu />
		</>
	)
}
