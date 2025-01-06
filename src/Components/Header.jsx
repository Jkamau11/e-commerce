/* eslint-disable react/prop-types */

export default function Header({setBody}){

    return(
        <header>
            <div className="logo">
                <div className="image">
                <img src="./images/fashion1.jpg" alt="" />
                </div>
                {/* setting the state variable called body to true when a user click on h3(Fashion) */}
                <h3 onClick={()=>setBody(true)}>Fashion</h3>
            </div>

            <div className="navigation">
                    <li><a href="">CATALOGUE</a></li>
                    <li><a href="">FASHION</a></li>
                    <li><a href="">FAVOURITE</a></li>
                    <li><a href="">LIFESTYLE</a></li>
            </div>

            <div className="register">
                <button>SIGN UP</button>
            </div>

            {/* cart section */}

            <div className="actual-cart">
                {/* setting the state variable called body to false when a user click on shopping-cart */}
                <div className="cart-icon" onClick={()=>setBody(false)}>
                    {/* <h4>🛒</h4> */}
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>

                <div className="cart-quantity">
                    <h6>3</h6>
                </div>
            </div>
        </header>
    )
}