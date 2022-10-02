import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './Product.css'
const Product = props => {
  const { img, name, seller, price, ratings } = props.product
  return (
    <div className='product-details'>
      <img src={img} alt='' />
      <div className='product-info'>
        <p className='name'>{name}</p>
        <p>Price: ${price}</p>
        <p>Manufacture:{seller}</p>
        <p>Ratings:{ratings}stars</p>
      </div>
      <button
        onClick={() => props.addToCart(props.product)}
        className='btn-cart'
      >
        <p className='btn-text'>Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  )
}

export default Product
