//copy 
//Copy 

import React, { Component, useState, useEffect, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'
function Copy() {
    const params = useParams()
    const fileName = params.fileName
    const [name, setName] = useState(fileName);
    const navigate = useNavigate()

    console.log(params);

    console.log(fileName);

    const textInput = useRef(null)

    // async function getData() {
    //     console.log('getData function is runing');
    //     // const data = new FormData();
    //     const url = `http://localhost:5000/${fileName}?getType=Copy`
    //     const res = await fetch(url)
    //     const json = await res.json();
    //     console.log('json');
    //     setCopy(json)
    // }
    function sendData() {
        // e.event.preventDefault();
        console.log('sendData is runing');
        // POST request using fetch with async/await
       
      console.log(fileName);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json','Accept': 'application/json' },
        };
        // const response = await
        fetch(`http://localhost:5000/${fileName}?postType=copy`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setName(data)
            })
            .catch((err) => {
                console.log(err.message);
            });
            navigate('/')

    }
    useEffect(() => { sendData() }, [fileName]);

    return (<>
        <h6>{'Copy'}</h6>
        <h6>the file {fileName} is copied, the copied file callead{name}</h6>
    </>);
}

export default Copy;