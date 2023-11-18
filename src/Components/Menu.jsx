// Utilities
import { useState } from "react";
import PropTypes from "prop-types";
import { useContextColor } from "../Settings/UseProvider";
import { themeColors } from "../Settings/Colors";
import TypesMenu from "./Submenu/TypesMenu";
import SaveMenu from "./Submenu/SaveMenu";
import OptionsMenu from "./Submenu/OptionsMenu";

// Icons
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { BsBookmark } from "react-icons/bs";
import { BiSolidRightArrow, BiCrown } from "react-icons/bi";
import { CgDarkMode, CgOptions } from "react-icons/cg";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { AiOutlineHistory } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import FamousRecipesSaveMenu from "./Submenu/FamousRecipesMenu";
import HistoryMenu from "./Submenu/HistoryMenu";

function Menu(props) {
	//Variables
	const { theme, setTheme } = props;
	const [menu, setMenu] = useState(false);
	const [showFamousRecipesMenu, setShowFamousRecipesMenu] = useState(false);
	const [showHistoryMenu, setShowHistoryMenu] = useState(false);
	const [showTypesMenu, setShowTypesMenu] = useState(false);
	const [showOptionsMenu, setShowOptionsMenu] = useState(false);
	const [showSaveMenu, setShowSaveMenu] = useState(false);
	const contextColor = useContextColor();
	const styleThemeColors = themeColors[contextColor];

	//Styles
	const styleMenuOptions = `w-72 px-3 py-2 flex justify-start items-center text-xl ${styleThemeColors.bgBorder} rounded-lg transition-all duration-100`;

	//Functions
	const handleChangeTheme = () => {
		theme == "light" ? setTheme("dark") : setTheme("light");
	};

	return (
		<div className="absolute h-auto w-auto">
			{/* Open the menu */}
			<div
				className={`flex h-14 w-14 items-center justify-center border-solid border absolute z-0 ${
					styleThemeColors.border
				}
      rounded-2xl cursor-pointer md:ml-12 md:mt-12 ml-8 mt-8 text-[30px] ${
				styleThemeColors.text
			}
      ${menu ? "-ml-80" : "ml-12"} transition-all duration-300`}
				onClick={() => {
					setMenu(true);
					setShowFamousRecipesMenu(false);
					setShowSaveMenu(false);
					setShowHistoryMenu(false);
					setShowTypesMenu(false);
					setShowOptionsMenu(false);
				}}
			>
				<RxHamburgerMenu />
			</div>
			{/* Menu content */}
			<div
				className={`${
					menu ? "ml-0" : "-ml-80"
				} flex flex-col items-center justify-between fixed w-80 h-full border z-50 ${
					styleThemeColors.border
				}
      ${styleThemeColors.bg}
      rounded-r-3xl transition-all duration-300`}
			>
				{/* Close and theme */}
				<div className="flex w-full items-center justify-between">
					<button
						className={`flex h-14 w-14 items-center justify-center border-solid border ${styleThemeColors.border} rounded-2xl cursor-pointer md:ml-12 md:mt-12 ml-8 mt-8 text-[30px] ${styleThemeColors.text}`}
						onClick={() => {
							setMenu(false);
							setShowFamousRecipesMenu(false);
							setShowSaveMenu(false);
							setShowHistoryMenu(false);
							setShowTypesMenu(false);
							setShowOptionsMenu(false);
						}}
					>
						<TfiClose />
					</button>
					<button
						className={`flex h-14 w-14 items-center justify-center border-solid border ${styleThemeColors.border} rounded-2xl cursor-pointer md:mr-12 md:mt-12 mr-8 mt-8 text-[30px] ${styleThemeColors.text}`}
						onClick={handleChangeTheme}
					>
						<CgDarkMode
							className={`active:rotate-[360deg] transition-all duration-500`}
						/>
					</button>
				</div>
				{/* Options */}
				<div
					className={`flex flex-col w-full justify-start items-center p-4 ${styleThemeColors.text}`}
				>
					<button
						className={styleMenuOptions}
						onClick={() => {
							setMenu(false);
							setShowFamousRecipesMenu(!showFamousRecipesMenu);
							setShowSaveMenu(false);
							setShowHistoryMenu(false);
							setShowTypesMenu(false);
							setShowOptionsMenu(false);
						}}
					>
						<MdOutlineWorkspacePremium className="mr-3" /> Recetas famosas
					</button>
					<button
						className={styleMenuOptions}
						onClick={() => {
							setMenu(false);
							setShowFamousRecipesMenu(false);
							setShowSaveMenu(!showSaveMenu);
							setShowHistoryMenu(false);
							setShowTypesMenu(false);
							setShowOptionsMenu(false);
						}}
					>
						<BsBookmark className="mr-3" /> Recetas guardadas
					</button>
					<button className={styleMenuOptions} onClick={() => {
							setMenu(false);
							setShowFamousRecipesMenu(false);
							setShowSaveMenu(false);
							setShowHistoryMenu(!showHistoryMenu);
							setShowTypesMenu(false);
							setShowOptionsMenu(false);
						}}>
						<AiOutlineHistory className="mr-3" />
						Historial
					</button>
					<button
						className={styleMenuOptions}
						onClick={() => {
							setShowFamousRecipesMenu(false);
							setShowSaveMenu(false);
							setShowHistoryMenu(false);
							setShowTypesMenu(!showTypesMenu);
							setShowOptionsMenu(false);
						}}
					>
						<BiSolidRightArrow className="mr-3" />
						Tipos
					</button>
					<button
						className={styleMenuOptions}
						onClick={() => {
							setShowFamousRecipesMenu(false);
							setShowSaveMenu(false);
							setShowHistoryMenu(false);
							setShowTypesMenu(false);
							setShowOptionsMenu(!showOptionsMenu);
						}}
					>
						<CgOptions className="mr-3" />
						Opciones
					</button>
				</div>
				{/* User */}
				<div
					className={`h-32  border-t w-full p-4 ${styleThemeColors.text} ${styleThemeColors.border}`}
				>
					<button className={styleMenuOptions}>
						<BiCrown className="mr-3 text-yellow-400" /> Cámbiate a premium
					</button>
					<button className={styleMenuOptions}>
						<FaRegUser className="mr-3" /> User
					</button>
				</div>
			</div>
			{/* Modals */}
			<FamousRecipesSaveMenu
				showFamousRecipesMenu={showFamousRecipesMenu}
				setShowFamousRecipesMenu={setShowFamousRecipesMenu}
			/>
			<SaveMenu setShowSaveMenu={setShowSaveMenu} showSaveMenu={showSaveMenu} />
			<HistoryMenu
				showHistoryMenu={showHistoryMenu}
				setShowHistoryMenu={setShowHistoryMenu}
			/>
			<TypesMenu
				showTypesMenu={showTypesMenu}
				setShowTypesMenu={setShowTypesMenu}
			/>
			<OptionsMenu
				setShowOptionsMenu={setShowOptionsMenu}
				showOptionsMenu={showOptionsMenu}
			/>
		</div>
	);
}

Menu.propTypes = {
	theme: PropTypes.string.isRequired,
	setTheme: PropTypes.func.isRequired,
};

export default Menu;
