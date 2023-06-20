import { useState } from 'react'
import './App.css'


function App() {
   // useState is our tool to create state
  const [count, setcount] = useState(0) // count is our state, starts at 0

  return (
    <>
       {/* hooks are some fumctions that provides some state . Using hooks we can add interactivity to our web page */}
       <div>the count in {count} </div>
       <button onClick={()=> setcount(count+1)}> Update count</button>
    </>
  )
}

export default App


// In a React app, "state" is the information that can change over time. For example, if you have a counter app, the number that changes when you click a button is the "state" of that app.
// In React, hooks are special tools that let you manage the state of your app. The most common hook is called useState. It’s like a tool that lets you create and change the state.

// State:
// In React, state is the information that can change over time.
//"state" is used to store and update dynamic data that can change over time.


// Hooks:
// In React, hooks are special functions that let you use state and other features.