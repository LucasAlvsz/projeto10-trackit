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
	// console.log(todayDate)
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

	return (
		<>
			<Header />
			<S.Today>
				<h1>{todayDate}</h1>
				<h3>Nenhum hábito concluído ainda</h3>
				<div className="habitsContainer">
					<TodayHabit />
					<TodayHabit />
					{todayHabits.map((habit) => (
						<TodayHabit />
					))}
				</div>
			</S.Today>
			<Menu />
		</>
	)
}
