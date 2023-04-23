import React from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const [name,setName]=React.useState('');
    const [price,setPrice]=React.useState('');
    const [category,setCategory]=React.useState('');
    const [company,setCompany]=React.useState('');
   const [error,setError]=React.useState(false);
   const[clicked,setClicked]=React.useState(false);
   const navigate=useNavigate();
    const AddProduct=async ()=>{
        // console.warn(!name);
        setClicked(true);
        if(!name|| !price || ! category || !company){
            setError(true);
             return false;
    }
        //  console.warn(name,price,category,company);
        const userId=JSON.parse(localStorage.getItem('user'))._id;
        let result=await fetch("http://localhost:5000/add-product",{
            method:'post',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result=await result.json();
        console.warn(result);
        navigate("/");
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

            <button onClick={AddProduct} className="appButton">Add</button>
        </div>
    )
}
export default AddProduct;
