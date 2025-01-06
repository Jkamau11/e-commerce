import { useEffect, useState } from 'react'
import '../Styles/App.scss'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

function App() {

  const[body, setBody] = useState(true)

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data =>{
      setProducts(data)
    })
  }, [])

  // console.log(products)

  return (
    <>
      <div className='application'>
        <Header setBody={setBody} />
        {
          body ? <Body Products={products} /> : "cart"
        }
        
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </>
  )
}
export default App
