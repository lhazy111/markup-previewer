import React, { Component } from 'react';
import Navbar01 from './Navbar01';
import Editor from './Editor';
import './App.css';


export class Main extends Component {
    render() {
        return (
            <div className="Main" id="home">
                <Navbar01 />
                <Editor />

            </div>
        )
    }
}

export default Main
