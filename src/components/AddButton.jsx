import { observer } from 'mobx-react-lite';
import React from 'react';
import store from '../store/Quabit';

function AddButton(props) {
    const {addCard} = store;
    return (
        <div 
            onClick={addCard("some title")}
            className="add-button no-select"
        >
            +
        </div>
    );
}

export default observer(AddButton);