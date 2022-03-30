import { Link } from "react-router-dom"

import * as S from "./styles"
import logo from "../../assets/imgs/logo.svg"

export default function SingIn() {
	return (
		<>
			<S.SingIn>
				<img src={logo} alt="logo" />
				<input type="text" placeholder="email" />
				<input type="text" placeholder="senha" />
				<button>Entrar</button>
				<Link to="/singup">
					<p>Não tem uma conta? Cadastre-se!</p>
				</Link>
			</S.SingIn>
		</>
	)
}
