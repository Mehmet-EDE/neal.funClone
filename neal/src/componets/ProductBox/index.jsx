import React, { useState } from 'react'
import './style.css'
import products from '../../product.json'
function ProductBox() {
 const [items, setItems] = useState(products)
 return (
  <div className='itemList'>
   {
    items.map((item, index) => (
     <div key={index} className='gridList'>
      <div className='innerGridList'>
       <div>
        <img className='productImg' src={item.image} alt='' />
        <h3>{item.productName}</h3>
        <h3 className='productPrice'> $ {item.productPrice}</h3>
       </div>
       <br /><br /><br />
       <div className='gridContainer'>
        <button className='sellBtn'>Sell</button>
        <input type="text" className='countInput' />
        <button className='buyBtn'>Buy</button>
       </div>
      </div>
      <br />
     </div>
    ))
   }
  </div>
 )
}

export default ProductBox