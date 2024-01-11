import React, { useState } from 'react';
import fakeData from '../../fakeData';
import "./Shop.css";
import Product from '../Product/Product';

const Shop = () => {
    const fast10 = fakeData.slice(0,80);
    const [products, setProduct] = useState(fast10);
    console.log(fakeData);
    return (
        <div>
            <h1>This is Food</h1>
            <div className="food-container">
                <div className="food-details">
                    {
                        products.map(pd => <Product product = {pd}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <h1>This is cart</h1>
                </div>
            </div>
            
        </div>
    );
};

export default Shop;