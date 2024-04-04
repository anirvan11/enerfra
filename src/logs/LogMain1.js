import React from 'react'

export default function LogMain1() {
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

let tablestyle={
  border:'3px solid #DBDBDB',
   position:'absolute',
    top:'20%',
    left:'10%',
    width:'85%',
}

  return (
    <section style={mainstyle}>
      <h1 style={hstyle}>DEPARTMENT NAME - LOGS</h1>
      <h6 style={{position:'absolute',top:'12%',left:'2%'}}>DATE:20/06/22</h6>
<div style={tablestyle}>
      <table class="table table-hover">
    <thead>
      <tr>
        <th>REQUEST BY</th>
        <th>REQUEST TAG</th>
        <th>REQUEST STATUS</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>UserI1101</td>
        <td>Edit in File 2</td>
        <td>APPROVED</td>
      </tr>
      <tr>
        <td>UserI1102</td>
        <td>Delete File 5</td>
        <td>PENDING</td>
      </tr>
      <tr>
        <td>UserI1103</td>
        <td>Add File 4</td>
        <td>REJECTED</td>
      </tr>
      <tr>
        <td>UserI1104</td>
        <td>Add File 9</td>
        <td>APPROVED</td>
      </tr>
    </tbody>
  </table>
  </div>
      </section>
  )
}
