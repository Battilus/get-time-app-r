import React from 'react';
import style from './header.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {addClock} from "../../redux/clocks-reducer";
import {timezoneList} from "../../features/timezone";


const Header = () => {

    const dispatch = useDispatch()
    const clocks = useSelector(state => state.clocks.timezones)

    const addNewClock = event => {
        if (!clocks.find(el => el.id === timezoneList[event.target.value].id))
            dispatch(addClock({selectedTZ: timezoneList[event.target.value]}))
    }

    return (
        <header className={style.wrapper}>
            <h2>Time is App</h2>
                <select
                    className={style.selector}
                    onChange={addNewClock}
                >
                    <option>Choose timezone...</option>
                    {Object.keys(timezoneList).map(el =>
                        <option
                            key={timezoneList[el].id}
                            value={el}
                        >
                            {timezoneList[el].description}
                        </option>)}
                </select>
        </header>
    );
};

export default Header;