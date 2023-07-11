import { IconContext } from "react-icons"
import { BsSunFill } from "react-icons/bs"
import "./Header.css"
import { BsMoonFillDark } from "./icons/BsMoonFillDark"

type HeaderProps = {
	setTheme: React.Dispatch<React.SetStateAction<any>>
	theme: string
}

export const Header = ({ theme, setTheme }: HeaderProps) => {
	return (
		<div className="p-5 w-full header">
			<p className="text-4xl">Compare Text</p>
			<span className="theme-button" style={{ float: "right" }}>
				<div onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
					<IconContext.Provider value={{ size: "32px" }}>
						{theme === "light" ? <BsMoonFillDark /> : <BsSunFill />}
					</IconContext.Provider>
				</div>
			</span>
		</div>
	)
}
