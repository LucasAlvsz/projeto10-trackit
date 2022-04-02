import Routes from "./routes"
import { useState } from "react"

import "reset-css"
import GlobalStyle from "./styles/GlobalStyle"

import CheckedHabitsValue from "./providers/CheckedHabitsValue"

export default function App() {
	const [checkedHabitsValue, setCheckedHabitsValue] = useState(0)
	console.log(checkedHabitsValue)
	return (
		<CheckedHabitsValue.Provider
			value={{ checkedHabitsValue, setCheckedHabitsValue }}>
			<GlobalStyle />
			<Routes />
		</CheckedHabitsValue.Provider>
	)
}
