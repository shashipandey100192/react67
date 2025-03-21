import React from 'react'
import { useState } from 'react'

function Mypage1() {
const [svalue,sfunc]=useState("kumar");

const mystateupdate = (p)=>{
    console.log(p);
    sfunc(p.target.value);
}


  return (
   <div className='container'>
    <div className='row'>
        <div className='col'>
            <h1>Name is:{svalue}</h1>
            <input type='text' value={svalue} onInput={mystateupdate}/>
            <input type='button' value="change state" onClick={mystateupdate}/>

            <div className='bg-danger p-3'>
                {svalue==="first" ? "first statement":svalue==="login"? <input type='button' value='login pge'/> : "no"}
            </div>
        </div>
    </div>
   </div>
  )
}

export default Mypage1