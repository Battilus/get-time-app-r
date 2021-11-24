import React, {useEffect, useState} from 'react';
import style from './clockDasboard.module.scss'
import Clock from "../clock/Clock";
import {timezoneList} from "../../features/timezone";


const ClockDashboard = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setTimeout(() => setTime(new Date()), 1000)
    })

    return (
        <div className={style.wrapper}>
            <Clock time={time} timezone={timezoneList.UTC} />
            <Clock time={time} timezone={timezoneList.Moscow} />
            <Clock time={time} timezone={timezoneList.Tokyo} />
            <Clock time={time} timezone={timezoneList.Toronto} />
        </div>
    );
};

export default ClockDashboard;