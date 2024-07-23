import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  let[productsArr,setproductsArr]= useState([]);

  useEffect(()=>{
    getProduts();
  },[])

  let getProduts= async ()=>{

 let reqOptions = {
 method:"GET"
 }

 let JSONData = await  fetch("https://fakestoreapi.com/products",reqOptions);

 let JSOData = await JSONData.json();

 setproductsArr(JSOData);

 console.log(JSOData)
  }



  return (
    <div className="App">
      {/* <button onClick={()=>{
        getProduts();
      }}>Get Products</button> */}

 <div className="productcrop">

    {productsArr.map((ele,i) => {
   return (
  <div className="productdiv"key={i}>

   <img
    title={ele.description}
    className="productpic"
     src= {ele.image}>
     </img>

   <p>{ele.title}</p>

   <p className="pricecolor">Rs.{ele.price}/- only</p>

   </div>

    );
    
    })}

    </div>

    </div>
  );
}

export default App;
