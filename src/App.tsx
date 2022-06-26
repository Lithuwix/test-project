import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Navigation/Nav";
import {Route, Routes} from "react-router-dom";
import {TestComponent01} from "./components/Main/Test_component_01/Test_component_01";
import {TestComponent02} from "./components/Main/Test_component_02/Test_component_02";

function App() {
    return (
        <div className="App">
            <Header/>
            <Nav/>
            <div> {/* этот div я бы хотела заменить на компоненту, которая внутри себя содержит -Routes- */}
                <Routes>
                    <Route path={'/test1'} element={<TestComponent01/>}/>
                    <Route path={'/test2'} element={<TestComponent02/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
