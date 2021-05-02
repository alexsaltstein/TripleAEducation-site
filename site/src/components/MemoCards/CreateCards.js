import React from 'react';
import Header from '../Widgets/Header';
import Cards from './Cards'
import { Button, Card, Row, Col, TextInput } from 'react-materialize';
import Plus from '../../assets/plus.png';

const CreateCards = () => {
    const [newCard, setNewCard] = React.useState(1)
    const [cardVals, setCardVals] = React.useState({})
    const [saved, setSaved] = React.useState(false);
    const [name, setName] = React.useState(null);
    const [cardArr, setCardArr] = React.useState([])
    const [errorText, setErrorText] = React.useState(false)
    const onClickFunc = () => {
        if (!name) {
            setErrorText(true)
            return
        }
        setNewCard(newCard + 1);
        if (cardArr.length - 1 !== newCard) {
            cardArr.push(
                <Cards id={cardArr.length} cardVals={cardVals} setSaved={setSaved} cardSetName={name} />)
        }
    }

    return (
        <div>
            <Header></Header>
            <p>Create Cards</p>
            {!saved && <TextInput style={{ width: 300 }} placeholder='Card Set name' value={name} onChange={(event) => { setErrorText(false); setName(event.target.value) }} />}
            {errorText && <p style={{ color: 'red', fontWeight: 'bold' }}>Error: Please enter a Card set name first</p>}
            <div style={{ margin: 15, display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {cardArr.map((item, index) => (
                    <div style={{ padding: 10 }} key={index}> {item}</div>
                ))
                }
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <img
                        alt={'Add One'}
                        src={Plus}
                        style={{ width: 75, height: 75, marginTop: 65 }}
                        onClick={() => onClickFunc()} />
                </div>
            </div>
        </div>
    )
}

export default CreateCards;