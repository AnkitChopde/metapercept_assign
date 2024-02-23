import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CardSection = () => {
    const [data,setData] = useState([]);

    const fetchData=async()=>{
     try{
        const response = await axios.get("https://fakestoreapi.com/products")
        console.log(response)
       if(response){
        setData(response?.data)
       }
     }
     catch(err){
        console.log(err)
     }
    }

    useEffect(()=>{
      if(data?.length===0){
        fetchData()
      }
    },[data]);

  return (
    <div style={{marginTop:"3rem"}}>
        <h1 style={{textAlign:"center",fontWeight:"none"}}>Classes</h1>
        <p style={{width:"60%",margin:"auto"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nemo reiciendis ut expedita deleniti magnam, at quod iste autem in.</p>
        <div style={{display:"flex",flexWrap:"wrap",gap:"10px"}}>
            {
                data?.map((product,i)=>(
                    <>
                    <div key={product.id} style={{border:"0.1px solid grey",width:"24%",position:"relative"}}>
                        <img src={product.image} alt={product.category} width={270} height={150}/>
                        <div style={{padding:"10px"}}>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <button style={{padding:"10px 15px"}}>View</button>
                        </div>
                    </div>
                    </>
                ))
            }
        </div>
    </div>
  )
}

export default CardSection
