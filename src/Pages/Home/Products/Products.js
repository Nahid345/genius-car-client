import React, { useEffect, useState } from 'react';
import ProductsItem from './ProductsItem';

const Products = () => {

    const[products, setProducts] =useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (

        <div>
            <div className='text-center mb-6'>
             
                <p className='text-l font-bold text-orange-600 mb-2'>Popular Products</p>
                <div className='text-3xl font-bold mb-2 '>Browse Our Products</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cumque <br /> quod aut, officiis ipsa esse culpa tempore earum, accusantium pariatur eius labore repudiandae  </p>

            </div>
          <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
               products.map(product => <ProductsItem 
               
                key={product._id}
                product ={product}
               
               ></ProductsItem>)
            }
          </div>
        </div>

    );
};

export default Products;