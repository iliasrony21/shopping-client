import React, { useEffect, useState } from 'react'
import { addToDb, getToCart } from '../../utilities/fakedb'
import Cart from '../Cart/Cart'
import Product from '../Product/Product'
import './Shop.css'
const Shop = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  useEffect(() => {
    const storedCart = getToCart()
    const savedCart = []
    for (const id in storedCart) {
      const addProduct = products.find(product => product.id === id)
      if (addProduct) {
        const quantity = storedCart[id]
        addProduct.quantity = quantity
        savedCart.push(addProduct)
      }
    }
    setCart(savedCart)
  }, [products])

  const addToCart = selectedProduct => {
    let newCart = []
    const exists = cart.find(product => product.id === selectedProduct.id)
    if (!exists) {
      selectedProduct.quantity = 1
      newCart = [...cart, selectedProduct]
    } else {
      const rest = cart.filter(product => product.id !== selectedProduct.id)
      exists.quantity = exists.quantity + 1
      newCart = [...rest, exists]
    }
    // console.log(product)

    setCart(newCart)
    addToDb(selectedProduct.id)
  }
  return (
    <div className='shop-container'>
      <div className='product-container'>
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
      <div className='Order-detail'>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  )
}

export default Shop
