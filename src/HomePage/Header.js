import React from 'react';
import logo from './logo.jpg'
import profile from './profile.svg'
export default function Header() {
  return (
    <>
    
    <nav class="navbar navbar-expand-lg bg-light"  style={{border:'3px solid #DBDBDB', margin:'2px 2px 2px 0px' }}>
  <div class="container-fluid">
  <img src={logo} style={{height:'75px',width:'75px'}}></img>
    <a class="navbar-brand" href="https://www.enerfra.com/" target='_blank' style={{position:'absolute',left:'100px',}}>ENERFRA<br></br>DOCUMENTATION REPOSITORY</a>
  </div>

  <div class="dropdown" style={{position:'absolute',right:'10px'}}>
  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={profile} className='hov-ele' style={{height:'80px',width:'40px',position:'relative'}}></img>
          </a>

          <div style={{position:'absolute',right:'150px',top:'65px'}}>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style={{position:'absolute',right:'200px'}}>
          <li><a class="dropdown-item" href="/Profile">Profile</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Logout</a></li>
            </ul>
            </div>
  </div>
</nav>
    </>
  );
}
