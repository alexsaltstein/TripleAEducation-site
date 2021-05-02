import React from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import Header from '../Widgets/Header';
import { interactWithCard } from '../../actions';
import { useStopwatch } from 'react-timer-hook';

const CardDisplay = ({ data, index, setIndex, name, cardSets, interactWithCard, start, pause }) => {
  const [toggled, setToggled] = React.useState(true)
  const [showAnalyticsButton, setShowAnalyticsButton] = React.useState(false)

  const onButtonClick = (event, type) => {
    // event.stopPropagation();
    if (Object.keys(cardSets[name]).length === index) {
      pause();
      setShowAnalyticsButton(true);
    }
    if (Object.keys(cardSets[name]).length !== index) {
      setIndex(index + 1)
    }
    interactWithCard(name, index, type === 'check');
  }
  return (
    <div>
      <div onClick={() => { setToggled(!toggled) }} style={styles.cardContainer}>
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
        {showAnalyticsButton && <Button onClick={() => { setIndex(1); setShowAnalyticsButton(false) }}>Check Analytics</Button>}
      </Link>
    </div>
  )
}

const UseCardsScreen = ({ cardSets, interactWithCard }) => {
  const [index, setIndex] = React.useState(1);
  const {
    seconds,
    minutes,
    hours,
    start,
    reset,
    pause,
  } = useStopwatch({ autoStart: false });

  const name = decodeURIComponent(window.location.href.split('=')[1]);
  return (
    <div>
      <Header />
      {cardSets[name] ?
        <div>
          <p style={{ fontWeight: 'bold', fontSize: 32, userSelect: 'none' }}>Card Set Name: {name}</p>
          <div>
            <div style={{ fontSize: 40, }}>
              <span>
                <span>{hours < 10 && '0'}{hours}</span>:<span>{minutes < 10 && '0'}{minutes}</span>:<span>{seconds < 10 && '0'}{seconds}</span>
              </span>
              <div>
                <Button onClick={() => { start(); }}>start</Button>
                <Button onClick={() => { setIndex(1); reset(); pause(); }}>reset</Button>
              </div>
            </div>
          </div>
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
                  pause={pause}
                  start={start}
                  interactWithCard={interactWithCard}
                />
              )
            })}
          </div>
        </div> :
        <div style={{ height: 200, padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h3>No card set with that name found!</h3>
        </div>
      }
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