import PropTypes from "prop-types";
import { useContextColor } from "../../Settings/UseProvider";
import { themeColors } from "../../Settings/Colors";

function Suggestion({ text }) {
	const contextColor = useContextColor();
	const styleThemeColors = themeColors[contextColor];
	return (
		<div>
			<button
				className={`flex justify-center items-center w-64 border h-10 text-center ${styleThemeColors.border} ${styleThemeColors.text} rounded-full mx-1.5 mt-3  transition-all duration-300`}
				onClick={() => console.log("Hola, yo si funciono")}
			>
				{text}
			</button>
		</div>
	);
}

Suggestion.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Suggestion;
