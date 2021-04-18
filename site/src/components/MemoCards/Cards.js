import React from 'react';
import { Button, Card, Row, Col, TextInput } from 'react-materialize';
import Plus from '../plus.png'
const Cards = (getCards, setCards) => {
    const onClickFunc = () => {
        console.log('fired')
        return
    }
    const renderWidget = () => {
        console.log("I was clicked");
        const newComponents = [...getCards, Cards];
        setCards(newComponents)
    }
    return (
        <div style={{ margin: 15, display: 'flex', flexDirection: 'row' }}>
            <Card>
                <TextInput placeholder='1st Side' />
                <TextInput placeholder='2nd Side' />
            </Card>
            <div>
                <img
                    src={Plus}
                    style={{ width: 75, height: 75, marginTop: 65 }}
                    onClick={() => onClickFunc} />
            </div>
        </div>
    )
}

export default Cards