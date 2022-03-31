import { BrowserRouter, Routes, Route } from "react-router-dom"

import SingIn from "../pages/SingIn"
import SingUp from "../pages/SingUp"
import Today from "../pages/Today"
import Habits from "../pages/Habits"

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SingIn />} />
				<Route path="/singup" element={<SingUp />} />
				<Route path="/today" element={<Today />} />
				<Route path="/habits" element={<Habits />} />
			</Routes>
		</BrowserRouter>
	)
}
