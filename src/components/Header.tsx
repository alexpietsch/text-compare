import "./Header.css"
import { BsSunFill } from "react-icons/Bs"
import { BsMoonFillDark } from "./icons/BsMoonFillDark"

type HeaderProps = {
	setTheme: React.Dispatch<React.SetStateAction<string>>
	theme: string
}

export const Header = ({ theme, setTheme }: HeaderProps) => {
	return (
		<div className="header">
			<h1>Compare text</h1>
			<span className="theme-button" style={{ float: "right" }}>
				<div onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
					{theme === "light" ? <BsMoonFillDark /> : <BsSunFill />}
				</div>
			</span>
		</div>
	)
}
