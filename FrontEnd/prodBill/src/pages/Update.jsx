import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Update = () => {

  let {id} = useParams();
  let navigate = useNavigate("/products")

  let getProduct = async (id)=>{
   let data =  await axios.get(`http://localhost:8080/prodBill/getProduct/${id}`);
   setExistProduct(data.data);
  }
  
   let [existProduct,setExistProduct] = useState(
    {
      pid:id || "",
      pname:"",
      price:"",
      quantity:"",
      description:"",
      category:""
    }
  )

  let productData = async (existProduct)=>{
    try{
       await axios.put("http://localhost:8080/prodBill/updateProduct",existProduct)
    }
    catch(e)
    {
      console.log(e);
    }
  }
  
  console.log(existProduct.id)

  let handleInput = (e)=>{
    setExistProduct(()=>({
      ...existProduct,[e.target.name]:e.target.value
    }))
  }

  useEffect(()=>{
    getProduct(id);
  },[])

  let handleSubmit = (e)=>{
    e.preventDefault;
    productData(existProduct);
    navigate('/products');
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Id</label>
        <input type='tel' name='pid' value={existProduct.id ||""}  onChange={handleInput} ></input>
        <label htmlFor=''>Name</label>
        <input type="text" name='pname' value={existProduct.pname || ""} onChange={handleInput}></input>
        <label htmlFor=''>Price</label>
        <input type="tel" name='price' value={existProduct.price || ""} onChange={ handleInput}></input>
        <label>Quantity</label>
        <input type='tel' name='quantity' value={existProduct.quantity ||""} onChange={handleInput}></input>
        <label>Description</label>
        <input type='text' name='description' value={existProduct.description || ""} onChange={handleInput}></input> 
        <label>category</label>
        <input type='text' name='category' value={existProduct.category || ""} onChange={handleInput}></input>
        <button type='submit'>Submit</button>
        <NavLink to={'/products'}><button>Back</button></NavLink>
        </form>
    </>
  )
}

export default Update