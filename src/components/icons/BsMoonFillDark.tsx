import { IconContext } from "react-icons"
import { BsMoonFill } from "react-icons/bs"

export const BsMoonFillDark = () => {
	return (
		<IconContext.Provider value={{ color: "#18181b" }}>
			<BsMoonFill />
		</IconContext.Provider>
	)
}
