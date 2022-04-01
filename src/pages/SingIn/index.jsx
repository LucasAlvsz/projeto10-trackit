import axios from "axios"
import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { NotificationContainer, NotificationManager } from "react-notifications"

import * as S from "./styles"
import "react-notifications/lib/notifications.css"
import logo from "../../assets/imgs/logo.svg"
import loading from "../../assets/imgs/loading.svg"

import LoggedContext from "../../providers/LoggedContext"

export default function SingIn() {
	const URL =
		"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
	const navigate = useNavigate()
	const loggedDataUpdate = useContext(LoggedContext)
	const [teste, setTeste] = useState("darkGray")
	const [isLoading, setIsLoading] = useState({
		data: "Entrar",
		className: "",
	})
	const [userData, setUserData] = useState({
		email: "Akali@gmail.com",
		password: "Akali",
	})
	function singIn(e) {
		e.preventDefault()
		setIsLoading({ ...isLoading, data: loading, className: "disabled" })
		setTeste("red")
		axios
			.post(URL, userData)
			.then(({ data }) => {
				loggedDataUpdate.setLoggedData(data)
				console.log(data)
				navigate("/today")
			})
			.catch(({ response }) => {
				console.log(response)
				setIsLoading({ ...isLoading, data: "Entrar", className: "" })
				NotificationManager.error("", response.data.message, 10000)
			})
	}
	return (
		<S.SingIn color={teste}>
			<img src={logo} alt="logo" />
			<form onSubmit={singIn}>
				<input
					value={userData.email}
					required
					type="email"
					placeholder="email"
					className={isLoading.className}
					onChange={(e) =>
						setUserData({ ...userData, email: e.target.value })
					}
				/>
				<input
					value={userData.password}
					required
					type="password"
					placeholder="senha"
					className={isLoading.className}
					onChange={(e) =>
						setUserData({ ...userData, password: e.target.value })
					}
				/>

				<button type="submit" className={isLoading.className}>
					{isLoading.data === "Entrar" ? (
						isLoading.data
					) : (
						<object data={isLoading.data}></object>
					)}
				</button>
			</form>
			<NotificationContainer />
			<Link to="/singup">
				<p>Não tem uma conta? Cadastre-se!</p>
			</Link>
		</S.SingIn>
	)
}
