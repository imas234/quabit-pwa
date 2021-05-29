import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import store from '../store/CardStore';
import useLongPress from './useLongPress';

const Card = ({id, title, streak}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentText, setCurrentText] = useState(title);
    const longPress = useLongPress(() => setIsExpanded(!isExpanded), 400);

    useEffect(() => {
        store.editCard(id, currentText);
    }, [currentText]);
    
    const handlePress = () => {
        if (isExpanded) return;
        store.incrementStreak(id);
    };

    const handleChange = (e) => {
        setCurrentText(e.target.value);
    };

    return (
        <div 
            className='card no-select' 
            {...longPress}
            onClick={handlePress}
        >
            {!isExpanded ? 
                <div>
                    <div className="title-container">
                        <div className="card-title">{title}</div>
                    </div>
                    <div className="card-streak-container">
                        <div className="card-streak">{streak}</div>
                    </div>
                </div> 
                :
                <div>
                    <div className="title-container">
                        <textarea
                            className="edit-title"
                            value={currentText}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="card-streak-container">
                        <div className="card-streak">{streak}</div>
                    </div>
                </div>
            }
        </div>
    );
};

export default observer(Card);