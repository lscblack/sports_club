import { useState } from "react";

function App() {
  const [num1, setNum1] = useState()
  const [num2, setNum2] = useState()
  const [result, setResult] = useState(null)
  // add two number
  const add = () =>{
    setResult(parseInt(num1)+parseInt(num2))
  }
  // add two number
  const sub = () =>{
    setResult(num1-num2)
  }
  return (
    <>
      <div className="p-2 border border-blue-200 m-auto mt-10 w-1/4">
        <input type="text" value={num1} onChange={(e) => setNum1(e.target.value)} className="border-1 outline-none border-blue-100 w-full mb-3" placeholder="Enter Age" id="age" />
        <input type="text" value={num2} onChange={(e) => setNum2(e.target.value)} className="border-1 outline-none border-blue-100 w-full mb-3" placeholder="Enter Age" id="age" />
        <button type="button" className="bg-amber-500 px-4 text-white " onClick={() => add()}>+</button>
        <button type="button" className="bg-blue-500 px-4 text-white " onClick={() => sub()}>-</button>
        <button type="button" className="bg-green-500 px-4 text-white " onClick={() => check_age()}>*</button>
        <button type="button" className="bg-red-500 px-4 text-white " onClick={() => check_age()}>/</button>
        <div className="p-5 w-full bg-blue-50 mt-5">
        {result&&result}
        </div>
      </div>
    </>
  )
}

export default App
