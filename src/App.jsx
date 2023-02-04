import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Cie from "./pages/Cie"
import Cups from "./pages/Cups"
import Home from "./pages/Home"
import Medicamentos from "./pages/Medicamentos"
import Otros from "./pages/Otros"
import Renovacion from "./pages/Renovacion"
import TipoId from "./pages/TipoId"
import Vencidos from "./pages/Vencidos"
import Vigentes from "./pages/Vigentes"

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/medicamentos/" element={<Medicamentos />} >
						<Route path="vigentes" element={<Vigentes />} />
						<Route path="vencidos" element={<Vencidos />} />
						<Route path="renovacion" element={<Renovacion />} />
						<Route path="otros" element={<Otros />} />
					</Route>
					<Route path="/cups" element={<Cups/>} ></Route>
					<Route path="/cie" element={<Cie/>} ></Route>
					<Route path="/tipoid" element={<TipoId/>} ></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
