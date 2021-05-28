import React, { useEffect } from 'react';
import AddButton from './AddButton';
import CardContainer from './CardContainer';
import store from '../store/Quabit';

const CardDeck = (props) => {
    const list = Object.values(store.list);
    // useEffect(() => {
    // }, []);
    return (
        <div className="deck-area">
            <CardContainer list={list}/>
            <div className="app-bar">
                <div>Quabit</div>
                <AddButton/>
            </div>
        </div>
    );
}

export default CardDeck;