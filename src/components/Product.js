import React, { useState } from 'react';
import '../style/product.css';


function Product({ setCateg, products }) {
  const [productStates, setProductStates] = useState(products.map(() => false));
  const toggleDescription = (index) => {
    const newProductStates = [...productStates];
    newProductStates[index] = !newProductStates[index];
    setProductStates(newProductStates);
  };

  return (
    <>
      <div>
        <ul className='list-cat'>
        <li tabIndex={"0"} onClick={() => setCateg('')}>All</li>
          <li tabIndex={"0"} onClick={() => setCateg("women's clothing")}>women's clothing</li>
          <li tabIndex={"0"} onClick={() => setCateg("electronics")}>electronics</li>
          <li tabIndex={"0"} onClick={() => setCateg("jewelery")}>jewelery</li>
          <li tabIndex={"0"} onClick={() => setCateg("men's clothing")}>men's clothing</li>
        </ul>
      </div>
      <>
        {products.map((product, index) => (
          <div key={product.id} className='card'>
            <div className='product-info'>
              <img src={product.image} width={100} alt={product.title} />
              <p>{product.title}</p>
              <div className='price-rating-container'>
                <h3>{product.price} $</h3>
                <img src={`image/${Math.floor(product.rating.rate)}.png`} width={80} height={80} />
              </div>
              <p onClick={() => toggleDescription(index)} className='clickBtn'>
                {productStates[index] ? 'Masquer' : 'Afficher'}
              </p>
              {productStates[index] && <p>{product.description}</p>}
            </div>
          </div>
        ))}
      </>
    </>
  );
}

export default Product;
