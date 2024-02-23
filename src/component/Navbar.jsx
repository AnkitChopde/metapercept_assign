import React from 'react'

const Navbar = () => {
  return (
    <div style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"10px 15px",
        margin:0,
        borderBottom:"0.1p solid grey"

    }}>
        <div>Title</div>
        <div style={{width:"30%",display:"flex",gap:"20px"}}>
           <div >
           <ul style={{display:"flex",justifyContent:"space-around",listStyle:"none"}}>
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
           </div>
           <button>
                Button
            </button>
        </div>
      
    </div>
  )
}

export default Navbar
