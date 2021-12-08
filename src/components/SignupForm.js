import React, { useState ,} from 'react'
import 'antd/dist/antd.css';
import '../components/loginform.css'
import {Link} from 'react-router-dom';
// import { useNavigation } from "react-router-dom";
import {
    AndroidOutlined
   } from '@ant-design/icons';
   import { Button, Input } from 'antd';
   import { Typography, Space } from 'antd';
import Password from 'antd/lib/input/Password';
import LoginForm from './LoginForm';
import Logging from '../Logging';
import Signup from '../Signup';
import Home from '../Home';
// import Signup from '../SignupForm';



const SignupForm = () => {
    // let history = useNavigation();
    const { Text } = Typography;

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [store,setStore]=useState([])

    const HandleSign=(e)=>{
    e.preventDefault()
    console.log("signed up and data sored in it")

    localStorage.setItem('name',JSON.stringify(name))  
    console.log("namehere",name)
    localStorage.setItem('email',JSON.stringify(email))
    console.log("mailid",email)
    localStorage.setItem('password',JSON.stringify(password))
    console.log("password_here",password) 
    //over all data      
    const userdata={name,email,password}
    // localStorage.setItem('over_all_data',JSON.stringify(data))
    console.log("datahere",userdata)
    // history.push({
    //     pathname: '/Home',
    //     // search: '?query=abc',
    //     state: { detail:userdata  }
    // });
     

    if(name&&email&&password){
        setStore((ls)=>[...ls,userdata])        
        // setName=("")
        // setEmail=("")
        // setPassword=("")
    }
    
    }

    return (
        <div>
        
            <div className="login">
        <div className="container">
            <div className="row">
                <div className="col-4 leftcol">
                        <div className="loglogo">
                    <AndroidOutlined/>
                    </div>
                         </div>
                <div className="col-8 pdnl">
                <div className="row titl">
                <h1>SIGN IN</h1>
                </div>
                <div className="row">
                <Input placeholder="name" value={name} onChange={(e)=>setName(e.target.value)} className="inps"/>
                </div>
                <div className="row">
                <Input placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="inps"/>
                </div>
                <div className="row">
                <Input.Password className="inps" placeholder="input password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div className="row">
                <Button className="btn" onClick={HandleSign}><Link to="/Home">SignUp</Link></Button>
                </div>
                <div className="row ">
                
                <Text   type="secondary">Alredy have an Account?<Link to="/">Login</Link></Text>
                </div>
                </div>
            </div>
        </div>
    </div>   
    <div>
    {
        (store.name !=="")?(
            <div>
            <Home/>
            </div>

        ):(
            <SignupForm Signup={Signup}/>
        )
    }
    </div> 
        </div>
      
    )
}

export default SignupForm









