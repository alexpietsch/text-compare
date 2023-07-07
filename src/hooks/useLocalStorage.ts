import { useState, useEffect } from "react"

function getStorageValue(key: string, defaultValue: string) {
	const storedValue = localStorage.getItem(key)
	let initial
	if (storedValue) initial = JSON.parse(storedValue)
	return initial || defaultValue
}

export const useLocalStorage = (key: string, defaultValue: string) => {
	const [value, setValue] = useState(() => {
		return getStorageValue(key, defaultValue)
	})

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value))
	}, [key, value])

	return [value, setValue]
}
