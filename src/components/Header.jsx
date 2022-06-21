import trollface from "../assets/trollface.png"

function Header() {
  return (
    <header>
      <img src={trollface} alt="logo" className="header--logo"/>
      <h1 className="header--title">Meme Generator</h1>
      <h3>React Course - Project 3</h3>
    </header>
  )
}

export default Header