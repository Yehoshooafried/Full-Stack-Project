//rename 

import React, { Component, useState, useEffect, useRef } from 'react';
import { Link,  useParams, useNavigate } from 'react-router-dom';

function Rename() {
    const navigate = useNavigate()
    const params = useParams()
    const fileName = params.fileName
    const [name, setName] = useState(fileName)

    console.log(params);

    console.log(fileName);

    const textInput = useRef(null)

    // async function getData() {
    //     console.log('getData function is runing');
    //     // const data = new FormData();
    //     const url = `http://localhost:5000/${fileName}?getType=rename`
    //     const res = await fetch(url)
    //     const json = await res.json();
    //     console.log('json');
    //     setRename(json)
    // }
    function sendData() {
        // e.event.preventDefault();
        console.log('sendData is runing');
        // POST request using fetch with async/await
        const formData = textInput.current.value
        console.log(`textInput.current.value: ${formData}`);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json','Accept': 'application/json' },
            body: JSON.stringify({ newName: formData })
        };
        // const response = await
        fetch(`http://localhost:5000/${fileName}?postType=rename`, requestOptions)
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
    // useEffect(() => { sendData() }, [fileName]);

    return (<>
        <h6>{'rename'}</h6>
        

            <input
                type="text"
                ref={textInput}
                placeholder='Please enter the new name..' />

            <button onClick={sendData}>change name</button>
       
        <h6>the name folder: {name}</h6>

    </>);
}

export default Rename;