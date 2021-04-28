import React from 'react';
import { Button, Card, Row, Col, TextInput } from 'react-materialize';

const Cards = ({ id, cardVals }) => {
    const [frontSide, setFrontSide] = React.useState('');
    const [backSide, setBackSide] = React.useState('');
    const saveFunction = () => {
        cardVals[id] = { frontSide, backSide }
    }
    return (
        <div>
            <Card>
                <TextInput placeholder='Frontside' value={frontSide} onChange={(event) => setFrontSide(event.target.value)} />
                <TextInput placeholder='Backside' value={backSide} onChange={(event) => setBackSide(event.target.value)} />
                <Button onClick={() => saveFunction()} style={{ backgroundColor: 'gold' }}>Save</Button>
            </Card>
        </div >
    )
}

export default Cards