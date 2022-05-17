import React from 'react';
import './Home.css';
import Product from './Product';


function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img
            className='home__image'
            src="https://static.vecteezy.com/system/resources/previews/001/884/549/non_2x/abstract-blue-sky-water-color-background-illustration-texture-for-design-free-photo.jpg"
            alt=""
            />
            <div className="home__row">
                <Product 
                id="12321341"
                title='Harry Potter: Chamber of Secrets (Paperback)' price={399} image='https://images-na.ssl-images-amazon.com/images/I/51mFoFmu0EL._SX335_BO1,204,203,200_.jpg' rating={4}/>
                
                <Product 
                id="34167281"
                title='Dan Brown: Angels and Demons(Hard Cover)' price={799} image='https://images-na.ssl-images-amazon.com/images/I/61d1QJ0tPhL.jpg' rating={5}/>
                
            </div>

            <div className="home__row">
            <Product 
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={15399}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"/>
            
            <Product 
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={7699}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"/>
            
            <Product 
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={47999}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"/>
            </div>
            
            <div className="home__row">
            <Product 
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={79999}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"/>
                
            </div>
        </div>
    </div>
  )
}

export default Home