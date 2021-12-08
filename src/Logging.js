import React,{useState} from 'react'
import LoginForm  from './components/LoginForm'
import Home from './Home'


function Logging(){

const data={
    email:"sathish@gmail",
    password:"sathish"
    }

    const[user,setUser]=useState({name:"",email:""})
    const [error,setError]=useState("")
    
    

function Login(details){
console.log("data emial",details)
console.log("email",data.email)
if(details.email===data.email&&details.password===data.password)        
            {
            console.log("u are loged in")
            localStorage.setItem('username',details.email);
            localStorage.setItem('password',details.password);
            setUser({
                name:details.name,
                email:details.email
            })
            
            }

            else{
                console.log("ivalid data here")
                setError("You are entered the invalid data")
            }
            
    }
                const Logout=()=>{
                    console.log("loged out")
                    localStorage.removeItem('email');
                    localStorage.removeItem('password');
                    setUser({name:"",email:""})
                }
                
    return (
        <div>
            {
                (user.email !=="")?(
                    <div>
                    <Home HandleLogout={()=>{Logout()}} />
                    
                    </div>
                ):(
                    <LoginForm Login={Login} error={error}/>
                )
            }
        </div>
    )
}

export default Logging
