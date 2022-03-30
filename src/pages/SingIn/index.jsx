import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { NotificationContainer, NotificationManager } from "react-notifications"

import * as S from "./styles"
import logo from "../../assets/imgs/logo.svg"
import loading from "../../assets/imgs/loading.svg"
import "react-notifications/lib/notifications.css"

export default function SingIn() {
	const URL =
		"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
	const navigate = useNavigate()
	const [isLoading, setIsLoading] = useState({
		data: "Entrar",
		className: "",
	})
	const [userData, setUserData] = useState({
		email: "",
		password: "",
	})
	function singIn(e) {
		e.preventDefault()
		setIsLoading({ ...isLoading, data: loading, className: "disabled" })
		axios
			.post(URL, userData)
			.then((response) => {
				console.log(response)
				navigate("/")
			})
			.catch(({ response }) => {
				console.log(response)
				setIsLoading({ ...isLoading, data: "Entrar", className: "" })
				NotificationManager.error("", response.data.message, 10000)
			})
	}
	return (
		<S.SingIn>
			<img src={logo} alt="logo" />
			<form onSubmit={singIn}>
				<input
					required
					type="email"
					placeholder="email"
					className={isLoading.className}
					onChange={(e) =>
						setUserData({ ...userData, email: e.target.value })
					}
				/>
				<input
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
