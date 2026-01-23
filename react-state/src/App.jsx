import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'

import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
    </>
  )
}


