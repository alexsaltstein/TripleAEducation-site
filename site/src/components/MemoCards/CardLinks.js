import React from 'react';
import { useHistory } from "react-router-dom";

const CardLinks = ({name}) => {
  const history = useHistory();
  return (
    <div style={styles.cardContainer} onClick={()=>history.replace(`/cards?name=${name}`)}>
      {name}
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
export default CardLinks;