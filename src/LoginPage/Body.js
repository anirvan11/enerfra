import React from 'react'
import bg from './bg.jpeg'

export default function Body() {
  return (
    <>
    <img src={bg} style={{zIndex:'-1',height:'70%',widht:'90%',position:'fixed',top:'13.5%',left:'1.5%',opacity:'0.9'}}></img>
    <div style={{position:'fixed',height:'40%', width:'40%', top:'25%', left:'30%',padding:'2px',opacity:'0.9', borderStyle:'solid', borderWidth:'2px', textAlign:'center',backgroundColor:'white',}}>
    
    <form>

  <div style={{position:'fixed',top:'35%',left:'42%',textAlign:'center'}}>
    <label style={{position:'fixed',top:'32%',left:'47%'}} ><h6>Login ID</h6></label>
    <input style={{position:'fixed',top:'35%',left:'40%',width:'20%'}} />
    <div style={{position:'fixed',top:'39%',left:'43%'}} ><p>Your email ID is your Login ID</p></div>
  </div>

  <div style={{position:'fixed',top:'50%',left:'42%',textAlign:'center'}}>
    <label style={{position:'fixed',top:'47%',left:'47%'}}><h6>Password</h6></label>
    <input type="password" style={{position:'fixed',top:'50%',left:'40%',width:'20%'}} />
  </div>

  <div style={{align:'center',position:'fixed',top:'60%',left:'47%'}}>
  <a  style={{margin:'20px', borderWidth:'2px',textDecoration:'none', borderStyle:'solid',backgroundColor:'#DBDBDB',color:'black', width:'20%', }} href="/Home">Login</a>
  </div>

</form>
    </div>
    
    </>
  )
}
