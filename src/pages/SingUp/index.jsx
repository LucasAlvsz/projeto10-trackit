import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { NotificationContainer, NotificationManager } from "react-notifications"

import * as S from "./styles"
import "react-notifications/lib/notifications.css"
import logo from "../../assets/imgs/logo.svg"
import ThreeDotsLoading from "../../components/Loading"

export default function SingUp() {
	const URL =
		"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
	const navigate = useNavigate()
	const [isLoading, setIsLoading] = useState(false)
	const [userData, setUserData] = useState({
		email: "",
		password: "",
		name: "",
		image: "",
	})

	function singUp(e) {
		e.preventDefault()
		setIsLoading(true)
		axios
			.post(URL, userData)
			.then(response => {
				setIsLoading(false)
				console.log(response)
				navigate("/")
			})
			.catch(({ response }) => {
				console.log(response)
				setIsLoading(false)
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
					className={isLoading ? "disabled" : ""}
					onChange={e =>
						setUserData({ ...userData, email: e.target.value })
					}
				/>
				<input
					required
					type="password"
					placeholder="senha"
					className={isLoading ? "disabled" : ""}
					onChange={e =>
						setUserData({ ...userData, password: e.target.value })
					}
				/>
				<input
					required
					type="text"
					placeholder="nome"
					className={isLoading ? "disabled" : ""}
					onChange={e =>
						setUserData({ ...userData, name: e.target.value })
					}
				/>
				<input
					required
					type="text"
					placeholder="foto"
					className={isLoading ? "disabled" : ""}
					onChange={e =>
						setUserData({ ...userData, image: e.target.value })
					}
				/>
				<button type="submit" className={isLoading ? "disabled" : ""}>
					{isLoading ? <ThreeDotsLoading /> : "Cadastrar"}
				</button>
			</form>
			<NotificationContainer />
			<Link to="/">
				<p>Já tem uma conta? Faça login!</p>
			</Link>
		</S.SingUp>
	)
}
