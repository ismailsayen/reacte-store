import React from 'react'
import Product from './Product'
function Contents({products,setCateg}) {
  return (
    <main className='container'>
        <Product products={products} setCateg={setCateg}/>
    </main>
  )
}

export default Contents