import React from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Widgets/Header';

const CardDisplay = ({ data }) => {
  const [toggled, setToggled] = React.useState(true)
  return (
    <div onClick={() => setToggled(!toggled)} style={styles.cardContainer}>
      <p>{toggled ? data.side1 : data.side2}</p>
    </div>
  )
}

const UseCardsScreen = ({ cardSets }) => {
  const name = decodeURIComponent(window.location.href.split('=')[1]);
  
  return (
    <div>
      <Header />
      <p>Card Screen</p>
      {Object.keys(cardSets[name]).map((item) => {
        console.log(item);
        return (
          <CardDisplay
            data={{ side1: cardSets[name][item].frontSide, side2: cardSets[name][item].backSide }} />
        )
      })}
    </div>
  )
}

const styles = {
  cardContainer: {
    width: 300,
    background: 'white',
    padding: 20,
    borderRadius: 10,
    boxShadow: "2px 3px 5px #9E9E9E"
  }
}

const mapStateToProps = (state) => ({
  cardSets: state.cardSets
})

export default connect(mapStateToProps, null)(UseCardsScreen);