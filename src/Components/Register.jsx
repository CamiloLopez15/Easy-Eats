import logoWithoutBackgroundText from "/logo-without-background-text.png";
import { useContextColor } from "../Settings/UseProvider";
import { themeColors } from "../Settings/Colors";
import { Link } from "react-router-dom";

function Register() {
	const contextColor = useContextColor()
	const styleThemeColors = themeColors[contextColor];

	return (
		<section className={`${styleThemeColors.bg} h-full w-full lg:pt-7`}>
			<div className="flex flex-col items-center justify-center px-6 py-6 mx-auto h-full lg:py-0">
				<a
					href="#"
					className={`flex items-center mb-6 lg:mb-3 text-2xl font-semibold ${styleThemeColors.text}`}
				>
					<img
						className="w-10 h-10 object-contain mr-2"
						src={logoWithoutBackgroundText}
						alt="logo"
					/>
					EasyEats
				</a>
				<div className={`w-full ${styleThemeColors.bg} rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:border-zinc-400`}>
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className={`text-xl font-bold leading-tight tracking-tight md:text-2xl ${styleThemeColors.text}`}>
							Crea una cuenta
						</h1>
						<form className="space-y-4 md:space-y-6" action="#">
							<div>
								<label className={`block mb-2 text-sm font-medium ${styleThemeColors.text}`}>
									Tu email
								</label>
								<input
									name="email"
									id="email"
									className={`${styleThemeColors.bg} border  ${styleThemeColors.text} sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5  ${styleThemeColors.border} dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500`}
									placeholder="name@company.com"
									required=""
								/>
							</div>
              <div>
								<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									Nombre
								</label>
								<input
									name="text"
									id="name"
									className={`${styleThemeColors.bg} border  ${styleThemeColors.text} sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5  ${styleThemeColors.border} dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500`}
									placeholder="Camilo López"
									required=""
								/>
							</div>
							<div>
								<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									Contraseña
								</label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="••••••••"
									className={`${styleThemeColors.bg} border  ${styleThemeColors.text} sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5  ${styleThemeColors.border} dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500`}
									required=""
								/>
							</div>
							<div>
								<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									Confirma tu contraseña
								</label>
								<input
									type="confirm-password"
									name="confirm-password"
									id="confirm-password"
									placeholder="••••••••"
									className={`${styleThemeColors.bg} border  ${styleThemeColors.text} sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5  ${styleThemeColors.border} dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500`}
									required=""
								/>
							</div>
							<div className="flex items-start">
								<div className="flex items-center h-5">
									<input
										id="terms"
										aria-describedby="terms"
										type="checkbox"
										className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
										required=""
									/>
								</div>
								<div className="ml-3 text-sm">
									<label className="font-light text-gray-500 dark:text-gray-300">
										Acepto los{" "}
										<a
											className="font-medium text-blue-600 hover:underline dark:text-blue-500"
											href="#"
										>
											Términos and Condiciones
										</a>
									</label>
								</div>
							</div>
							<button
								type="submit"
								className="w-full text-white bg-black hover:bg-gray-950 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
							>
								Crear cuenta
							</button>
							<p className="text-sm font-light text-gray-500 dark:text-gray-400">
								¿Ya tienes una cuenta?{" "}
								<Link
									to="/login"
									className="font-medium text-blue-600 hover:underline dark:text-blue-500"
								>
									Inicia sesión aquí
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Register;
