import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const UpdateProduct = () => {
    const [name,setName]=React.useState('');
    const [price,setPrice]=React.useState('');
    const [category,setCategory]=React.useState('');
    const [company,setCompany]=React.useState('');
   const [error,setError]=React.useState(false);
   const[clicked,setClicked]=React.useState(false);
   const params=useParams();
   const navigate=useNavigate();
   useEffect(()=>{
    console.warn(params);
    getProductDetails();
   },[]);
   const getProductDetails=async ()=>{
     console.warn(params);
    let result =await fetch(`http://localhost:5000/product/${params.id}`);
    result=await result.json();
    // console.warn(result);
    setCompany(result.company);
    setCategory(result.category);
    setName(result.name);
    setPrice(result.price);
   }
   
   const UpdateProduct=async ()=>{
    
    // console.warn(name,company,price);
    let result=await fetch(`http://localhost:5000/product/${params.id}`,{
        method:'Put',
        body:JSON.stringify({name,price,category,company}),
        headers:{
            'Content-Type':"application/json"
        }

    });
    result =await result.json();
    console.warn(result);
    navigate('/');
    }
    return (
        <div className="product">
            <h1>Add Product</h1>
            <input className="inputBox" type="text" placeholder="Enter product name "
         value={name}  onChange={(e)=>{setName(e.target.value)}} />
     { clicked&&error&& !name && <span className="invalid-input">Enter valid name</span>}
            <input className="inputBox" type="text" placeholder="Enter product price"
         value={price}  onChange={(e)=>{setPrice(e.target.value)}} />
     { clicked&&error&& !price && <span className="invalid-input">Enter valid price</span>}

            <input className="inputBox" type="text" placeholder="Enter product category "
         value={category}  onChange={(e)=>{setCategory(e.target.value)}} />
         { clicked&&error&& !category && <span className="invalid-input">Enter valid category</span>}

            <input className="inputBox" type="text" placeholder="Enter product company"
         value={company}  onChange={(e)=>{setCompany(e.target.value)}} />
         { clicked&&error&& !company && <span className="invalid-input">Enter valid company name</span>}

            <button onClick={UpdateProduct} className="appButton">Update Product</button>
        </div>
    )
}
export default UpdateProduct;
