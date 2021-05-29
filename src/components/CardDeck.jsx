import React, { useEffect } from 'react';
import AddButton from './AddButton';
import CardContainer from './CardContainer';
import store from '../store/CardStore';
import { observer } from 'mobx-react-lite';

const CardDeck = (props) => {
    const localStore = window.localStorage;
    const SAVED_LIST_NAME = "QUABIT_CARDLIST";
    const list = Object.values(store.list);
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

export default observer(CardDeck);