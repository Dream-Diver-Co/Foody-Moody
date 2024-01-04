import React, { useState } from 'react';
import fakeData from '../../fakeData';
import "./Shop.css";

const Shop = () => {
    const fast10 = fakeData.slice(0,80);
    const [products, setProduct] = useState(fast10);
    console.log(fakeData);
    return (
        <div>
            <h1>This is Food</h1>
            <div className="food-container">
                <div className="food-details">
                    <ul>
                    {
                        products.map(products => <li>{products.name}</li>)
                    }
                    </ul>
                </div>
                <div className="cart-container">
                    <h1>This is cart</h1>
                </div>
            </div>
            
        </div>
    );
};

export default Shop;