import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { NotificationContainer, NotificationManager } from "react-notifications"

import * as S from "./styles"
import logo from "../../assets/imgs/logo.svg"
import loading from "../../assets/imgs/loading.svg"
import "react-notifications/lib/notifications.css"

export default function SingUp() {
	const navigate = useNavigate()
	const [isLoading, setIsLoading] = useState({
		data: "Cadastrar",
		className: "",
	})
	const [userData, setUserData] = useState({
		email: "",
		password: "",
		name: "",
		image: "",
	})

	function singUp(e) {
		e.preventDefault()
		setIsLoading({ ...isLoading, data: loading, className: "disabled" })
		axios
			.post(
				"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
				userData
			)
			.then((response) => {
				console.log(response)
				navigate("/")
			})
			.catch(({ response }) => {
				console.log(response)
				setIsLoading({ ...isLoading, data: "Cadastrar", className: "" })
				NotificationManager.error(
					response.data.details,
					response.data.message,
					10000
				)
			})
	}

	return (
		<S.SingUp>
			<img src={logo} alt="logo" />
			<form onSubmit={singUp}>
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
				<input
					required
					type="text"
					placeholder="nome"
					className={isLoading.className}
					onChange={(e) =>
						setUserData({ ...userData, name: e.target.value })
					}
				/>
				<input
					required
					type="text"
					placeholder="foto"
					className={isLoading.className}
					onChange={(e) =>
						setUserData({ ...userData, image: e.target.value })
					}
				/>
				<button type="submit" className={isLoading.className}>
					{isLoading.data === "Cadastrar" ? (
						isLoading.data
					) : (
						<object data={isLoading.data}></object>
					)}
				</button>
			</form>
			<NotificationContainer />
			<Link to="/">
				<p>Já tem uma conta? Faça login!</p>
			</Link>
		</S.SingUp>
	)
}
