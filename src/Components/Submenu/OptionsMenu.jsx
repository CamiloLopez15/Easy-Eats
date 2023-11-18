import PropTypes from "prop-types";
import { useContextColor } from "../../Settings/UseProvider";
import { themeColors } from "../../Settings/Colors";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { CgOptions } from "react-icons/cg";

function OptionsMenu({ showOptionsMenu, setShowOptionsMenu }) {
	//Variables
	const contextColor = useContextColor();
	const styleThemeColors = themeColors[contextColor];

	//Styles
	const liStyles = "hover:cursor-pointer group transition-transform duration-300 text-md active:scale-90";
	const spanStyles = `block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 ${styleThemeColors.background} mt-0`;
	return (
		<>
			<div
				className={`flex fixed md:z-20 z-50 flex-col justify-start items-start ${
					showOptionsMenu ? "md:left-80 left-0" : "-left-80"
				} md:w-56 w-80 h-[calc(100%-8rem)] md:h-[69%] transition-all duration-300 border border-l-0 ${
					styleThemeColors.border
				} ${styleThemeColors.bg} ${styleThemeColors.text} md:bottom-32 md:pt-0`}
			>
				<button
					className={`md:hidden flex h-10 w-10 items-center justify-center border-solid border ${styleThemeColors.border} rounded-xl cursor-pointer ml-6 mt-6 text-2xl ${styleThemeColors.text}`}
					onClick={() => setShowOptionsMenu(false)}
				>
					<AiOutlineArrowLeft />
				</button>

				<div className="flex flex-col md:mt-5 mt-4 ml-5 md:pt-0">

					<h2 className="flex w-auto items-center md:text-[1.05rem] text-2xl">
						<CgOptions className="mr-1" /> Opciones
					</h2>
					<ul
						className={`border-l ${styleThemeColors.border} md:text-base text-xl ml-5 mt-2 pl-4 py-1`}
					>
						<li className={`${liStyles}`}>Recetas guardadas<span className={`${spanStyles} w-[93%]`}/></li>
						<li className={`${liStyles}`}>Temporizador<span className={`${spanStyles} w-[70%]`}/></li>
						<li className={`${liStyles}`}>Despensa<span className={`${spanStyles} w-[50%]`}/></li>
						<li className={`${liStyles}`}>Alergias<span className={`${spanStyles} w-[42%]`}/></li>
						<li className={`${liStyles}`}>Imprimir receta<span className={`${spanStyles} w-[77%]`}/></li>
						<li className={`${liStyles}`}>Crear libro de cocina<span className={`${spanStyles} w-[100%]`}/></li>
						<li className={`${liStyles}`}>Calcular calorías<span className={`${spanStyles} w-[80%]`}/></li>
					</ul>
				</div>
			</div>
		</>
	);
}

OptionsMenu.propTypes = {
	showOptionsMenu: PropTypes.bool.isRequired,
	setShowOptionsMenu: PropTypes.func.isRequired,
};

export default OptionsMenu;
