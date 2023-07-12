import { Header } from "@/components/Header"
import { TextBox } from "@/components/TextBox"
import { Button } from "@/components/ui/button"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { useEffect, useRef, useState } from "react"
import "./App.css"
import Footer from "./components/Footer"
import { ThemeContext } from "./contexts/themeContext"

type CompareResult = {
	text: string
	isSame: boolean
}

function App() {
	const [theme, setTheme] = useLocalStorage<string>("theme", "dark")

	const textBoxOne = useRef<HTMLTextAreaElement>(null)
	const textBoxTwo = useRef<HTMLTextAreaElement>(null)

	useEffect(() => {
		document.body.className = theme
	}, [theme])

	const [compareResult, setCompareResult] = useState<CompareResult>()

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
					{compareResult && (
						<p
							className="result-text rounded-lg p-2 m-3 font-semibold"
							style={{
								color: compareResult.isSame ? "#2ecc71" : "#d91e18",
								backgroundColor: theme == "dark" ? "#17171c" : "#f1f5f9",
							}}
						>
							{compareResult.text}
						</p>
					)}
					<div className="text-box-wrapper p-10 flex flex-col sm:flex-row">
						<TextBox textBoxRef={textBoxOne} />
						<TextBox textBoxRef={textBoxTwo} />
					</div>
				</div>
				<Footer />
			</div>
		</ThemeContext.Provider>
	)
}

export default App
