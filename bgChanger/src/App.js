import { useState } from "react";



function App() {
  let [color,setColor] = useState("olive")
  


  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 rounded-full "style={{backgroundColor:"black", color:"white"}}onClick={()=> setColor("black")}
          >black</button>
          <button className="outline-none px-4 rounded-full "style={{backgroundColor:"blue", color:"white"}}onClick={()=> setColor("blue")}>blue</button>
          <button className="outline-none px-4 rounded-full "style={{backgroundColor:"orange", color:"white"}}onClick={()=> setColor("orange")}>orange</button>
          <button className="outline-none px-4 rounded-full "style={{backgroundColor:"pink", color:"white"}}onClick={()=> setColor("pink")}>pink</button>
          <button className="outline-none px-4 rounded-full "style={{backgroundColor:"green", color:"white"}}onClick={()=> setColor("green")}>green</button>
          <button className="outline-none px-4 rounded-full "style={{backgroundColor:"red", color:"white"}}onClick={()=> setColor("red")}>red</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
