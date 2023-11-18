import { PropTypes } from 'prop-types';
import { useContextColor } from "../../Settings/UseProvider";
import { themeColors } from "../../Settings/Colors";

function Card({img, title, body}) {
  const contextColor = useContextColor();
	const styleThemeColors = themeColors[contextColor];
  return (
		<div
			className={`w-full h-64 p-4 rounded-xl hover:scale-105 transition-all duration-300 ${styleThemeColors.bg} ${styleThemeColors.border} ${styleThemeColors.text} border`}
		>
			<img src={img} className='card rounded-xl h-36 object-fill w-full'/>
			<h1 className="text-xl mt-2">{title}</h1>
			<p className="text-sm">
				{body}
			</p>
		</div>
	);
}

Card.propTypes = {
	img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

export default Card;
