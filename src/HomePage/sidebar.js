import React from 'react'
import search from './searchicon.svg'
import log from './logicon.svg'
import add from './addfileicon.svg'



export default function Sidebar() {
let sidestyle={border:'3px solid #DBDBDB',
                height:'650px',
                width:'15%',  
                margin:'0px',
                position:'absolute',
                top:'95px',
                borderRight:'none',
                brderTop:'none'}

let imgstyle={
  height:'30px',
  width:'30px',
  opacity:'0.9',
} 

let box={
  border:'3px solid #DBDBDB',
  height:'45px',
  width:'90%',
  position:'absolute',
  top:'5px',
  left:'5px'
}

                return (
    <section style={sidestyle}>
      <div  style={box}></div>
      <div className='hov-ele'>
        <a href='/Log' style={{position:'absolute',top:'12px',left:'90px'}}><img src={log} class='pdf-icon' style={imgstyle}></img></a>
        <a href='/Searchside' style={{position:'absolute',top:'12px',left:'155px'}}><img src={search} class='pdf-icon' style={imgstyle}></img></a>
        <a href='/Add' style={{position:'absolute',top:'12px',left:'25px'}}><img src={add} class='pdf-icon' style={imgstyle}></img></a>
        </div>

    </section>
  )
}
