import React from 'react';
import style from './clock.module.scss'


const Clock = (props) => {

    const {time, timezone} = props

    const hours = ((time.getUTCHours() + timezone.value + 11) % 12 + 1);
    const minutes = time.getUTCMinutes();
    const seconds = time.getUTCSeconds();

    const hourDegree = hours * 30;
    const minuteDegree = minutes * 6;
    const secondDegree = seconds * 6;

    return (
        <div className={style.wrapper}>
            <div className={style.timezone}>
                <h2>{timezone.description}</h2>
            </div>
            <div className={style.clock}>
                <div className={style.clockWrapp}>
                    <span className={style.hours} style={{transform:`rotate(${hourDegree}deg)`}}/>
                    <span className={style.minutes} style={{transform:`rotate(${minuteDegree}deg)`}}/>
                    <span className={style.seconds} style={{transform:`rotate(${secondDegree}deg)`}}/>
                    <span className={style.dots}/>
                </div>
            </div>
            <div className={style.timeBoard}>
                {((hours > 9) ? hours : '0' + hours) + ' : ' +
                ((minutes > 9) ? minutes : '0' + minutes) + ' : ' +
                ((seconds > 9) ? seconds : '0' + seconds)}
            </div>
        </div>
    );
};

export default Clock;