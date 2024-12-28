
export default function Header(){

    return(
        <header>
            <div className="logo">
                <div className="image">
                <img src="./images/fashion1.jpg" alt="" />
                </div>
                <h3>Fashion</h3>
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
                <div className="cart-icon">
                    <h4>🛒</h4>
                </div>

                <div className="cart-quantity">
                    <h6>3</h6>
                </div>
            </div>
        </header>
    )
}