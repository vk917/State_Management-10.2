import { createContext, useContext, useState } from "react"

const BulbContext=createContext();

function ContextProvider({children}){
  const [bulbOn,setBulb]=useState(true);

  return <BulbContext.Provider value={{
    bulbOn: bulbOn,
    setBulb: setBulb
  }} >
    {children}
  </BulbContext.Provider>
}


const LightState=()=>{
  return <>
    <ContextProvider>
      <Light/>
      <ToggleLight/>
    </ContextProvider>
  </>
}

const Light=()=>{
  const {bulbOn}=useContext(BulbContext)
  return <>
    {bulbOn ? "Bulb On ": "Bulb Off"}
  </>
}

const ToggleLight=()=>{
  const {bulbOn,setBulb}=useContext(BulbContext);
  
  function toggle(){
    setBulb(!bulbOn)
  }

  return <>
    <button onClick={toggle}>Toggle Bulb</button>
  </>
}


const App=()=>{
  return <>
    <LightState/>
  </>
}

export default App



// import { useState } from "react"

// function App() {

//   return (
//     <>
//       <LightBulb/>
//     </>
//   )
// }

// function LightBulb(){
//   const [bulbOn,SetBulb]=useState(true);
//   return <>
//     <BulbState bulbOn={bulbOn}/>
//     <ToggleBulbState SetBulb={SetBulb}/>
//   </>
// }

// function BulbState({bulbOn}){
//   return <>
//     {bulbOn ? "Bulb On" : "Bulb Off"}
//   </>
// }

// function ToggleBulbState({SetBulb}){

//   function toggle(){
//     SetBulb( currentVal => !currentVal)
//   }
//   return <>
//       <button onClick={toggle}>Toggle Bulb</button>
//   </>
// }

// export default App
