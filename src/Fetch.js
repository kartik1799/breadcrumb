import React, { useEffect, useState } from 'react'

function Fetch() {
    const [data,setData]=useState([])

    useEffect(() => {
       const fetchData=async ()=>{
            const res=await fetch('https://api.punkapi.com/v2/beers')
            const data=await res.json();
            const method=await data.map((i)=>(i.method.mash_temp))
            const result=method.map((i)=>console.log(...i))
            setData(method);
            console.log(method)
       }
       fetchData();
      }, []);

  return (
    <div>
        {data.map((i)=>{
            return <p>{JSON.stringify(i,null,2)}</p>
        })}
    </div>
  )
}

export default Fetch;