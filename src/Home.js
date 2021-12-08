

import './App.css';
import React from 'react';
import logo from  '../src/logo.png'
import { Typography, Space, Button } from 'antd';
import {
 AndroidOutlined
} from '@ant-design/icons';

import 'antd/dist/antd.css'; 
import { Link } from 'react-router-dom';
import Logging from './Logging';
import DarkMode from './components/DarkMode';



function Home({HandleLogout}) {
console.log("handle",HandleLogout)
const { Text } = Typography;

    return (
      <div> 
        <div className="container-md cont">
        <div className="row">
          <div className="col-md-11">
          
          </div>
          <div className="col-md-1 mt-5">
          <DarkMode/>
          </div>
        
        </div>
          <div className="row">
         
            <div className="col-6">
              <img src={
            logo
              } alt="logohere" className="logopr1"/>
              </div>
            <div className="col-6 right">
              <div className="row textall">
              <h1>ONE TOUCH FOR</h1>
              </div>
              <div className="row">
              <Text type="secondary" style={{fontSize:30 }}>ALL YOU NEED</Text>
              </div>
              <div className="row">
              <p style={{color:'white',paddingTop:20}}>
            
              Lucy has been download and loved by over 10M+ people form 130
              countries all over the woeld in last 3 month.Download this free app 
              on Android and IOS devices,Reviews and ratings are much appreciated. 
              </p>
              </div>
              <div className="row" style={{paddingTop:30}}>
                <div className="col-md-5">
               <Button  style={{borderRadius:40,height:60,width:150}}><Link to="/Signup">SIGN IN</Link></Button>
                </div>
                <div className="col-md-6">
                <Button onClick={() =>{HandleLogout()}} style={{borderRadius:40,height:60,width:150}}>
    
                Logout
                </Button>
                
                
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>  
      
    );
}

export default Home;