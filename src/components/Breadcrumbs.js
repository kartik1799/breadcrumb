import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../App.css"

function Breadcrumbs() {
    const {pathname}=useLocation();
    const pathnames=pathname.split("/").filter((i)=>i)
    console.log(pathnames);
    let breadcrumbPath="";

  return (
    <div className='breadcrumbs'>
        {pathnames.length>0 && <Link to="/">Home</Link>}
        {pathnames.map((name,index)=>{
            breadcrumbPath+=`/${name}`
            const isLast=index===pathnames.length-1;
            return isLast?<span>/ {name}</span>:(
                <span>/ <Link to={breadcrumbPath}>{name}</Link></span>
            )
        })}
    </div>
  )
}

export default Breadcrumbs