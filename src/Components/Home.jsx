import { useEffect, useState } from "react";
import Menu from "./Menu";
import Chat from "./Chat";
import { useContextColor } from "../Settings/UseProvider";
import { themeColors } from "../Settings/Colors";

function Home() {
	const [theme, setTheme] = useState("light");
	const contextColor = useContextColor()
	const styleThemeColors = themeColors[contextColor];
	useEffect(() => {
		if (theme == "dark") {
			document.querySelector("html").classList.add("dark");
		} else {
			document.querySelector("html").classList.remove("dark");
		}
	}, [theme]);

	return (
		<>
			<div
				className={`${styleThemeColors.bg}
            flex w-full h-full relative transition-all duration-300 `}
			>
				{/* Menu */}
				<Menu theme={theme} setTheme={setTheme}/>
				{/* Chat */}
				<Chat theme={theme}/>
			</div>
		</>
	);
}

export default Home