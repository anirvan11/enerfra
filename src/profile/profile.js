import React from 'react'
import Header from "../HomePage/Header";
import profile from "./profile.svg"
import back from "./back.svg"

export default function Prof() {
  return (<>
  <h1 style={{textAlign:'center'}}>PROFILE</h1>
  <div className='hov-ele' >
    <a href="/Home">
  <img src={back} style={{height:'7%',width:'7%',position:'fixed',top:'15%',left:'0%'}}></img>
  </a>
  </div>
  <img src={profile} style={{width:'150px',height:'150px',opacity:'0.7',position:'fixed',top:'20%',left:'45%'}}></img>
  <div style={{position:'fixed',top:'45%',left:'40%'}}>
  <h6 style={{position:'fixed',top:'45%',left:'40%'}}>USERID :<div style={{border:'3px solid #DBDBDB',position:'fixed',width:'20%',textAlign:'center'}}>UserI1101</div> </h6>
  <h6 style={{position:'fixed',top:'54%',left:'40%'}}>NAME : <div style={{border:'3px solid #DBDBDB',position:'fixed',width:'20%',textAlign:'center'}}>Anirvan Nanduri</div></h6>
  <h6 style={{position:'fixed',top:'63%',left:'40%'}}>DEPARTMENT : <div style={{border:'3px solid #DBDBDB',position:'fixed',width:'20%',textAlign:'center'}}> Department 1</div></h6>
  <h6 style={{position:'fixed',top:'72%',left:'40%'}}>EMAIL : <div style={{border:'3px solid #DBDBDB',position:'fixed',width:'20%',textAlign:'center'}}>xyz123@gmail.com</div></h6>
  </div>
  </>
  
  )
}
