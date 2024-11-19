import React from 'react'

const App = () => {
  const ClickHandler = () => {
    console.log("Button clicked")
  }
  return (
    <div>

    <button>
      onClick={ClickHandler}
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
    </button>

    <h1 className="text-3xl font-bold underline text-center bg-yellow-300">
      Hello world!
    </h1>

    </div>
  )
}

export default App

