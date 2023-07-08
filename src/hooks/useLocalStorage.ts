import { useState, useEffect } from "react"

function getStorageValue(key: string, defaultValue: any) {
	const storedValue = localStorage.getItem(key)
	let initial
	if (storedValue) initial = JSON.parse(storedValue)
	return initial || defaultValue
}

export function useLocalStorage<T>(
	key: string,
	defaultValue: T,
): [value: T, setValue: React.Dispatch<T>] {
	const [value, setValue] = useState(() => {
		return getStorageValue(key, defaultValue)
	})

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value))
	}, [key, value])

	return [value, setValue]
}
