import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

import SingIn from "../pages/SingIn"
import SingUp from "../pages/SingUp"
import Today from "../pages/Today"
import Habits from "../pages/Habits"
import History from "../pages/History"
import LoggedContext from "../providers/LoggedContext"
import CheckedHabitsValue from "../providers/CheckedHabitsValue"
export default function Router() {
	const [loggedData, setLoggedData] = useState({})
	const [checkedHabitsValue, setCheckedHabitsValue] = useState(0)
	console.log(checkedHabitsValue)
	return (
		<LoggedContext.Provider value={{ loggedData, setLoggedData }}>
			<CheckedHabitsValue.Provider
				value={{ checkedHabitsValue, setCheckedHabitsValue }}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<SingIn />} />
						<Route path="/singup" element={<SingUp />} />
						<Route path="/today" element={<Today />} />
						<Route path="/habits" element={<Habits />} />
						<Route path="/history" element={<History />} />
					</Routes>
				</BrowserRouter>
			</CheckedHabitsValue.Provider>
		</LoggedContext.Provider>
	)
}
