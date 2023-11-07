import React, { useEffect, useState } from "react";
import Contents from "./components/Contents";

function App() {
  const URL = "https://fakestoreapi.com/products"
  const [categ, setCateg] = useState('')
  const [products, setProducts] = useState([])
  useEffect(async () => {
    fetch(URL)
      .then((response) => response.json().
        then((data) => setProducts(data)))
  }, [])
  return (
    <div style={{margin:"0px"}} >
        <ul className='list-cat underline'>
          <li tabIndex={"0"} onClick={() => setCateg('')}>All</li>
          <li tabIndex={"0"} onClick={() => setCateg("women's clothing")}>women's clothing</li>
          <li tabIndex={"0"} onClick={() => setCateg("electronics")}>electronics</li>
          <li tabIndex={"0"} onClick={() => setCateg("jewelery")}>jewelery</li>
          <li tabIndex={"0"} onClick={() => setCateg("men's clothing")}>men's clothing</li>
        </ul>
      <Contents setCateg={setCateg} products={categ === '' ? products : products.filter((e) => (((e.category).toLowerCase()) === (categ.toLowerCase())))} />
    </div>
  );
}

export default App;
