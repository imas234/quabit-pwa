import { observer } from 'mobx-react-lite';
import React from 'react';
import Card from './Card';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const CardContainer = ({list}) => {
    return (
        <div className='card-container'>
            <TransitionGroup>
                {list.map(({id, title, streak}) =>
                    <CSSTransition
                        key={id}
                        timeout={300}
                        classNames="fade-card"
                    >
                        <Card 
                            key={id}
                            id={id}
                            title={title}
                            streak={streak}
                        />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
}

export default observer(CardContainer);