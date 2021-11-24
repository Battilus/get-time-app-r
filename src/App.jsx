import React from "react";
import style from './App.scss'
import Header from "./components/header/Header";
import ClockDashboard from "./components/clockDasboard/ClockDashboard";


const App = () => {
    return (
        <div className={style.app}>
            <Header/>
            <ClockDashboard/>
        </div>
    );
}

export default App;
