import axios from "axios"
import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"

import Header from "../../components/Header"
import Menu from "../../components/Menu"
import MyHabit from "../../components/MyHabit"
import LoggedContext from "../../contexts/LoggedContext"

import * as S from "./styles"
import { ReactComponent as CreateHabitButton } from "../../assets/imgs/plus.svg"
import ThreeDotsLoading from "../../components/Loading"

export default function Habits() {
	const navigate = useNavigate()
	const { loggedData } = useContext(LoggedContext)
	if (loggedData === "userOff") navigate("/")
	const { token } = loggedData
	const days = ["D", "S", "T", "Q", "Q", "S", "S"]
	const [habits, setHabits] = useState([])
	const [createHabitData, setCreateHabitData] = useState({
		status: false,
		name: "",
		days: [],
	})
	const [isLoading, setIsLoading] = useState(true)

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
				setHabits(data)
				setTimeout(() => setIsLoading(false), 500)
			})
			.catch(({ response }) => {
				console.log(response)
				setTimeout(() => setIsLoading(false), 500)
			})
	}, [loggedData])
	function createHabit(e) {
		e.preventDefault()
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
					setCreateHabitData({
						status: false,
						name: "",
						days: [],
					})
					setHabits([...habits, data])
					setIsLoading(false)
				})
				.catch(({ response }) => {
					console.log(response)
					setIsLoading(false)
				})
		}
	}
	function deleteHabit(id) {
		if (window.confirm("Deseja realmente excluir?")) {
			axios
				.delete(
					`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				)
				.then(({ data }) => {
					setHabits(habits.filter(habit => habit.id !== id))
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
			<Header isLoading={isLoading} />
			<S.Habits isLoading={isLoading}>
				<div className="createHabit">
					<h1>Meus hábitos</h1>
					<button
						disabled={isLoading}
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
							value={createHabitData.name}
							onChange={e => {
								setCreateHabitData({
									...createHabitData,
									name: e.target.value,
								})
							}}
						/>
						<div className="daysWeek">
							<input
								required
								name="validation"
								type="text"
								defaultValue={
									createHabitData.days.length > 0
										? "value"
										: ""
								}
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
							<button type="submit">
								{isLoading ? <ThreeDotsLoading /> : "Salvar"}
							</button>
						</div>
					</S.CreateHabitForm>
				) : (
					""
				)}

				{habits.length > 0 && !isLoading ? (
					habits.map(habit => (
						<MyHabit
							habitData={habit}
							deleteHabit={deleteHabit}
							key={habit.id}
						/>
					))
				) : isLoading ? (
					""
				) : (
					<h3>
						Você não tem nenhum hábito cadastrado ainda. Adicione um
						hábito para começar a trackear!
					</h3>
				)}
			</S.Habits>
			<Menu isLoading={isLoading} />
		</>
	)
}
