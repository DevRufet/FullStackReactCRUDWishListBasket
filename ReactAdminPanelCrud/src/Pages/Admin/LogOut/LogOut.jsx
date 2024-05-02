import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
function LogOut() {

  const [datalarim, setdatas] = useState({title:"",price:""})
  let { id } = useParams();
  useEffect(() => {
   datas()
  }, [])
  
  
  async function getDetails(id) {
    const response = await fetch("http://localhost:3000/products/"+id);
    const data = await response.json();
    return data;
  }
  async function datas() {
    let datalar = await getDetails(id);
    setdatas(datalar);
  }
  


// ////////////////////
  async function UpdateDetail(id) {
    const response = await fetch("http://localhost:3000/products/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ title:datalarim.title, price: datalarim.price }),
    });
    const data = await response.json();
    return data;
  }

  return (
   <>
   <h1>Edit Page</h1>
   <input type="text" value={datalarim.title} onChange={(e)=>setdatas({...datalarim,title:e.target.value})}/>
   <br />
   <input type="text" value={datalarim.price} onChange={(e)=>setdatas({...datalarim,price:e.target.value})}/>
   <br />
   <button onClick={()=>UpdateDetail(id)}>Edit</button>
   
   </>
  )
}

export default LogOut