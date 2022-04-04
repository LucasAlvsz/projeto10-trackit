import axios from "axios"
import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { NotificationContainer, NotificationManager } from "react-notifications"

import LoggedContext from "../../providers/LoggedContext"

import * as S from "./styles"
import "react-notifications/lib/notifications.css"
import logo from "../../assets/imgs/logo.svg"
import ThreeDotsLoading from "../../components/Loading"

export default function SingIn() {
	const loggedDataUpdate = useContext(LoggedContext)
	const navigate = useNavigate()
	const [isLoading, setIsLoading] = useState(false)
	const [userData, setUserData] = useState({
		email: "Akali@gmail.com",
		password: "Akali",
	})
	if (localStorage.getItem("@trackit/userData")) {
		loggedDataUpdate.setLoggedData(
			JSON.parse(localStorage.getItem("@trackit/userData"))
		)
		navigate("/today")
	}
	const URL =
		"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"

	function singIn(e) {
		e.preventDefault()
		setIsLoading(true)
		axios
			.post(URL, userData)
			.then(({ data }) => {
				setIsLoading(false)
				loggedDataUpdate.setLoggedData(data)
				localStorage.setItem("@trackit/userData", JSON.stringify(data))
				console.log("logado e setado")
				navigate("/today")
			})
			.catch(({ response }) => {
				setIsLoading(false)
				NotificationManager.error("", response.data.message, 10000)
			})
	}
	return (
		<S.SingIn>
			<img src={logo} alt="logo" />
			<form onSubmit={singIn}>
				<input
					value={userData.email}
					required
					type="email"
					placeholder="email"
					className={isLoading ? "disabled" : ""}
					onChange={e =>
						setUserData({ ...userData, email: e.target.value })
					}
				/>
				<input
					value={userData.password}
					required
					type="password"
					placeholder="senha"
					className={isLoading ? "disabled" : ""}
					onChange={e =>
						setUserData({
							...userData,
							password: e.target.value,
						})
					}
				/>

				<button type="submit" className={isLoading ? "disabled" : ""}>
					{isLoading ? <ThreeDotsLoading /> : "Entrar"}
				</button>
			</form>
			<NotificationContainer />
			<Link to="/singup">
				<p>Não tem uma conta? Cadastre-se!</p>
			</Link>
		</S.SingIn>
	)
}
