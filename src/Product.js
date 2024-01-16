import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./App.css"

function Product() {
    const {id}=useParams()
    const [product,setProduct]=useState(null)
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`).then(res=>res.json())
        .then(res=>{
            setProduct(res)
            setLoading(true);
        })
    },[])

  return (
    <div className='product__detail'>
        <h2>Your Product Details :</h2>
        {loading?(<div className='product__cardl'>
            <img  style={{width:'50%',height:'250px',borderRadius:'20px',objectFit:'cover'}} src={product.thumbnail} alt="" />
            <div style={{marginLeft:'20px'}}>
            <h2>{product.title}</h2>
            <h3>${product.price}</h3>
            <p>{product.description}</p>
            </div>
            </div>):<p>loading...</p>}
    </div>
  )
}

export default Product