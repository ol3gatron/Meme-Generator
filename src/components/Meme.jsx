import memesData from "../data"

function Meme() {
  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomArrayNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomArrayNumber].url

    console.log(url)
  }

  return (
    <div className="main">
      <div className="form">
        <div className="main--inputs">
          <input type="text" className="first-line" placeholder="Top text" />
          <input type="text" className="bottom-line" placeholder="Bottom text"/>
        </div>
        <button onClick={getMemeImage}>Get a new meme image🖼️</button>
      </div>
    </div>
  )
}

export default Meme