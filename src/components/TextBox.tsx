import { Textarea } from "@/components/ui/textarea"

import "./TextBox.css"

type TextBoxProps = {
	textBoxRef: React.RefObject<HTMLTextAreaElement>
}

export const TextBox = ({ textBoxRef }: TextBoxProps) => {
	//TODO: Replace textbox with some way to highlight differences (e.g. div with contentEditable)
	return (
		<div className="p-1 w-[96%] h-[30vh] sm:w-[48%] sm:h-[70vh] overflow-y-scroll">
			<Textarea
				ref={textBoxRef}
				className="resize-none h-[20vh] sm:h-[60vh]"
				placeholder="Paste text here."
			/>
		</div>
	)
}
