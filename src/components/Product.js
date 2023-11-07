import React, { useState } from "react";
import "../style/product.css";

function Product({ setCateg, products }) {
  const [productStates, setProductStates] = useState(products.map(() => false));
  const toggleDescription = (index) => {
    const newProductStates = [...productStates];
    newProductStates[index] = !newProductStates[index];
    setProductStates(newProductStates);
  };

  return (
    <>
      <>
        {products.map((product, index) => (
          <div key={product.id} className="card">
            <div className="product-info">
              <img src={product.image} width={100} alt={product.title} />
              <p className="product-title">{product.title}</p>
              <div className="price-rating-container">
                <h3>{product.price} $</h3>
                <img
                  src={`image/${Math.floor(product.rating.rate)}.png`}
                  width={80}
                  height={80}
                  alt="product img"
                />
              </div>
              <p onClick={() => toggleDescription(index)} className="clickBtn">
                {productStates[index] ? "Masquer" : "Afficher"}
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
