import { upload } from '@testing-library/user-event/dist/upload'
import React from 'react'
import back from './back.svg'

function clickme() {
    alert('File Uploaded')
}

export default function Addfile() {
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
        top:'70px',
        left:'12px',
        textAlign:'center'
    }

    let formstyle={
        border:'3px solid #DBDBDB',
        height:'50%',
        width:'45%',
        position:'fixed',
        top:'35%',
        left:'30%',
    }
 
  return (
    <>
        <section style={mainstyle}>
        <div className='hov-ele'>
            <a href='/Home'>
                {/* LINK TO HOMEPAGE */}
        <img src={back} style={{height:'50px',width:'50px',position:'absolute',top:'10px',left:'10px'}}></img>
            </a> </div>
        <h5 style={hstyle}>FILE ADD</h5>

        <div style={formstyle}>

        <h6 style={{position:'absolute',top:'5px',left:'150px', }}>DEPARTMENT NAME:</h6>
        <div style={{position:'absolute',top:'30px',left:'150px',width:'50%'}}>
        <select class="form-select" aria-label="Default select example">
        <option selected>Choose Department</option>
        <option value="1">Department-One</option>
        <option value="2">Department-Two</option>
        <option value="3">Department-Three</option>
        </select>
        </div>

        
        
        <h6 style={{position:'absolute',top:'110px',left:'150px'}} >FILE CHOOSE:</h6>
        <div class="mb-3" style={{position:'absolute',top:'110px',left:'150px',width:'50%'}}>
        <label for="formFile" class="form-label"></label>
        <input class="form-control" type="file" id="formFile"/>
        </div>

        <h6 style={{position:'absolute',top:'220px',left:'150px'}}>FILE NAME:</h6>
        <input style={{position:'absolute',top:'240px',left:'150px',width:'50%'}} class="form-control" type="text" placeholder="Enter File Name" aria-label="default input example"></input>
        <div style={{position:'fixed', top:'75%', left:'50%',align:'center'} }> <button onClick={clickme}>Upload</button> </div>
        </div>
        </section>
    </>
  )
}
