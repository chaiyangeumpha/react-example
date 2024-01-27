import React from 'react';
import './App.css';
import {
    Routes,
    Route
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Todo from "./Todo";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path='/about' element={<About/>}></Route>
                    <Route path='/todo' element={<Todo/>}></Route>
                </Routes>
            </header>
        </div>
    );
}

export default App;