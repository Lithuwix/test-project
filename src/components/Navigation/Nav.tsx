import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
    return (
        <nav>
            <div><Link to='/test1'>test 1</Link></div>
            <div><Link to='/test2'>Branch-Vova</Link></div>
        </nav>
    );
}