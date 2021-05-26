import React, { useState } from 'react';

const Card = ({title}) => {
    const [streak, setStreak] = useState(0);
    return (
        <div className='card no-select' onClick={() => setStreak(streak + 1)}>
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
}

export default Card;