import Routes from "./routes"
import { useState } from "react"
import CheckedHabitsValue from "./providers/CheckedHabitsValue"
import LoggedContext from "./providers/LoggedContext"

import "reset-css"
import GlobalStyle from "./styles/GlobalStyle"

export default function App() {
	const [loggedData, setLoggedData] = useState({})
	const [checkedHabitsValue, setCheckedHabitsValue] = useState(0)
	console.log(checkedHabitsValue)
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
