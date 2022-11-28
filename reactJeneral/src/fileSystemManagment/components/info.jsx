//info 
//Info 
import React, { Component, useState, useEffect } from 'react';
import { Link ,useParams} from 'react-router-dom'
function Info() {
    const  [info, setInfo] = useState([1,2])
const params = useParams()
console.log(params);
const fileName = params.fileName
console.log(fileName);

    async function getData() {
        console.log('wrf');
        // const data = new FormData();
        const url = `http://localhost:5000/${fileName}?getType=info`
        const res = await fetch(url,{
            method: 'GET',
          })
      const  json = await res.json();
        console.log(json);
        setInfo(json)
    }
     useEffect(()=> {getData()},[fileName]);
    return ( <>
  <h6>{info.atime}</h6>
   
</> );
     

        
}

export default Info;