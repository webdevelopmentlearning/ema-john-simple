import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {img,name,seller,price,ratings,stock}=props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h5 style={{paddingLeft:"14px"}}>{name}</h5>
            <div className="product-info">
                <p>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating {ratings} Stars</small></p>
                <p><small>Stock: {stock}</small></p>
            </div>
            <button
             onClick={()=>props.handleAddToCart(props.product)}
            className='btn-cart'
            >Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;