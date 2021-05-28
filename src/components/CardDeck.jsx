import React, { useEffect } from 'react';
import Card from './Card';
import AddButton from './AddButton'

const CardDeck = (props) => {
    useEffect(() => {
        
    }, []);
    return (
        <div className="deck-area">
            <div className='card-container'>
                <Card title={'quit this please dude just quit ok just do it man you can do it'}/>
                <Card title={'ooka pooka'}/>
                <Card title={'ooka pook'}/>
                <Card title={'ook pooka'}/>
                <Card title={'ook pook'}/>
            </div>
            <div className="app-bar">
                <div>Quabit</div>
                <AddButton/>
            </div>
        </div>
    );
}

export default CardDeck;