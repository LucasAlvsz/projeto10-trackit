import axios from "axios"
import { useState, useEffect, useContext } from "react"
import dayjs from "dayjs"

import Header from "../../components/Header"
import Menu from "../../components/Menu"
import TodayHabit from "../../components/TodayHabit"
import LoggedContext from "../../providers/LoggedContext"
import CheckedHabitsValue from "../../providers/CheckedHabitsValue"

import * as S from "./styles"

export default function Today() {
	require("dayjs/locale/pt-br")
	dayjs.locale("pt-br")
	let todayDate = dayjs().format("dddd, DD/MM").replace("-feira", "")
	todayDate = todayDate[0].toUpperCase() + todayDate.slice(1)
	const {
		loggedData: { token },
	} = useContext(LoggedContext)
	const checkedHabitsValueUpdate = useContext(CheckedHabitsValue)
	const [todayHabits, setTodayHabits] = useState([])
	const [checkHabits, setCheckHabits] = useState(0)
	const [isLoading, setIsLoading] = useState(true)
	console.log(checkedHabitsValueUpdate, "today")

	checkHabits > 0
		? checkedHabitsValueUpdate.setCheckedHabitsValue(
				(checkHabits / todayHabits.length) * 100
		  )
		: checkedHabitsValueUpdate.setCheckedHabitsValue(0)

	useEffect(() => {
		axios
			.get(
				"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then(({ data }) => {
				setTodayHabits(data)
				data.map(habit => {
					if (habit.done) setCheckHabits(checkHabits + 1)
				})
				setTimeout(() => setIsLoading(false), 500)
			})
			.catch(({ response }) => {
				console.log(response)
				setTimeout(() => setIsLoading(false), 500)
			})
	}, [])

	function checkHabit(id, done) {
		if (!done) {
			axios
				.post(
					`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
					"",
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				)
				.then(() => {
					let updateHabits = todayHabits.map(habit => {
						if (habit.id === id) {
							habit.done = !habit.done
							habit.currentSequence++
							if (habit.currentSequence > habit.highestSequence)
								habit.highestSequence = habit.currentSequence
						}
						return habit
					})
					setTodayHabits(updateHabits)
					setCheckHabits(checkHabits + 1)
					console.log("Habit checked")
				})
				.catch(({ response }) => {
					console.log(response, "erro")
				})
		} else {
			axios
				.post(
					`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
					"",
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				)
				.then(() => {
					let updateHabits = todayHabits.map(habit => {
						if (habit.id === id) {
							habit.done = !habit.done
							habit.currentSequence--
							habit.highestSequence--
							if (habit.currentSequence < 0)
								habit.currentSequence = 0
						}
						return habit
					})
					setTodayHabits(updateHabits)
					setCheckHabits(checkHabits - 1)
					console.log("Habit unchecked")
				})
				.catch(({ response }) => {
					console.log(response, "erro")
				})
		}
	}

	return (
		<>
			<Header isLoading={isLoading} />
			<S.Today>
				<h1>{todayDate}</h1>
				{checkHabits > 0 ? (
					<h3>
						{(checkHabits / todayHabits.length) * 100}% dos hábitos
						concluídos
					</h3>
				) : isLoading ? (
					""
				) : (
					<h3>Nenhum hábito concluído ainda</h3>
				)}

				<div className="habitsContainer">
					{
						todayHabits && !isLoading
							? todayHabits.map(habit => (
									<TodayHabit
										key={habit.id}
										habitData={habit}
										checkHabit={checkHabit}
									/>
							  ))
							: "" //adcione um loading
					}
				</div>
			</S.Today>
			<Menu isLoading={isLoading} />
		</>
	)
}
