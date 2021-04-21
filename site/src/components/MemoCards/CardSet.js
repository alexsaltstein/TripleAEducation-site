import React from 'react';
import {CARDS} from '../../data/sampleData';

const CardDisplay = ({data}) => {
  const [toggled, setToggled] = React.useState(true)
  return (
    <div onClick={()=>setToggled(!toggled)} style={styles.cardContainer}>
      <p>{toggled ? data.side1:data.side2}</p>
    </div>
  )
}

const CardSet = () => {
  return (
    <div>
      {CARDS.map(item => {
        return (
          <CardDisplay
          data={item}/>
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
export default CardSet;