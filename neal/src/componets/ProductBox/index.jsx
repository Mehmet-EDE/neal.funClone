import React, { useState } from 'react'
import './style.css'
import { useSelector, useDispatch } from 'react-redux';
import products from '../../product.json'
function ProductBox() {
 const items = useSelector(state => state.product.items);
 const money = useSelector(state => state.product.money);
 const initialMoney = useSelector(state => state.product.initialMoney);

 // const item = items.find((tmp) => tmp.id === id);
 const dispatch = useDispatch();

 const [count, setCount] = useState(item.count);
 const [isBuyable, setisBuyable] = useState(false);
 const [isSellable, setisSellable] = useState(true);
 let maximumBuy = Math.floor(money / item.productPrice);
 let maximum = Number(count) + Number(maximumBuy);
 const buyItem = (e) => {
  var a = items
  debugger
 }
 return (
  <div className='itemList'>
   {
    items.map((item) => (
     <div key={item.id} className='gridList'>
      <div className='innerGridList'>
       <div>
        <img className='productImg' src={item.image} alt='' />
        <h3>{item.productName}</h3>
        <h3 className='productPrice'> $ {item.productPrice}</h3>
       </div>
       <br /><br /><br />
       <div className='gridContainer'>
        <button className='sellBtn'>Sell</button>
        <input type="text" value={count} className='countInput' />
        <button className='buyBtn' onClick={buyItem}>Buy</button>
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