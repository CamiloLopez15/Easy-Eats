import { useContextColor } from "../Settings/UseProvider";
import { themeColors } from "../Settings/Colors";
import PropTypes from "prop-types";

// import logoWithoutBackground from "/";
import { AiOutlineSend } from "react-icons/ai";
import Suggestion from "./Subcomponents/Suggestion";
import Message from "./Subcomponents/Message";


const textPrueba = "Lorem ipsum dolor sit amet consectetur adipiscing elit ut donec maecenas rhoncus nullam turpis rutrum, tristique malesuada non pellentesque parturient magnis bibendum facilisis sociosqu ac  sodales varius semper et fringilla mus, turpis mauris curae tortor nascetur vulputate platea himenaeos tellus phasellus quis parturient.";
function Chat({theme}) {
	const contextColor = useContextColor()
	const styleThemeColors = themeColors[contextColor];
	const getLogo = () => {
		if(contextColor == 'primary') {
			if (theme == 'dark') return `logo-background-primary-dark.png`
			else return `logo-background-${contextColor}.png`
		}
		else return `logo-background-${contextColor}.png`
	}
	const logo = getLogo();
	return (
		<div className="flex flex-col justify-center items-end h-full md:w-[90%] w-full m-auto">
			{/* Title */}
			<div className="flex justify-center items-center w-full">
				<img className="w-52 h-52 transition-all duration-150" src={logo} alt="Easyeats" />
			</div>
			{/* Msgs */}
			<div className="row-span-3 flex flex-col lg:w-[70%] w-full md:w-[85%] h-full m-auto mb-4 overflow-auto pr-2">
				<Message text={"" + textPrueba} user={"Usuario"} img={'data:image/jpeg;base64,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'}/>
				<Message text={"" + textPrueba} user={"System"} img={logo} />
			</div>
			{/* Suggestions */}
			<div className="flex. hidden justify-end items-center flex-col sm:justify-evenly sm:items-end sm:flex-row lg:w-[70%] w-full md:w-[85%] h-full m-auto mb-4 ">
				<div>
					<Suggestion
						text="Recetas para un desayuno sano."
					/>
					<Suggestion
						text="Recetas bajas en calorías."
					/>
				</div>
				<div>
					<Suggestion
						text="Postres fáciles con leche."
					/>
					<Suggestion
						text="¿Como hacer jugo de mora?"
					/>
				</div>
			</div>
			{/* Input */}
			<div className="flex justify-center items-end relative w-full md:mb-3 lg:mb-0">
				<input
					type="text"
					className={`flex items-center pl-4 pr-10 py-1 mb-6 border lg:w-[70%] md:w-[80%] w-[85%] h-10 rounded-full ${styleThemeColors.border} ${styleThemeColors.bg} text-md  transition-all duration-300`}
					placeholder="¿Qué receta quieres investigar hoy?"
					/>
				<button className={`flex items-center justify-center absolute lg:right-[15.5%] sm:right-[13.5%] md:right-[11%] right-[9%] bottom-7 text-lg h-8 w-8 text-white bg-black ${styleThemeColors.background} rounded-full`}>
					<AiOutlineSend className="text-white dark:text-black"/>
				</button>
			</div>
		</div>
	);
}


Chat.propTypes = {
	theme: PropTypes.string.isRequired
}
export default Chat;
