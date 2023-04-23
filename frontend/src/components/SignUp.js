// import React,{useEffect, useState} from 'react';
// import { useNavigate } from 'react-router-dom';
// const SignUp=()=>{
//     const[name,setName]=useState("");
//     const[password,setPassword]=useState("");
//     const[email,setEmail]=useState("");
//     const navigate=useNavigate();
//     useEffect(()=>{
//         const auth=localStorage.getItem('user');
//         if(auth){
//             alert("already signup");
//             navigate('/')
//         }
//     })

//     const collectData=async()=>{
//         console.warn("dddddd");
//         console.log(name,email,password);
//         let result=await fetch('http://localhost:5000/register',{
//                 method:'post',
//                 body:JSON.stringify({name,email,password}),
//                 headers:{
//                     'Content-Type':'application/json'
//                 }
       
//             });
//             result=await result.json();
//             console.warn(result);
//             localStorage.setItem("user",JSON.stringify(result));
//                 navigate("/");
            
//     }


//     return(
//         <div className='signup'>
//             <h1>Signup</h1>
//             <input type="text"  placeholder='Enter Name'
//             value={name} onChange={(e)=>setName(e.target.value)}/>

//             <input type="text" placeholder='Enter email'
//              value={email} onChange={(e)=>setEmail(e.target.value)}/>

//             <input type="password" placeholder='Enter Password'  
//             value={password} onChange={(e)=>setPassword(e.target.value)}/>
            
//             <button className='button1' onClick={collectData} type='button'>SignUp</button>
//         </div>
//     )
// }
// export default SignUp;
import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if(auth){
      alert("already signup"); // It's not clear what this alert is supposed to do
      navigate('/') // This will navigate the user to the home page if they're already signed up
    }
  }, []) // useEffect should have an empty dependency array as the second argument to run only once

  const collectData = async () => {
    console.warn("dddddd"); // It's not clear what this console warning is for
    console.log(name, email, password); // This will log the user's name, email, and password to the console
    let result = await fetch('http://localhost:5000/register', {
      method: 'post',
      body: JSON.stringify({name, email, password}),
      headers: {'Content-Type': 'application/json'}
    });
    result = await result.json();
    console.warn(result); // This will log the result of the fetch request to the console
    localStorage.setItem("user", JSON.stringify(result));
    navigate("/"); // This will navigate the user to the home page after signing up
  }

  return (
    <div className='signup'>
      <h1>Signup</h1>
      <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className='button1' onClick={collectData} type='button'>SignUp</button>
    </div>
  )
}

export default SignUp;

