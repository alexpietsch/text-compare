import { Textarea } from "@/components/ui/textarea"

import "./TextBox.css"

type TextBoxProps = {
	textBoxRef: React.RefObject<HTMLTextAreaElement>
}

export const TextBox = ({ textBoxRef }: TextBoxProps) => {
	//TODO: Replace textbox with some way to highlight differences (e.g. div with contentEditable)
	return (
		<div className="p-1 w-[48%]">
			<Textarea ref={textBoxRef} className="resize-y" placeholder="Paste text here." />
		</div>
	)
}
