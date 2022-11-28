import React from 'react'
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


import Home from './components/Home';
import Info from './components/info';
import Show from './components/Show';
import Rename from './components/Rename';
import Copy from './components/Copy';
function App() {

    // states
    const [dataOfUsers, setDataOfUsers] = useState("")



    function getData() {
        const url = 'https://localhost:5000'
        fetch(url)
            .then((res) => res.json())
            .then((json) => setDataOfUsers(json))
    }

    return (
        <main>
            <div><h1>file mannagment</h1></div>

            <Router>
                <Routes>
                    <Route path={'/'} element={<Home />} >
                        <Route path={'/:fileName'} element={<Info />} />
                        <Route path={'copy/:fileName'} element={<Copy/>} />


                    </Route>
                    <Route path={'/show/:fileName'} element={<Show />} />
                    <Route path={'/rename/:fileName'} element={<Rename />} />
                </Routes>
            </Router>

        </main>

    );
}

export default App;