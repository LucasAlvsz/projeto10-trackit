import { Link } from "react-router-dom"

import * as S from "./styles"
import logo from "../../assets/logo.svg"

export default function SingUp() {
	return (
		<S.SingUp>
			<img src={logo} alt="logo" />
			<input type="text" placeholder="email" />
			<input type="text" placeholder="senha" />
			<input type="text" placeholder="nome" />
			<input type="text" placeholder="senha" />
			<button>Cadastrar</button>
			<Link to="/singup">
				<p>Já tem uma conta? Faça login!</p>
			</Link>
		</S.SingUp>
	)
}
