import styled from "styled-components"

import * as S from "./styles"
import logo from "../../assets/logo.svg"

export default function SingIn() {
	return (
		<>
			<S.Login>
				<img src={logo} alt="logo" />
				<input type="text" placeholder="email" />
				<input type="text" placeholder="senha" />
				<button>Entrar</button>
				<p>Não tem uma conta? Cadastre-se!</p>
			</S.Login>
		</>
	)
}
