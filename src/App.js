import React, { useEffect, useState } from "react";
import Contents from "./components/Contents";

function App() {
  const URL = "https://fakestoreapi.com/products"
  const [categ, setCateg] = useState('')
  const [products, setProducts] = useState([])
  useEffect(async () => {
    fetch(URL)
    .then((response)=>response.json().
    then((data)=>setProducts(data)))
   } ,[])
  return (
    <div >
      <Contents setCateg={setCateg} products={categ === '' ? products : products.filter((e) => (((e.category).toLowerCase()) === (categ.toLowerCase())))} />
    </div>
  );
}

export default App;
