import PropTypes from "prop-types";
import { useContextColor } from "../../Settings/UseProvider";
import { themeColors } from "../../Settings/Colors";
import { TfiClose } from "react-icons/tfi";
import Card from "../Subcomponents/Card";

const urlImgCard = 'https://www.lavanguardia.com/files/article_main_microformat/files/fp/uploads/2020/09/09/5f58b1bb6d322.r_d.627-418-0.jpeg';

function FamousRecipesSaveMenu({ showFamousRecipesMenu, setShowFamousRecipesMenu }) {
	const contextColor = useContextColor();
	const styleThemeColors = themeColors[contextColor];
	return (
		<>
			<div
				className={`fixed z-20 w-full h-full md:w-[60%] md:h-[85%] flex justify-center items-center  md:ml-[20%]  ${
					showFamousRecipesMenu ? "md:my-[3.8%] m-0" : "-mt-[500%]"
				} bg-transparent  transition-all duration-500`}
			>
				<div
					className={`w-[100%] h-[100%]  border ${styleThemeColors.border} ${styleThemeColors.bg} md:rounded-xl relative pb-4`}
				>
					<button className={`flex h-10 w-10 items-center justify-center border-solid rounded-lg cursor-pointer ml-8 mt-6 text-[30px] ${styleThemeColors.text}`} onClick={() => setShowFamousRecipesMenu(false)}>
						<TfiClose />
					</button>
				<h1 className={`text-3xl text-center ${styleThemeColors.text}`}>Recetas famosas</h1>
					{/* Grid of content cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-auto py-2 px-4 mt-3 w-full md:h-[80%] h-[80%] overflow-auto">
						{/* Cards */}
						<Card img={urlImgCard} title="Card 1" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quod." />
						<Card img={urlImgCard} title="Card 2" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quod." />
						<Card img={urlImgCard} title="Card 2" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quod." />
						<Card img={urlImgCard} title="Card 2" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quod." />
						<Card img={urlImgCard} title="Card 2" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quod." />
						<Card img={urlImgCard} title="Card 2" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quod." />
						<Card img={urlImgCard} title="Card 2" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quod." />
						<Card img={urlImgCard} title="Card 2" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quod." />
						<Card img={urlImgCard} title="Card 2" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quod." />
					</div>
				</div>
			</div>
		</>
	);
}

FamousRecipesSaveMenu.propTypes = {
	showFamousRecipesMenu: PropTypes.bool.isRequired,
	setShowFamousRecipesMenu: PropTypes.func.isRequired,
};

export default FamousRecipesSaveMenu;
