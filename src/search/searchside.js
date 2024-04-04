import React from 'react'
import back from './back.svg'
import search from './search.svg'

export default function Searchside() {
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
                
                let FilterDept={
                    border:'3px solid #DBDBDB',
                    position:'relative',
                    left:'0',
                    width:'110%',
                    padding:'5px'
                }
                
                let FilterDate={
                    border:'3px solid #DBDBDB',
                    position:'relative',
                    left:'0',
                    width:'110%',
                    bordertop:'none',
                    padding:'5px'
                }
                
  return (
    <section style={sidestyle}>
      <div className='hov-ele'>
            <a href='/Home'>
                {/* LINK TO HOME SIDEBAR */}
        <img src={back} style={{height:'30px',width:'30px',position:'absolute',top:'5px',left:'5px'}}></img>
            </a> 
            <a href='/Searchmain'><img src={search} style={{height:'30px',width:'30px',position:'absolute',top:'11%',right:'2%'}}></img></a>
           </div>
           
           <input style={{width:'80%',position:'absolute',top:'10%',left:'2%'}} type="text" class="form-control" placeholder="Search" aria-label="Username"/>
            
            <div class='Filter' style={{position:'absolute',top:'40%',left:'2%'}}>

                <h6>Filters</h6>

                <div style={FilterDept}>
                    <b>Department</b>
                <div class="form-check" style={{position:'relative',left:'20px'}}>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                Department 1
                </label>
                </div>
                <div class="form-check" style={{position:'relative',left:'20px'}}>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                Department 2
                </label>
                </div>
                <div class="form-check" style={{position:'relative',left:'20px'}}>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                Department 3
                </label>
                </div>
                </div>

                <div style={FilterDate}>
                        <b>DATE</b>
                        <div style={{position:'relative',left:'20px'}}>
                        <label for="From">From:</label>
                        <input type="date" id="From"></input>
                        </div>
                        <div style={{position:'relative',left:'20px'}}>
                        <label for="To">To:</label>
                        <input type="date" id="To" style={{position:'relative',left:'20px'}}></input>
                        </div>
                </div>
            </div>
            
    
    </section>
  )
}
