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

  function handleChange(e) {
    const {name, value} = e.target
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }))
  }

  return (
    <div className="main">
      <div className="form">
        <div className="main--inputs">
          <input
            type="text"
            className="first-line"
            placeholder="Top text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            className="bottom-line"
            placeholder="Bottom text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleClick}>Get a new meme image🖼️</button>
      </div>
      <div className="meme">
      <img src={meme.imageUrl} alt="" className="meme--image"/>
      <h2 className="meme--text top">{meme.topText}</h2>
      <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  )
}

export default Meme