import React from 'react';
import Header from '../Widgets/Header';
import Cards from './Cards'
import { Button, Card, Row, Col, TextInput } from 'react-materialize';
import Plus from '../../assets/plus.png';

const CreateCards = () => {
    const [newCard, setNewCard] = React.useState(1)
    const [cardVals, setCardVals] = React.useState({})
    const [cardArr, setCardArr] = React.useState([])
    const [array, setArray] = React.useState([]);
    const onClickFunc = () => {
        console.log(cardVals)
        setNewCard(newCard + 1);
        if (cardArr.length - 1 !== newCard) {
            cardArr.push(
                <Cards id={cardArr.length} cardVals={cardVals} setCardVals={cardVals} />)
        }
    }
    return (
        <div>
            <Header></Header>
            <p>Create Cards</p>
            <div style={{ margin: 15, display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {cardArr.map((item, index) => (
                    <div style={{ padding: 10 }}> {item}</div>
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