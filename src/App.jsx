import Routes from "./routes"
import { useState, useEffect } from "react"

import CheckedHabitsValue from "./providers/CheckedHabitsValue"
import LoggedContext from "./providers/LoggedContext"

import "reset-css"
import GlobalStyle from "./styles/GlobalStyle"

export default function App() {
	const [loggedData, setLoggedData] = useState({})
	const [checkedHabitsValue, setCheckedHabitsValue] = useState(0)
	useEffect(() => {
		if (localStorage.getItem("@trackit/userData")) {
			console.log("tem dados")
			let userData = localStorage.getItem("@trackit/userData")
			userData = JSON.parse(userData)
			const { image, token } = userData
			console.log(token)
			setLoggedData({ image, token })
		}
	}, [])

	return (
		<LoggedContext.Provider value={{ loggedData, setLoggedData }}>
			<CheckedHabitsValue.Provider
				value={{ checkedHabitsValue, setCheckedHabitsValue }}>
				<GlobalStyle />
				<Routes />
			</CheckedHabitsValue.Provider>
		</LoggedContext.Provider>
	)
}
