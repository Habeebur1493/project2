import React from 'react'

const App = () => {
  const ClickHandler = (msg) => {
    console.log(msg);
  };
  return (
    <div>

    <h1 className="text-3xl font-bold underline text-center bg-yellow-300">Hello world!</h1>

    <button onClick={() => ClickHandler("Button Clicked")}
    className="bg-blue-500 text-white font-bold py-2 px-4 rounded m-5">
      Click Me
    </button>

    <a target="_blank" href= "https://jsonplaceholder.typicode.com/">Users</a>
    

    </div>
  )
}

export default App

