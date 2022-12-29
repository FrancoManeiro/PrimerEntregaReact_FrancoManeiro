import { useState } from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";




function App() {
  return(
    <>
      <NavBar />
      <div style={{padding:"20px"}}>
      <ItemListContainer greeting={"Iguana Verde"} />
      </div>
    </>
  )
}

export default App
