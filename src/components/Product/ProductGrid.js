import React, {useContext} from 'react'
import { StateContext } from '../../context/GlobalState'
import ProductItem from './ProductItem'
import './product.css'
import Sidebar from '../Sidebar/Sidebar'


// ?lkasafk
import tessData from "../../tshirt.json"

function ProductGrid() {
    const {products} = useContext(StateContext)
    console.log(tessData);


    return (
      <div className="main">
        <Sidebar className="side"/>
        <section className="products">
          {products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </section>
      </div>
    ); 
}

export default ProductGrid
