import React, { useEffect, useState } from 'react'
import Product from './Product';
import { Link } from 'react-router-dom';
import "./App.css"

function Home() {

    const [trendingProducts,setTrendingProducts]=useState([]);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        fetch("https://dummyjson.com/products").then(res=>res.json())
        .then(res=>{
            const trending=res.products.slice(0,6);
            setTrendingProducts(trending);
            setLoading(true);
        })
    },[])
  return (
    <div className='layout'>
        <h2>Home</h2>
        <h2>Trending 🔥</h2>
        <div className='products__style'>
            {trendingProducts.map((i)=>{
                return <div className='product__card'>
                    <Link style={{textDecoration:'none'}} to={`/products/${i.id}`}>
                        <h3>{i.title}</h3>
                        <img style={{width:'60%',height:'250px',borderRadius:'20px',objectFit:'cover'}} src={i.thumbnail} alt="" />
                        <p>{i.description.slice(0,50)}...</p>
                        <h3 style={{color:'black'}}>${i.price}</h3>
                    </Link>
                </div>
            })}
        </div>
        <Link to={`/products`}>
            {loading && <button style={{backgroundColor:'black',color:'white',padding:'10px',marginTop:'10px',marginBottom:'10px',cursor:'pointer'}}>View More</button>}
        </Link>
    </div>
  )
}

export default Home