import { useState } from 'react'


export const App = () =>{
  let value = 0;
  const [name, setName] = useState(value);

const handlername = (e) =>{
  setName(name +1)}

const handlernamemunis = (e) =>{
    setName(name -1)
}
    const handlerreset = (e) =>{
      setName(value)
}
  return (
    <>
      <h1>Soy{name} </h1>
      <button onClick={handlername} >click here </button>
      <button onClick={handlernamemunis} >click here </button>
      <button onClick={handlerreset} >click here </button>
      <div>
        Hola
      </div>

    </>
  )
}

export default App
