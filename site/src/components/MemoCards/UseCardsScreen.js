import React from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Widgets/Header';

const CardDisplay = ({ data }) => {
  const [toggled, setToggled] = React.useState(true)
  return (
    <div onClick={() => setToggled(!toggled)} style={styles.cardContainer}>
      {toggled ?
        (<div>
          <p style={styles.label}>F</p>
          <p style={styles.data}>{data.side1}</p> </div>)
        :
        <div>
          <p style={styles.label}>B</p>
          <p style={styles.data}>{data.side2}</p>
        </div>}
    </div>
  )
}

const UseCardsScreen = ({ cardSets }) => {
  const name = decodeURIComponent(window.location.href.split('=')[1]);

  return (
    <div>
      <Header />
      <p style={{ fontWeight: 'bold', fontSize: 32, userSelect: 'none' }}>MemoCard Name: {name}</p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {Object.keys(cardSets[name]).map((item) => {
          console.log(item);
          return (
            <CardDisplay
              data={{ side1: cardSets[name][item].frontSide, side2: cardSets[name][item].backSide }} />
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
    boxShadow: "2px 3px 5px #9E9E9E"
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