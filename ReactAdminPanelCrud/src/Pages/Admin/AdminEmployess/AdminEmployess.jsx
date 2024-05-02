import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
function AdminEmployess() {
  const [data, setdata] = useState([])

useEffect(() => {
  datalar()
}, [])
async function GetProducts() {
  const response = await fetch('http://localhost:3000/products');
  const datas = await response.json();
  return datas;
}
datalar()
async function datalar(){
  const data=await GetProducts()
  setdata(data)
}
// /////////////
async function DeleteDetail(id) {
  const response = await fetch("http://localhost:3000/products/" + id, {
    method: "DELETE"
  });
  const data = await response.json();
  return data;
}


  return (
    <>
    <table style={{border:"1px solid black"}}><th>Title</th><th>Price</th><th>Edit</th><th>Delete</th>
    {data.map((x)=>(
      
      <tr style={{border:"1px solid black"}}><td style={{border:"1px solid black"}}>{x.title}</td><td style={{border:"1px solid black"}}>{x.price}</td><td  style={{border:"1px solid black"}}><Link to={`/admin/logout/${x.id}`}  >Edit</Link></td><td style={{border:"1px solid black"}}><button onClick={()=>{DeleteDetail(x.id)}}>Delete</button></td></tr>
    ))}
    </table>
    
    
    </>
  )
}

export default AdminEmployess