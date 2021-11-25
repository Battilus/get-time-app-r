import React, {useEffect, useState} from 'react';
import style from './clockDasboard.module.scss'
import Clock from "../clock/Clock";
import {useSelector} from "react-redux";


const ClockDashboard = () => {

    const [time, setTime] = useState(new Date());

    const clocks = useSelector(state => state.clocks.timezones)

    useEffect(() => {
        setTimeout(() => setTime(new Date()), 1000)
    })

    const clocksComponents = clocks?
        clocks.map(item => <Clock key={item.id} id={item.id} time={time} timezone={item} />) : null

    return (
        <div className={style.wrapper}>
            {clocksComponents}
        </div>
    );
};

export default ClockDashboard;