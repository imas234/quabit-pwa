import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import store from '../store/Quabit';

const Card = ({id, title, streak}) => {
    const {incrementStreak} = store;
    return (
        <div className='card no-select' onClick={incrementStreak(id)}>
            <div>
                <div className="title-container">
                    <div className="card-title">{title}</div>
                </div>
                <div className="card-streak-container">
                    <div className="card-streak">{streak}</div>
                </div>
            </div>
        </div>
    );
};

export default observer(Card);