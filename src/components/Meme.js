

import memesData from "../assets/memesData.js"

export default function Meme() {
  
  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    console.log(url)
  }

  return (
      <main>
          <div className="form">
              <input 
                  type="text"
                  placeholder="Top text"
                  className="form--input"
              />
              <input 
                  type="text"
                  placeholder="Bottom text"
                  className="form--input"
              />
              <button 
                  className="form--button"
              >
                  Get a new meme image 🖼
              </button>
          </div>
      </main>
  )
}