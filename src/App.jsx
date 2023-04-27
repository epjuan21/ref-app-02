import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import { MenuProvider } from "./MenuContext"
import Cie from "./pages/Cie"
import CondicionEgreso from "./pages/CondicionEgreso"
import Cups from "./pages/Cups"
import Departamento from "./pages/Departamento"
import Eapb from "./pages/Eapb"
import GrupoServicios from "./pages/GrupoServicios"
import Home from "./pages/Home"
import LstSiNo from "./pages/LstSiNo"
import Medicamentos from "./pages/Medicamentos"
import Modalidad from "./pages/Modalidad"
import Municipio from "./pages/Municipio"
import Otros from "./pages/Otros"
import Pais from "./pages/Pais"
import Renovacion from "./pages/Renovacion"
import Servicios from "./pages/Servicios"
import Sexo from "./pages/Sexo"
import TipoDiagnosticoPrincipal from "./pages/TipoDiagnosticoPrincipal"
import TipoId from "./pages/TipoId"
import TipoMedicamentosPos from "./pages/TipoMedicamentosPos"
import TipoNota from "./pages/TipoNota"
import TipoUsuario from "./pages/TipoUsuario"
import Vencidos from "./pages/Vencidos"
import ViaIngreso from "./pages/ViaIngreso"
import Vigentes from "./pages/Vigentes"
import Zona from "./pages/Zona"
import CausaExternaV2 from "./pages/CausaExternav2"
import CausaExterna from "./pages/CausaExterna"
import FinalidadConsultaV2 from "./pages/FinalidadConsultaV2"
import FinalidadConsulta from "./pages/FinalidadConsulta"

function App() {

	return (
		<MenuProvider>
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
						<Route path="/zona" element={<Zona/>} ></Route>
						<Route path="/via" element={<ViaIngreso/>} ></Route>
						<Route path="/tiponota" element={<TipoNota/>} ></Route>
						<Route path="/tipomedicamentopos" element={<TipoMedicamentosPos/>} ></Route>
						<Route path="/sexo" element={<Sexo/>} ></Route>
						<Route path="/servicios" element={<Servicios/>} ></Route>
						<Route path="/tipousuario" element={<TipoUsuario/>} ></Route>
						<Route path="/tipodiagnosticoppal" element={<TipoDiagnosticoPrincipal/>} ></Route>
						<Route path="/finalidad" element={<FinalidadConsulta/>} ></Route>
						<Route path="/finalidadversion2" element={<FinalidadConsultaV2/>} ></Route>
						<Route path="/causaexterna" element={<CausaExterna/>} ></Route>
						<Route path="/causaversion2" element={<CausaExternaV2/>} ></Route>
						<Route path="/pais" element={<Pais/>} ></Route>
						<Route path="/municipio" element={<Municipio/>} ></Route>
						<Route path="/departamento" element={<Departamento/>} ></Route>
						<Route path="/modalidad" element={<Modalidad/>} ></Route>
						<Route path="/lstsino" element={<LstSiNo/>} ></Route>
						<Route path="/gruposervicios" element={<GrupoServicios/>} ></Route>
						<Route path="/condicionegreso" element={<CondicionEgreso/>} ></Route>
						<Route path="/eapb" element={<Eapb/>} ></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</MenuProvider>
	)
}

export default App
