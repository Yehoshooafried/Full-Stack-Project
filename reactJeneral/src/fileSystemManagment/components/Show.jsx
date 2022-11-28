import React, { Component, useState, useEffect } from 'react';
import { Link ,useParams} from 'react-router-dom'
function Show() {
    const  [show, setShow] = useState([1,2])
const params = useParams()
console.log(params);
const fileName = params.fileName
console.log(fileName);

    async function getData() {
        console.log('wrf');
        // const data = new FormData();
        const url = `http://localhost:5000/${fileName}?getType=showContent`
        const res = await fetch(url)
      const  json = await res.json();
        console.log('json');
        setShow(json)
    }
     useEffect(()=> {getData()},[fileName]);
    return ( <>
  <h6>{show}</h6>
   
</> );
     

        
}

export default Show;