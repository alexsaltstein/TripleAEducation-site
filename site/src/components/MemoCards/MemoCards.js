import React from 'react';
import Header from '../Widgets/Header';
import { Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CardLinks from './CardLinks';

const MemoCards = ({ cardSets }) => {
    console.log(cardSets);
    return (
        <div style={{ flex: 1 }}>
            <Header></Header>
            <u>
                <p style={{ fontSize: 32, fontWeight: 'bold' }}>Triple A Education's Memorization Card Helper!</p>
            </u>
            <div style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }}>
                <p style={{ fontSize: 24, textAlign: 'center', }}>The goal of this website is to allow you to create "MemoCards" which will help you memorize and/or learn whatever you put onto the cards! </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
                <Link to="/create">
                    <Button>Create a new Card Set</Button>
                </Link>
                <u>
                    <p style={{ fontSize: 32, fontWeight: 'bold' }}>Your Card Sets</p>
                </u>
                <div style={{ display: 'flex' }}>
                    {Object.keys(cardSets).length === 0 && (<p style={{ fontSize: 24 }}>No Card Sets Found!</p>)}
                    {Object.keys(cardSets).map(item => (
                        <CardLinks name={item} deck={cardSets[item]} />
                    ))}
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cardSets: state.cardSets
})

export default connect(mapStateToProps, null)(MemoCards);