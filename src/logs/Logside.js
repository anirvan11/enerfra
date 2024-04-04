import React from 'react'
import back from './back.svg'

export default function Logside() {
  let sidestyle={border:'3px solid #DBDBDB',
                height:'650px',
                width:'15%',  
                margin:'0px',
                position:'absolute',
                top:'95px',
                borderRight:'none',
                brderTop:'none'}

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
      <div className='hov-ele'>
            <a href='/Home'>
                {/* LINK TO HOME SIDEBAR */}
        <img src={back} style={{height:'30px',width:'30px',position:'absolute',top:'5px',left:'5px'}}></img>
            </a> 
            <a href="/Log1" style={{position:'absolute',top:'15%',left:'10%',textDecoration:'none',color:'black'}}>- 20/06/22</a>
            <a href="/Log2" style={{position:'absolute',top:'19%',left:'10%',textDecoration:'none',color:'black'}}>- 21/06/22</a>
            <a href="/Log3" style={{position:'absolute',top:'23%',left:'10%',textDecoration:'none',color:'black'}}>- 22/06/22</a>   
          </div>
      <h4 style={{position:'absolute',top:'7%',left:'5%',border:'3px solid #DBDBDB',width:'90%',textAlign:'center',}}>DATES</h4>

      {/* LINK EACH OF THESE TO RESPECTIVE LOGMAIN */}
    
    </section>
  )
}
