import { BrowserRouter, Routes, Route } from "react-router-dom"

import SingIn from "../pages/SingIn"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SingIn />} />
            </Routes>
        </BrowserRouter>
    )
}