import React from 'react'
import sample from './Sample.pdf'
import pdf from './pdficon.svg'


export default function MainTwo() {
  let mainstyle={
    border:'3px solid #DBDBDB',
    height:'650px',
    width:'85%',
    margin:'0px',
    position:'absolute',
    top:'95px',
    right:'2px',
    bordertop:'none'
}
 
let hstyle={
    border:'3px solid #DBDBDB',
    width:'98%',
    margin:'0px',
    position:'absolute',
    top:'10px',
    left:'12px',
    textAlign:'center'
}

let boxstyle={
    backgroundcolor:'black'
}



  return (
    <>      
    <section style={mainstyle}>
    <h1 style={hstyle}>DEPARTMENT NAME</h1>
    <div className='hov-ele'>

      <div style={{position:'absolute',top:'100px'}}>
        <a href={sample} target='_blank' style={{textDecoration:'none',color:'black'}}>
         <img src={pdf} class='pdf-icon' style={{opacity:'0.8',height:'120px',width:'150px'}}>
        </img><p style={{position:'relative',left:'55px'}}>Doc-6</p>
        </a>
      </div>

      <div style={{position:'absolute',top:'100px',left:'150px'}}>
        <a href={sample} target='_blank' style={{textDecoration:'none',color:'black'}}>
         <img src={pdf} class='pdf-icon' style={{opacity:'0.8',height:'120px',width:'150px'}}>
        </img><p style={{position:'relative',left:'55px'}}>Doc-7</p>
        </a>
      </div>

</div>
   </section>  
    
             </>
    )
}