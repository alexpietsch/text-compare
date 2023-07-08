import { ThemeContext } from "./contexts/themeContext"
import { useState, useEffect } from "react"
import { Header } from "./components/Header"
import { TextBox } from "./components/TextBox"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { useLocalStorage } from "./hooks/useLocalStorage"

import "./App.css"

function App() {
	const [theme, setTheme] = useLocalStorage<string>("theme", "dark")

	const textBoxOne = useRef<HTMLTextAreaElement>(null)
	const textBoxTwo = useRef<HTMLTextAreaElement>(null)

	useEffect(() => {
		document.body.className = theme
	}, [theme])

	const [compareResult, setCompareResult] = useState({ text: "", isSame: false })

	return (
		<ThemeContext.Provider value={theme}>
			<div className={`${theme}`}>
				<Header theme={theme} setTheme={setTheme} />
				<div className="content-wrapper">
					<Button
						className="compare-button"
						onClick={() => {
							const textBoxOneValue = textBoxOne.current?.value
							const textBoxTwoValue = textBoxTwo.current?.value

							const result =
								textBoxOneValue == textBoxTwoValue
									? { text: "The texts are the same", isSame: true }
									: { text: "The texts are different", isSame: false }
							setCompareResult({ text: result.text, isSame: result.isSame })
						}}
					>
						Compare
					</Button>
					<p
						className="result-text"
						style={{ color: compareResult.isSame ? "#2ecc71" : "#d91e18" }}
					>
						{compareResult.text}
					</p>
					<div className="text-box-wrapper p-10">
						<TextBox textBoxRef={textBoxOne} />
						<TextBox textBoxRef={textBoxTwo} />
					</div>
				</div>
			</div>
		</ThemeContext.Provider>
	)
}

export default App
