import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Navigation/Nav";
import {Route, Routes} from "react-router-dom";
import {TestComponent01} from "./components/Main/Test_component_01/Test_component_01";
import {TestComponent02} from "./components/Main/Test_component_02/Test_component_02";
import {TestComponent03} from './components/Main/Test_component_03/Test_component_03';
import {TestComponent04} from './components/Main/Test_component_04/Test_component_04';
import {Error404} from './components/Main/Error404/Error404';

function App() {
    return (
        <div className="App">
            <div className={'header'}>
                <Header/>
            </div>
            <div className={'nav'}>
                <Nav/>
            </div>
            <div
                className={"routes"}> {/* этот div я бы хотела заменить на компоненту, которая внутри себя содержит -Routes- */}
                <Routes>
                    <Route path={'/*'} element={<Error404/>}/>
                    <Route path={'/test1'} element={<TestComponent01/>}/>
                    <Route path={'/test2'} element={<TestComponent02/>}/>
                    <Route path={'/test3'} element={<TestComponent03/>}/>
                    <Route path={'/test4'} element={<TestComponent04/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
