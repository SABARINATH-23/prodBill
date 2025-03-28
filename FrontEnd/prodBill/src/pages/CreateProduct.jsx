import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const CreateProduct = ()=>{

    let navigate = useNavigate();
    let [product,Setproduct] = useState(
        {
            pname : '',
            price : '',
            quantity: '',
            description:'',
            category :''
        }
    
    )


    let handleInput = (e)=>{
        Setproduct((product)=>({
            ...product,[e.target.name]:e.target.value
        }))
       
    }
    let productData = async (product)=>{
     try
     {
        await axios.post('http://localhost:8080/prodBill/saveProduct',product)
        navigate("/products")
     }catch(e)
     {
        console.log(e)
     }
    }

    let handleSubmit =(e)=>{
        e.preventDefault();
        productData(product);
    }
    return(
        <>
          <form onSubmit={handleSubmit}>
                <input type="text"  name="pname" placeholder="Product Name" onChange={handleInput}></input>
                <input type="text"  name="price" placeholder="Enter Price" onChange={handleInput}></input>
                <input type="tel"  name="quantity" placeholder="Enter Quantity" onChange={handleInput}></input>
                <input type="text"  name="description" placeholder="Product Decription" onChange={handleInput}></input>
                <input type="text"  name="category" placeholder="Enter category" onChange={handleInput}></input>
                <button> Submit </button>
          </form>
        </>
    )


}
export default CreateProduct;