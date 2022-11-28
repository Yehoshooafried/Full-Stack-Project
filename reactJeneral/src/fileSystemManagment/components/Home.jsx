//Home 
import React, { Component, useState, useEffect } from 'react';
import { Link ,Outlet,useParams} from 'react-router-dom'

const divStyles={
    width : 400,
    height :400,
    border: '1px solid black',
    
}


function Home() {
    const  [home, setHome] = useState(['..loading'])
const params = useParams()
console.log(params);

function deleteFile(e){
    console.log('delete is runing');
    console.log(e.target.name);
    const fileName = e.target.name
    const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };
      
      fetch(`http://localhost:5000/${fileName}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        getData()
}

    async function getData() {
    
        // const data = new FormData();
        const url = `http://localhost:5000`
        const res = await fetch(url,{
            method: 'GET'
          })
      const  json = await res.json();
        console.log(json);
        setHome(json)
    }
     useEffect(()=> {getData()},[]);

    return ( <>
      {
      home.map((file,i) => <div style={divStyles} key={i}>
      <a className='pagination' href={file.fileName}>{file.fileName} {file.isDirectory ? '(folder)' : '(file)'} </a> 
     <Link to={file.fileName}><button className='pagination'>info</button> </Link>
     <Link to={`show/${file.fileName}`}><button className='pagination'>showcontent</button> </Link>
     <Link to={`rename/${file.fileName}`}><button className='pagination'>rename</button> </Link>
     <Link to={`copy/${file.fileName}`}><button className='pagination'>copy</button> </Link>
     <button name={file.fileName} onClick={deleteFile}>delete</button>
     </div>)
     }
      <Outlet/>
       
</> );
     

        
}

export default Home;