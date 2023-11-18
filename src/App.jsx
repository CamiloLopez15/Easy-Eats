import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login.jsx";
import Home from "./Components/Home.jsx";
import Register from "./Components/Register.jsx";
import UseProvider from "./Settings/UseProvider.jsx";

function App() {
	return (
		<>
			<UseProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/Easyeats/" element={<Home />} />
						<Route path="/Easyeats/login" element={<Login />} />
						<Route path="/Easyeats/register" element={<Register />} />
					</Routes>
				</BrowserRouter>
			</UseProvider>
		</>
	);
}

export default App;
