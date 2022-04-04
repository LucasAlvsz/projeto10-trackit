// import { useState } from "react"
// import Calendar from "react-calendar"

import Header from "../../components/Header"
import Menu from "../../components/Menu"

import * as S from "./styles"
import "react-calendar/dist/Calendar.css"

export default function History() {
	// const [value, onChange] = useState(new Date())
	return (
		<>
			<Header />
			<S.History>
				<h1>Histórico</h1>
				<h3>
					Em breve você poderá ver o histórico dos seus hábitos aqui!
				</h3>
				{/* <div className="calendar-container">
					<Calendar
						onChange={onChange}
						value={value}
						className="calendar"
					/>
				</div> */}
			</S.History>
			<Menu />
		</>
	)
}
