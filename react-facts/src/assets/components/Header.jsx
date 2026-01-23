import ReactLogo from '../react.svg'

export default function Header() {
  return (
    <>
    <header className="header">
      <img src={ReactLogo} className="header--icon" />
      <h1 className="header--title">React Facts</h1>
      <h3 className="header--subtitle">React Course - Project 1</h3>
    </header>
    </>
  )
}

export { Header }