import { useState } from 'react'
import './App.css';

function App() {

  const [showbtn, setshowbtn] = useState(false) // when true will show button 
  const [todo, settodo] = useState([
    {
      title: "Hey",
      desc : "i am a todo"
    },
    {
      title: "Hey Another todo",
      desc : "i am another todo"
    },
    {
      title: "Hey i am third todo",
      desc : "i am a third todo"
    },
  ])

  return (
    <>

      <h1>Vite + React</h1>

        {/* button will only appear when usestate is true otherwise  it will show none. This is called conditional rendering */}
        {/* if else rendering */}
      {showbtn?<button>showbtn is true</button> : <button>showbtn is false</button>}  

        {/* if rendering */}
      {/* {showbtn && <button>i will be shown only second button in clicked</button>} */}

      {/* rendering using list */}
      {todo.map(todo =>{
        return <div key={todo.title} > 
        <div>{todo.title}</div>
        <div>{todo.desc}</div>
        </div>
      })}
      
      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)} >
          Toggle showbtn
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
