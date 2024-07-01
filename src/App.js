import { useEffect, useState } from "react"
import ProductsItems from './ProductItems'
import './App.css'
function App(){
  let [inputData,setInput]=useState("Search Item")
  let [products,setList] = useState([])
  useEffect(()=>{
    fetchingProducts()
  },[])
  async function fetchingProducts(){
    let res= await fetch("https://fakestoreapi.com/products")
    let productList = await res.json();
    //console.log(productList)
    setList(productList)
  }
  if(products.length===0)//products(useState)
  {
    return("fetching the Data")
  }
 
  return(
    <>
    <div className="header">
    <ul>
      <li><h3>Home</h3></li>
      <li><h3>Wishlist</h3></li>
      <li><h3>Orders</h3></li>
      <li><h3>Cart</h3></li>
      <li><h3>Account Details</h3></li>
      <li><input type="text" value={inputData} onChange={(e)=>{setInput(e.target.value)}}/></li>
      <li><h1>CC Fashions</h1></li>
      <li><img src={"/Capture.PNG"}></img></li>
    </ul>
   
    </div>
    <div className="Product" >
    {
    products.map((p)=>{
    return (
      <ProductsItems{...p}></ProductsItems>

    )})
    }
    </div>
    </>
     
   
  )
}

export default App
// import { useEffect } from "react"
// import { useState } from "react"

// function HooksExample(){
//   let [timer,setTimer] = useState(0)
//   let [Number,incrementNumber] = useState(5)
//   useEffect(()=>{
//     console.log("i am useEffect Hook ")
//   },[Number])

//   return(
//     <>
//     <h3>useEffect Hooks
//       {
//         console.log("inside Component")
//       }
//     </h3>
//     <h4>Timer : {timer}</h4>
//     <button onClick={()=>{
//       setTimer(timer+1)
//     }}>Timer Change</button>
//     <h4>Number : {Number} </h4>
//     <button onClick={()=>{
//       incrementNumber(Number+5)
//     }}>numberChange</button>
//     </>
//   )
// }

// export default HooksExample