import React from 'react';

const Remove = ({size="36", color="#98E9E9"}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={`${size}px`} viewBox="0 0 24 24" width={`${size}px`} fill={`${color}`}>
            <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        </svg>
    );
}

export default Remove;