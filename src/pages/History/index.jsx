import Header from "../../components/Header"
import Menu from "../../components/Menu"

import * as S from "./styles"

export default function History() {
	return (
		<>
			<Header />
			<S.History>
				<h1>Histórico</h1>
				<h3>
					Em breve você poderá ver o histórico dos seus hábitos aqui!
				</h3>
			</S.History>
			<Menu />
		</>
	)
}
