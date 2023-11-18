import PropTypes from "prop-types";
import { useContextColor, useContextSetColor } from "../../Settings/UseProvider";
import { themeColors } from "../../Settings/Colors";
import { FaBowlFood } from "react-icons/fa6";
import { AiFillClockCircle, AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from "react";

function TypesMenu({ showTypesMenu, setShowTypesMenu }) {
	const contextColor = useContextColor();
	const setContextColor = useContextSetColor();
	const styleThemeColors = themeColors[contextColor];
	const [timeDay, setTimeDay] = useState(null);
	const liStyles =
		"hover:cursor-pointer group transition-transform duration-300 text-md active:scale-90";
	const spanStyles =
		`block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 ${styleThemeColors.background} mt-0`;
	const handleColor = (color) => {
		setContextColor(color);
	};
	const handleTimeDay = (time) => {
		time == timeDay ? setTimeDay(null) : setTimeDay(time);
	};
	return (
		<>
			<div
				className={`flex fixed md:z-20 z-50 flex-col justify-start items-start ${
					showTypesMenu ? "md:left-80 left-0" : "-left-80"
				} md:w-56 w-80 h-[calc(100%-8rem)] md:h-[69%] transition-all duration-300 border border-l-0 ${
					styleThemeColors.border
				} ${styleThemeColors.bg} ${
					styleThemeColors.text
				} md:bottom-32 md:pt-0`}
			>
				<button className={`md:hidden flex h-10 w-10 items-center justify-center border-solid border ${styleThemeColors.border} rounded-xl cursor-pointer ml-6 mt-6 text-2xl ${styleThemeColors.text}`} 
				onClick={() => setShowTypesMenu(false)}>
					<AiOutlineArrowLeft />
				</button>
				<div className="flex flex-col md:mt-5 mt-4 ml-5 md:pt-0">
					<h2 className="flex w-auto items-center md:text-[1.05rem] text-2xl">
						<FaBowlFood className="mr-1" /> Tipos de comida
					</h2>
					<ul
						className={`border-l ${styleThemeColors.border} md:text-base text-xl ml-5 mt-2 pl-4 py-1`}
					>
						<li
							className={`${liStyles} w-[83%]`}
							onClick={() => handleColor("vegetarian")}
						>
							Vegetariana <span className={spanStyles}></span>
						</li>
						<li
							className={`${liStyles} w-[53%]`}
							onClick={() => handleColor("vegan")}
						>
							Vegana <span className={spanStyles}></span>
						</li>
						<li
							className={`${liStyles} w-[70%]`}
							onClick={() => handleColor("healthy")}
						>
							Saludable <span className={spanStyles}></span>
						</li>
						<li
							className={`${liStyles} w-[68%]`}
							onClick={() => handleColor("carnivore")}
						>
							Carnívora <span className={spanStyles}></span>
						</li>
						<li
							className={`${liStyles} w-[49%]`}
							onClick={() => handleColor("fast")}
						>
							Rápida <span className={spanStyles}></span>
						</li>
						<li
							className={`${liStyles} w-[51%]`}
							onClick={() => handleColor("dessert")}
						>
							Postres <span className={spanStyles}></span>
						</li>
						<li
							className={`${liStyles} w-[51%]`}
							onClick={() => handleColor("primary")}
						>
							Sin tipo <span className={spanStyles}></span>
						</li>
					</ul>
				</div>
				<div className="flex flex-col mt-4 ml-5">
					<h2 className="flex w-auto items-center md:text-[1.05rem] text-2xl">
						<AiFillClockCircle className="mr-1" /> Momento de día
					</h2>
					<ul
						className={`border-l ${styleThemeColors.border} md:text-base text-xl ml-5 mt-2 pl-4 py-1`}
					>
						<li
							className={`${liStyles} w-[67%] ${
								timeDay == "breakfast"
									? "bg-gray-300 dark:bg-zinc-800 w-auto px-5 rounded-sm transition duration-500"
									: ""
							}`}
							onClick={() => handleTimeDay("breakfast")}
						>
							Desayuno{" "}
							<span
								className={`${spanStyles} ${
									timeDay == "breakfast" ? "hidden" : "block"
								}`}
							></span>
						</li>
						<li
							className={`${liStyles} w-[66%]  ${
								timeDay == "lunch"
									? "bg-gray-300 dark:bg-zinc-800 w-auto px-5 rounded-sm transition duration-500"
									: ""
							}`}
							onClick={() => handleTimeDay("lunch")}
						>
							Almuerzo{" "}
							<span
								className={`${spanStyles} ${
									timeDay == "lunch" ? "hidden" : "block"
								}`}
							></span>
						</li>
						<li
							className={`${liStyles} w-[43%] ${
								timeDay == "dessert"
									? "bg-gray-300 dark:bg-zinc-800 w-auto px-5 rounded-sm transition duration-500"
									: ""
							}`}
							onClick={() => handleTimeDay("dessert")}
						>
							Postre{" "}
							<span
								className={`${spanStyles} ${
									timeDay == "dessert" ? "hidden" : "block"
								}`}
							></span>
						</li>
						<li
							className={`${liStyles} w-[66%]  ${
								timeDay == "snack"
									? "bg-gray-300 dark:bg-zinc-800 w-auto px-5 rounded-sm transition duration-500"
									: ""
							}`}
							onClick={() => handleTimeDay("snack")}
						>
							Merienda{" "}
							<span
								className={`${spanStyles} ${
									timeDay == "snack" ? "hidden" : "block"
								}`}
							></span>
						</li>
						<li
							className={`${liStyles} w-[35%]  ${
								timeDay == "dinner"
									? "bg-gray-300 dark:bg-zinc-800 w-auto px-5 rounded-sm transition duration-500"
									: ""
							}`}
							onClick={() => handleTimeDay("dinner")}
						>
							Cena{" "}
							<span
								className={`${spanStyles} ${
									timeDay == "dinner" ? "hidden" : "block"
								}`}
							></span>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

TypesMenu.propTypes = {
	showTypesMenu: PropTypes.bool.isRequired,
	setShowTypesMenu: PropTypes.func.isRequired
};

export default TypesMenu;
