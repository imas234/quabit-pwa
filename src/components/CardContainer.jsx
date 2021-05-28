import React from 'react';
import Card from './Card';

const CardContainer = ({list}) => {
    return (
        <div className='card-container'>
            {list.map(({id, title, streak}) =>
                <Card 
                    id={id}
                    title={title}
                    streak={streak}
                />
            )}
        </div>
    );
}

export default CardContainer;