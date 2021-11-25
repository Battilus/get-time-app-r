import React from 'react';
import style from './clock.module.scss'
import {useDispatch} from "react-redux";
import {deleteClock} from "../../redux/clocks-reducer";


const Clock = (props) => {

    const dispatch = useDispatch()

    const {id, time, timezone} = props

    const hours = ((time.getUTCHours() + timezone.value + 11) % 12 + 1);
    const minutes = time.getUTCMinutes();
    const seconds = time.getUTCSeconds();

    const hourDegree = hours * 30;
    const minuteDegree = minutes * 6;
    const secondDegree = seconds * 6;

    const timeDash = ((hours > 9) ? hours : '0' + hours) + ' : ' +
        ((minutes > 9) ? minutes : '0' + minutes) + ' : ' +
        ((seconds > 9) ? seconds : '0' + seconds)

    return (
        <div className={style.wrapper}>
            <div className={style.clock}>
                <div className={style.clockWrapp}>
                    <div className={style.timezone}>
                        <h2>{timezone.description}</h2>
                    </div>
                    <span className={style.hours} style={{transform: `rotate(${hourDegree}deg)`}}/>
                    <span className={style.minutes} style={{transform: `rotate(${minuteDegree}deg)`}}/>
                    <span className={style.seconds} style={{transform: `rotate(${secondDegree}deg)`}}/>
                    <span className={style.dots}/>
                </div>
            </div>
            <div className={style.timeWrapp}>
                <div className={style.timeBoard}>
                    {timeDash}
                </div>
                <button className={style.deleteBtn}
                        onClick={() => dispatch(deleteClock({timezoneId: id}))}>x</button>
            </div>
        </div>
    );
};

export default Clock;