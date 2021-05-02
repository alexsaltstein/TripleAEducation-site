import React from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'react-materialize';
import Header from '../Widgets/Header';

const CardDisplay = ({ data, index, setIndex, name, cardSets }) => {
  const [toggled, setToggled] = React.useState(true)
  const [reset, setReset] = React.useState(null)

  const onButtonClick = (event, type) => {
    // event.stopPropagation();
    if (Object.keys(cardSets[name]).length !== index) {
      setIndex(index + 1)
    } else {
      setReset(true)
    }
    if (type == 'check') {
      // add true val to redux store
    }
    if (type == 'x') {
      // add true val to redux store
    }
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
      {reset && <Button onClick={() => { setIndex(1); setReset(false) }}>Reset Cards</Button>}
    </div>
  )
}

const UseCardsScreen = ({ cardSets }) => {
  const [index, setIndex] = React.useState(1);

  const name = decodeURIComponent(window.location.href.split('=')[1]);

  return (
    <div>
      <Header />
      <p style={{ fontWeight: 'bold', fontSize: 32, userSelect: 'none' }}>Card Set Name: {name}</p>
      <p style={{ fontWeight: 'bold', fontSize: 24, userSelect: 'none' }} >{index} / {Object.keys(cardSets[name]).length}</p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {Object.keys(cardSets[name]).slice(index - 1, index).map((item) => {
          console.log(item);
          return (
            <CardDisplay
              data={{ side1: cardSets[name][item].frontSide, side2: cardSets[name][item].backSide }}
              index={index}
              setIndex={setIndex}
              name={name}
              cardSets={cardSets}
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
    overflowWrap: 'break-word'
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

export default connect(mapStateToProps, null)(UseCardsScreen);