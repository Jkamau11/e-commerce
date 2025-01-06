/* eslint-disable react/prop-types */
import numeral from 'numeral'
import { useState } from 'react';
export default function Products(props){

    const [cart] = useState([])

    // console.log(props)

    const Products = props.fetchedProducts;

    const usdToKes = 129.25;

    const allProducts = Products.map((product, index)=>{
        const price = (product.price * usdToKes).toFixed(4)
        const formattedNumber = numeral(price).format('0,0.00');
        
        // function to pick and print data of the product when a button is clicked
        function addToCart(){
            cart.push(product)
            console.log(cart)
        }
        return(
                <div key={index} className="mapped-details">
                    <img src={product.image} className="product-image" alt="" />
                    <p>{product.title}</p>
                        <div className="price">
                            <h6>KES : {formattedNumber}</h6>
                            <div className="cart">
                                <p>{product.rating.count} items left</p>
                                <button onClick={addToCart}>Add to cart</button>
                            </div>
                        </div>
                </div>
        )
    })
    return(
        <div className="products">
            {allProducts}
        </div>
    )
}