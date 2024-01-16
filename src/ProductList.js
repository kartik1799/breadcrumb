import React, { useEffect, useState } from 'react'
import "./App.css"
import { Link } from 'react-router-dom'

function ProductList() {
    const [products,setProducts]=useState([])

    useEffect(()=>{
        fetch("https://dummyjson.com/products").then(res=>res.json())
        .then(res=>{
            setProducts(res.products)
        })
    },[])
  return (
    <div className='layout'>
        <h2>All Products</h2>
        <div className='products__style'>
            {products.map((i)=>{
                return <Link style={{textDecoration:'none'}} to={`/products/${i.id}`}>
                <div className='product__card'>
                        <h3 style={{color:'black'}}>{i.title}</h3>
                        <img style={{width:'50%',height:'250px',borderRadius:'20px',objectFit:'cover'}} src={i.thumbnail} alt="" />
                        <p style={{color:'black'}}>{i.description.slice(0,50)}...</p>
                        <h3 style={{color:'black'}}>${i.price}</h3>
                        </div>
                    </Link>
            })}
        </div>
        </div>
  )
}

export default ProductList