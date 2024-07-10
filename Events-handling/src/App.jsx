import { useState } from 'react'
import './App.css'

function App() {
  const [form, setForm] = useState({})

  const handleClick =() =>{
    alert("i am clicked")
  }
  const handleChange = (e) =>{
    setForm({...form, [e.target.name]:e.target.value})
    console.log(form)
  }
  return (
    <>
  <div className="button">
    <button onClick={handleClick} >Click me</button>
  </div>
  <input type="text" name='email' value={form.email?form.email:""} onChange={handleChange} />
  <input type="text" name='phone' value={form.phone?form.phone:""} onChange={handleChange} />
    </>
  )
}

export default App
