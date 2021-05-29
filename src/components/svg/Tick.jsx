import React from 'react';

const Tick = ({size="36", color="#98E9E9"}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${size}px`} viewBox="0 0 24 24" width={`${size}px`} fill={`${color}`}><path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
        </svg>
    );
}

export default Tick;