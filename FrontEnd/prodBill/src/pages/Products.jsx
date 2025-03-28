import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import '../css/Products.css'
import { NavLink } from 'react-router-dom';

const Products = ()=>{

    let [product,Setproduct] = useState([]);
    let [isPresent,setPresent] = useState(false);
    let [productId,setProductId] = useState(null);

    let data = async()=>{
        try
        {
            let res = await axios.get('http://localhost:8080/prodBill/FetchAll');   
            Setproduct(res.data);           
        }catch(e)
        {
            console.log(e);
        }
    }
    
    useEffect(()=>{
       data();
    },[product])

    let deleteProduct = (id)=>{
        if(id)
        {   
            setPresent(true)
            setProductId(id)

        }
        else
        {
            setPresent(false);
        }
    }
    let confirmDelete =async ()=>{
            try{
                let data = await axios.delete(`http://localhost:8080/prodBill/deleteByid?i=${productId}`)
                setPresent(false);
                
            }catch(e)
             {
                console.log(e);
            }     
     }

    return(
        <div className='products'>
            <div className="product-Top">
            <p></p>
            <NavLink to={"/products/create"}><button>Create</button></NavLink>
            </div>
           
           <div className='table'>
            <table className='allTable'>
                 <thead className='tablehead'>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Description</th>
                        <th>category</th>
                        <th className='btnAction'>Actions</th>
                    </tr>
                    </thead>
            {
                product.map((pro)=>{
                    return(   
                            <tbody key={pro.id} className='tableBody' >
                                <tr>
                                        <td className='tableData'>{pro.id}</td>
                                        <td className='tableData'>{pro.pname}</td>
                                        <td className='tableData'>{pro.price}</td>
                                        <td className='tableData'>{pro.quantity}</td>
                                        <td className='tableData'>{pro.description}</td>
                                        <td className='tableData'>{pro.category}</td>
                                        <td className='actions'>
                                        <NavLink to={`/product/update/${pro.id}`}><button>Update</button></NavLink>       
                                        <button onClick={()=>deleteProduct(pro.id)}>Delete</button>
                                        </td>
                                </tr>
                            </tbody>
                    )
                })

            }
            </table>
            </div>
            {isPresent &&
            (
                <div className='modal-overlay'>
                    <div className='modal'>
                        <p>Are you sure you want to delete this product?</p>
                        <button onClick={()=>confirmDelete()}>Yes</button>
                        <button onClick={()=>setPresent(false)}>No</button>
                
                    </div>
                </div>
            )
            }
       
        </div>
    )
}

export default Products;