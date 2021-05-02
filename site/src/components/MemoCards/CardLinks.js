import React from 'react';
import { useHistory } from "react-router-dom";

const CardLinks = ({ name }) => {
  const history = useHistory();
  return (
    <div style={styles.cardContainer} onClick={() => history.replace(`/cards?name=${name}`)}>
      <p style={styles.data}>{name}</p>
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
  data: {
    textAlign: 'center',
    paddingBottom: 15,
    fontSize: 24,
    fontWeight: 'bold',
    userSelect: 'none',
    overflowWrap: 'breakWord'
  }
}
export default CardLinks;