import React from 'react';
import './Payment.css';
import {Link} from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";


function Payment() {
    const [{ basket , user}, dispatch] = useStateValue();
  return (
    <div className='payment'>
          <div className='payment__container'>
             
          <h1> Checkout (<Link to="/checkout">{basket?.length} items</Link>)
          </h1>
               
            
              
              
              
              <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>123 Lane Street</p>
                    <p>Address</p>
                </div>
              </div>
              <div className='payment__section'>
              <div className='payment__title'>
                    <h3>Review Items and Delivery</h3>
                </div>
                <div className='payment__items'>
                    {basket.map(item =>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
              </div>
              <div className='payment__method'>
              <div className='payment__title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment__details'>
                    {/*stripe */}
                </div>
              </div>
          </div>
    </div>
  )
}

export default Payment