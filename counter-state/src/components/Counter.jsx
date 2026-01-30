import React from 'react'

export default function Counter() {
    
    const [count, setCount] = React.useState(0)
    
    function increaseCounter() {
        setCount(prevCount => prevCount + 1)
    }

    function decreaseCounter() {
        setCount(prevCount => prevCount - 1)
    }

    function resetCounter() {
        setCount(0)
    }

    return (
        <>
        <h2>Teller: {count}</h2>
        <button onClick={increaseCounter}>Pluss</button>
        <button onClick={decreaseCounter}>Minus</button>
        <button onClick={resetCounter}>Reset</button>
        </>
    )
}