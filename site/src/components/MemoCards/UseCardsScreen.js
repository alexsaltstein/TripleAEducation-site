import React from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import Header from '../Widgets/Header';
import { interactWithCard } from '../../actions';

const CardDisplay = ({ data, index, setIndex, name, cardSets, interactWithCard }) => {
  const [toggled, setToggled] = React.useState(true)
  const [reset, setReset] = React.useState(null)

  const onButtonClick = (event, type) => {
    // event.stopPropagation();
    if (Object.keys(cardSets[name]).length !== index) {
      setIndex(index + 1)
    } else {
      setReset(true)
    }
    interactWithCard(name, index, type === 'check');
  }
  return (
    <div>
      <div onClick={() => setToggled(!toggled)} style={styles.cardContainer}>
        {toggled ?
          (<div>
            <p style={styles.label}>F</p>
            <p style={styles.data}>{data.side1}</p>
          </div>)
          :
          <div>
            <p style={styles.label}>B</p>
            <p style={styles.data}>{data.side2}</p>
            <div style={{ display: 'flex', alignItems: 'right' }}>
              <Button onClick={(event) => onButtonClick(event, 'check')} style={{ backgroundColor: 'green', margin: 2 }}>✔</Button>
              <Button onClick={(event) => onButtonClick(event, 'x')} style={{ backgroundColor: 'red', margin: 2 }}>X</Button>
            </div>
          </div>}
      </div>
      <Link to='/analytics'>
        {reset && <Button onClick={() => { setIndex(1); setReset(false) }}>Check Analytics</Button>}
      </Link>
    </div>
  )
}

const UseCardsScreen = ({ cardSets, interactWithCard }) => {
  const [index, setIndex] = React.useState(1);

  const name = decodeURIComponent(window.location.href.split('=')[1]);

  return (
    <div>
      <Header />
      <p style={{ fontWeight: 'bold', fontSize: 32, userSelect: 'none' }}>Card Set Name: {name}</p>
      <p style={{ fontWeight: 'bold', fontSize: 24, userSelect: 'none' }} >{index} / {Object.keys(cardSets[name]).length}</p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {Object.keys(cardSets[name]).slice(index - 1, index).map((item) => {
          return (
            <CardDisplay
              data={{ side1: cardSets[name][item].frontSide, side2: cardSets[name][item].backSide }}
              index={index}
              setIndex={setIndex}
              name={name}
              cardSets={cardSets}
              interactWithCard={interactWithCard}
            />
          )
        })}
      </div>
    </div>
  )
}

const styles = {
  cardContainer: {
    width: 300,
    background: 'white',
    padding: 20,
    margin: 15,
    borderRadius: 10,
    boxShadow: "2px 3px 5px #9E9E9E",
    overflowWrap: 'break-word',
    cursor: 'pointer'
  },
  label: {
    textAlign: 'left',
    userSelect: 'none'
  },
  data: {
    textAlign: 'center',
    paddingBottom: 15,
    fontSize: 24,
    fontWeight: 'bold',
    userSelect: 'none'
  }
}

const mapStateToProps = (state) => ({
  cardSets: state.cardSets
})

const actionCreators = {
  interactWithCard,
};

export default connect(mapStateToProps, actionCreators)(UseCardsScreen);