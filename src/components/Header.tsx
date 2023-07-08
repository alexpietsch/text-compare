import "./Header.css"
import { BsSunFill } from "react-icons/bs"
import { BsMoonFillDark } from "./icons/BsMoonFillDark"
import { IconContext } from "react-icons"

type HeaderProps = {
	setTheme: React.Dispatch<React.SetStateAction<any>>
	theme: string
}

export const Header = ({ theme, setTheme }: HeaderProps) => {
	return (
		<div className="p-5 w-full header">
			<p className="text-4xl">Compare text</p>
			<span className="theme-button" style={{ float: "right" }}>
				<div onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
					<IconContext.Provider value={{ size: "1.7rem" }}>
						{theme === "light" ? <BsMoonFillDark /> : <BsSunFill />}
					</IconContext.Provider>
				</div>
			</span>
		</div>
	)
}
