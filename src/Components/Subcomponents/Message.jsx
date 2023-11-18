import { PropTypes } from "prop-types";
import { useContextColor } from "../../Settings/UseProvider";
import { themeColors } from "../../Settings/Colors.js";

function Message({ user, img, text }) {
	const contextColor = useContextColor();
	const styleThemeColors = themeColors[contextColor];
	return (
		<div className={`flex w-full ${user == "Usuario" ? "flex-row-reverse" : ""} mb-5 ${styleThemeColors.text}`}>
			<div
				className={`flex w-max max-w-[80%] h-max py-4 border ${styleThemeColors.border} rounded-2xl ${user == "Usuario" ? "flex-row-reverse pr-2 pl-4" : "pl-2 pr-4"}`}
			>
        <img src={img} className={`w-8 h-8 rounded-full`}/>
				<p className={`${user == "Usuario" ? "mr-2" : "ml-2"}`}>
          {text}
        </p>
			</div>
		</div>
	);
}

Message.propTypes = {
	user: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

export default Message;
