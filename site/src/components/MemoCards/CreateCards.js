import React from 'react';
import Header from '../Widgets/Header';
import Cards from './Cards'

const CreateCards = () => {
    const [getCards, setCards] = React.useState([]);
    return (
        <div style={{ alignItems: 'center' }}>
            <Header></Header>
            <p>Create Cards</p>
            <Cards getCards={getCards} setCards={setCards} />
        </div>
    )
}

export default CreateCards;