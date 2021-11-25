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
            <div className={style.timeWrapp}>
                <button className={style.deleteBtn}
                        onClick={() => dispatch(deleteClock({timezoneId: id}))}
                >
                    <svg aria-hidden="true" version="1.1" width="10" height="10">
                        <path
                            d="M 0,0 0,0.7 4.3,5 0,9.3 0,10 0.7,10 5,5.7 9.3,10 10,10 10,9.3 5.7,5 10,0.7 10,0 9.3,0 5,4.3 0.7,0 Z"/>
                    </svg>
                </button>
            </div>
            <div className={style.clock}>
                <div className={style.clockWrapp}>
                    <div className={style.timezone}>
                        <h2>{timezone.description}</h2>
                    </div>
                    <span className={style.hours} style={{transform: `rotate(${hourDegree}deg)`}}/>
                    <span className={style.minutes} style={{transform: `rotate(${minuteDegree}deg)`}}/>
                    <span className={style.seconds} style={{transform: `rotate(${secondDegree}deg)`}}/>
                    <span className={style.dots}/>
                    <div className={style.timeBoard}>
                        {timeDash}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clock;