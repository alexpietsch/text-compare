import "./TextBox.css"

type TextBoxProps = {
	textBoxRef: React.RefObject<HTMLTextAreaElement>
}

export const TextBox = ({ textBoxRef }: TextBoxProps) => {
	//TODO: Replace textbox with some way to highlight differences (e.g. div with contentEditable)
	return <textarea ref={textBoxRef} className="text-box" />
}
