import { Link } from "react-router-dom"
import { useState } from "react"

import * as S from "./styles"
import logo from "../../assets/logo.svg"
import axios from "axios"

export default function SingUp() {
	const [userData, setUserData] = useState({
		email: "",
		password: "",
		name: "",
		image: "",
	})

	function singUp(e) {
		e.preventDefault()
		axios
			.post(
				"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
				userData
			)
			.then((response) => {
				console.log(response)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	return (
		<S.SingUp>
			<img src={logo} alt="logo" />
			<form onSubmit={singUp}>
				<input
					type="email"
					placeholder="email"
					required
					onChange={(e) =>
						setUserData({ ...userData, email: e.target.value })
					}
				/>
				<input
					type="password"
					placeholder="senha"
					required
					onChange={(e) =>
						setUserData({ ...userData, password: e.target.value })
					}
				/>
				<input
					type="text"
					placeholder="nome"
					required
					onChange={(e) =>
						setUserData({ ...userData, name: e.target.value })
					}
				/>
				<input
					type="text"
					placeholder="foto"
					required
					onChange={(e) =>
						setUserData({ ...userData, image: e.target.value })
					}
				/>
				<button type="submit">Cadastrar</button>
			</form>
			<Link to="/">
				<p>Já tem uma conta? Faça login!</p>
			</Link>
		</S.SingUp>
	)
}
