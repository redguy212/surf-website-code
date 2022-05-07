import React from "react";
import logo from "../logo.svg";
import Button from "../components/button/button";
import {Input} from "../components/input/input";

const LandingPage = () => {

    console.log("fire")
    return (
        <>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Rohan is good at surf
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            <Button onClick={undefined} disabled={0}>this is a button</Button>
            <Input/>
        </>
    )
}

export default LandingPage