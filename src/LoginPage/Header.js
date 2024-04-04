import React from 'react';
import logo from './logo.jpg'
import profile from './profile.svg'
import admin from './admin.svg'
export default function Header() {
  return (
    <>
    
    <nav class="navbar navbar-expand-lg bg-light"  style={{border:'3px solid #DBDBDB', margin:'2px 2px 2px 0px' }}>
  <div class="container-fluid">
  <img src={logo} style={{height:'75px',width:'75px'}}></img>
    <a class="navbar-brand" href="https://www.enerfra.com/" target='_blank' style={{position:'fixed',left:'7%',}}>ENERFRA<br></br>DOCUMENTATION REPOSITORY</a>
  </div>

  <div className='hov-ele'>
  <a href="/Admin">
<img src={admin} className='hov-ele' style={{height:'80px',width:'40px',position:'fixed',right:'2%',top:'2%'}}></img>
          </a>
          </div>
        
       
 
</nav>
    </>
  );
}