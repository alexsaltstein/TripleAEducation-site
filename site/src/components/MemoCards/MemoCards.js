import React from 'react';
import Header from '../Widgets/Header';
import { Button, Card, Row, Col } from 'react-materialize';
import { Link } from 'react-router-dom';

const MemoCards = () => {
    return (
        <div style={{ flex: 1 }}>
            <Header></Header>
            <p>MemoCardsScreen</p>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
                <Link to="/create">
                    <Button>Create a new Card Set</Button>
                </Link>
                <p>Your Card Sets</p>
            </div>
        </div>
    )
}

export default MemoCards;