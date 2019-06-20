import React, { useState } from "react"

const Counter = () => {
  const [likes, changeLike] = useState(0)

  return (
    <div className="counter">
      <h3>Click the button to like the post</h3>
      <h3>Like {likes}</h3>
      <button onClick={() => changeLike(likes + 1)}>Click me</button>
    </div>
  )
}

export default Counter
