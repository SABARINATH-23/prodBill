import { useEffect, useState } from "react"
import axois from 'axios';
import Products from "./Products";

const FetchProduct = ()=>{

let [id,setId] = useState(null);
let [product,SetProduct] = useState(null)


let Data = async ()=>{
    try{
        let res = await axois.get(`http://localhost:8080/prodBill/getProduct/${id}`);
        SetProduct(res.data);
        console.log(product);
    } catch(err)
    {
        console.log(err);
        // alert("Insert Any Product Id");
    }
  
}



let fetchData = (e)=>{
    e.preventDefault();
    Data();
}


return(
    <>
       
        {
            <div>
               <div>
                 <form onSubmit={fetchData}>
                <input type="text" name="id" placeholder="Enter Id" onChange={(e)=>setId(e.target.value)} required></input>
                <button>Get Product</button>
                </form>   
               </div>
               {
                (product===null)?<h1>No Products</h1>:!product ?(<h1>Invalid Id</h1>):
                <div>
                
                   <p>{product.id} </p>
                   <p>{product.name}</p>
                   <p>{product.price}</p>
                   <p>{product.quantity}</p>
                   <p>{product.description}</p>
                   <p>{product.category}</p>

               </div>
               }
            </div>
           
        }
       
    </>
)

}

export default FetchProduct 