import React from "react"
import { Routes, Route } from "react-router-dom";
import { MapListPage } from "../pages";
import { LandingPage } from "../pages";


// File that manages all routes we wish to register.
// Essentially each 'Route' component links a component to a route string
// Each 'Route' must be nested within an instance of 'Routes'
// Everytime we would want to add a new page, just create a new
// route component and add the route you wish to add.
// more info can be found here: https://reactrouter.com/docs
const AppRoutes = () => {

    return (
        <div data-testid="app-routes-container">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path='/maps' element={<MapListPage />} />
            </Routes>
        </div>
    )
}

export default AppRoutes