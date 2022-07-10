import React from "react"
import memesData from "../data"
import {useState} from "react"

function Meme() {
  const [memes, setMemes] = useState(memesData)

  function getMemeImage() {
    const memesArray = memes.data.memes
    const randomArrayNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomArrayNumber].url
    return url
  }

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    imageUrl: "https://i.imgflip.com/1o00in.jpg",
  })

  function handleClick() {
    setMeme(prevState => {
      return {
        ...prevState,
        imageUrl: getMemeImage(),
      }
    })
  }

  return (
    <div className="main">
      <div className="form">
        <div className="main--inputs">
          <input type="text" className="first-line" placeholder="Top text" />
          <input type="text" className="bottom-line" placeholder="Bottom text"/>
        </div>
        <button onClick={handleClick}>Get a new meme image🖼️</button>
      </div>
      <img src={meme.imageUrl} alt="" />
    </div>
  )
}

export default Meme