import { observer } from 'mobx-react-lite';
import React from 'react';
import store from '../store/CardStore';

function AddButton(props) {
    return (
        <div 
            onClick={() => store.addCard("Long press to edit title.")}
            className="add-button no-select"
        >
            +
        </div>
    );
}

export default observer(AddButton);