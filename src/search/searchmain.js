import React from "react";
import sample from "./Sample.pdf";
import pdf from "./pdficon.svg";
import back from "./back.svg";

export default function Searchmain() {
  let mainstyle = {
    border: "3px solid #DBDBDB",
    height: "650px",
    width: "85%",
    margin: "0px",
    position: "absolute",
    top: "95px",
    right: "2px",
    bordertop: "none",
  };

  let hstyle = {
    border: "3px solid #DBDBDB",
    width: "98%",
    margin: "0px",
    position: "absolute",
    top: "12%",
    left: "1%",
    textAlign: "center",
  };

  let boxstyle = {
    backgroundcolor: "black",
  };

  return (
    <>

      <section style={mainstyle}>
        <div className="hov-ele">
          <a href="/Searchside">
            {/* LINK TO HOMEPAGE */}
            <img
              src={back}
              style={{
                height: "50px",
                width: "50px",
                position: "absolute",
                top: "10px",
                left: "10px",
              }}
            ></img>

          </a>

        </div>

        <h3 style={hstyle}>DEPARTMENT NAME</h3>
          <h4 style={{position:'absolute',top:'20%',left:'1%'}}>Search Results For 'Keyword '</h4>

          <div className='hov-ele'>
          <div style={{position:'absolute',top:'180px'}}>
        <a href={sample} target='_blank' style={{textDecoration:'none',color:'black'}}>
         <img src={pdf} class='pdf-icon' style={{opacity:'0.8',height:'120px',width:'150px'}}>
        </img><p style={{position:'relative',left:'55px'}}>Doc-1</p>
        </a>
      </div>

      <div style={{position:'absolute',top:'180px',left:'150px'}}>
        <a href={sample} target='_blank' style={{textDecoration:'none',color:'black'}}>
         <img src={pdf} class='pdf-icon' style={{opacity:'0.8',height:'120px',width:'150px'}}>
        </img><p style={{position:'relative',left:'55px'}}>Doc-2</p>
        </a>
      </div>

      <div style={{position:'absolute',top:'180px',left:'300px'}}>
        <a href={sample} target='_blank' style={{textDecoration:'none',color:'black'}}>
         <img src={pdf} class='pdf-icon' style={{opacity:'0.8',height:'120px',width:'150px'}}>
        </img><p style={{position:'relative',left:'55px'}}>Doc-3</p>
        </a>
        </div>
      </div>     
      </section>
    </>
  );
}
