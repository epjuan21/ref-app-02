import { useEffect, useState } from "react";

export function useDebounce(value, delay = 0) {

    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {

        const timeoutId = window.setTimeout(() => {
            setDebounceValue(value)
        }, delay)

        return() => {
            window.clearTimeout(timeoutId)
        }

    },[value])

    return debounceValue

}