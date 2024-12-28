/* eslint-disable react/prop-types */
import { BrowserRouter, Routes, Route ,Link } from "react-router-dom"
import Products from "../Products/Products"
export default function Body(props){

    // console.log(props.Products)

    const firstWord = "LET'S"
    return(
        <> 
        <div className="all">
         <BrowserRouter >
                <body className="main-body">
                    <div className="head-line">
                            <div className="vision">
                                <h2>
                                    {firstWord} <br /> 
                                    EXPLORE <br />
                                    <mark >
                                    UNIQUE
                                    </mark>
                                    <br /> 
                                    CLOTHES
                                </h2>
                            </div>

                                <div className="caption">
                                    <p>Live for influential and innovative fashion !</p>
                                </div>
                                    <div className="all-buttons">
                                        <div className="shop-now">
                                            <button><Link to="/products" style={{color : 'white', textDecoration : 'none'}}>SHOP NOW</Link></button>
                                        </div>
                                        <div className="shop-now">
                                            <button><Link to="/" style={{color : 'white', textDecoration : 'none'}}>HOME</Link></button>
                                        </div> 
                                    </div>
                        </div> 
                    
                        <div className="fashion-on">
                            {/* <img src="./images/fashion-on..png" alt="" /> */}
                        </div>
                </body>

                <Routes>
                <Route path="/products" element={<Products fetchedProducts ={props.Products} />} />
            </Routes>
        </BrowserRouter>
        </div>            
        </>
    )
}