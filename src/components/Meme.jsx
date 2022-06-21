function Meme() {
  return (
    <div className="main">
      <form action="">
        <div className="main--inputs">
          <input type="text" className="first-line" placeholder="Top text" />
          <input type="text" className="bottom-line" placeholder="Bottom text"/>
        </div>
        <button>Get a new meme image🖼️</button>
      </form>
    </div>
  )
}

export default Meme