import React,{useState} from 'react'
import 'antd/dist/antd.css';
import '../components/loginform.css'
import {
    AndroidOutlined
   } from '@ant-design/icons';
   import { Button, Input } from 'antd';
   import { Typography, Space } from 'antd';
import Logging  from '../Logging';
import SignupForm  from './SignupForm';
import {Link} from 'react-router-dom' 
// import DarkMode from './components/DarkMode';


function LoginForm({Login,error}){
    const { Text } = Typography;

    const [details,setDetails]=useState({name:"", email:"",password:""})

    const submitHandler=e=>{
        e.preventDefault()

        Login(details)
    }

    return (
    <div className="login">
        <div className="container">
        
                <form >
                
                <div className="row">
                    <div className="col-4 leftcol">
                    <div className="loglogo">
                    <AndroidOutlined/>
                    </div>
                    </div>
                    <div className="col-8 pdnl">
                    <div className="row titl">
                    <h1>LOGIN</h1>
                    <div>
                    {(error!="")?(<div style={{color:"red"}}>{error}</div>):""}
                    </div>
                    </div>
                    <div className="row">
                    <Input placeholder="username" id="email" name="email" onChange={e=>setDetails({...details, email:e.target.value})} value={details.email} className="inps"/>
                    </div>
                    <div className="row" >
                    <Input.Password placeholder="input password" id="password" name="password" onChange={e=>setDetails({...details, password:e.target.value})} value={details.password} className="inps"/>
                    </div>
                    <div className="row">
                    <Button  type="submit" onClick={submitHandler} className="btn">LogIn</Button>
                    </div>
                    <div className="row ">
                    <Text   type="secondary">Don't  have an Account?<Link to="/Signup">SIGNIN HERE</Link></Text>
                    </div>
                    </div>
                </div>
                </form>   
        
        </div>
    </div>    
    )
}

export default LoginForm
   



