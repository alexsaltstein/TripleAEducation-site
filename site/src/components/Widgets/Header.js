import React from 'react';
import 'materialize-css';
import { Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import TripleALogo from '../../assets/tripleA.png';

const Header = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', margin: 10, }}>
      <img alt="Triple A Education Logo" style={{ height: 50, width: 50 }} src={TripleALogo} />
      <Link to="/home">
        <Button style={{ margin: 5 }}>Home</Button>
      </Link>
      <Link to="/analytics">
        <Button style={{ margin: 5 }}>Analytics</Button>
      </Link>
      <a href="/">
        <Button style={{ margin: 5 }}>Logout</Button>
      </a>
    </div>
  );
}

export default Header;