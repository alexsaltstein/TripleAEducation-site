import React from 'react';
import { Button, Card, TextInput } from 'react-materialize';
import { connect } from 'react-redux';
import { saveCardSet } from '../../actions';

const Cards = ({ id, cardVals, cardSetName, setSaved, saveCardSet }) => {
    const [frontSide, setFrontSide] = React.useState('');
    const [backSide, setBackSide] = React.useState('');
    const [errorText, setErrorText] = React.useState(false);
    const saveFunction = () => {
        if (frontSide === '' || backSide === '') {
            setErrorText(true)
            return;
        } else {
            setErrorText(false)
            cardVals[id] = { frontSide, backSide }
            setSaved(true);
            saveCardSet(cardSetName, cardVals);
        }
    }
    return (
        <div>
            <Card>
                <TextInput placeholder='Frontside' value={frontSide} onChange={(event) => setFrontSide(event.target.value)} />
                <TextInput placeholder='Backside' value={backSide} onChange={(event) => setBackSide(event.target.value)} />
                {errorText && <p style={{ color: 'red', fontWeight: 'bold', padding: 10 }}>Please input both Front and Back values</p>}
                <Button onClick={() => saveFunction()} style={{ backgroundColor: 'gold' }}>Save</Button>
            </Card>
        </div >
    )
}

const actionCreators = {
    saveCardSet
}

export default connect(null, actionCreators)(Cards);