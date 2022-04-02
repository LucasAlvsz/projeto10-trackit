import axios from "axios"
import { useState, useEffect, useContext } from "react"
import dayjs from "dayjs"

import Header from "../../components/Header"
import Menu from "../../components/Menu"
import TodayHabit from "../../components/TodayHabit"
import LoggedContext from "../../providers/LoggedContext"

import * as S from "./styles"

export default function Today() {
	require("dayjs/locale/pt-br")
	dayjs.locale("pt-br")
	let todayDate = dayjs().format("dddd, DD/MM").replace("-feira", "")
	todayDate = todayDate[0].toUpperCase() + todayDate.slice(1)
	const {
		loggedData: { token },
	} = useContext(LoggedContext)
	const [todayHabits, setTodayHabits] = useState([])

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
				console.log(data)
				setTodayHabits(data)
			})
			.catch(({ response }) => {
				console.log(response)
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
					console.log("Habit unchecked")
				})
				.catch(({ response }) => {
					console.log(response, "erro")
				})
		}
	}

	return (
		<>
			<Header />
			<S.Today>
				<h1>{todayDate}</h1>
				<h3>Nenhum hábito concluído ainda</h3>
				<div className="habitsContainer">
					{
						todayHabits
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
			<Menu />
		</>
	)
}
