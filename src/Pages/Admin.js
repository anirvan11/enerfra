import React from 'react'
import back from './back.svg'

export default function Admin() {
  return (
    <>
    <div className='hov-ele'>
    <a href="/">
    <img src={back} style={{height:'7%',width:'7%',position:'fixed',top:'2%',left:'0%'}}></img>
    </a>
    </div>

    <h1 style={{textAlign:'center',position:'fixed',top:'20%',left:'35%',fontSize:'500%'}}>ADMIN PAGE<br></br> HERE</h1>
    </>
  )
}
