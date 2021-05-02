import React from 'react';
import { Image } from 'react'
import 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';
import { Link } from 'react-router-dom';
import TripleALogo from '../../assets/tripleA.png';

const Header = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', margin: 10, }}>
      <img style={{ height: 50, width: 50 }} src={TripleALogo} />
      <Link to="/home">
        <Button style={{ margin: 5 }}>Home</Button>
      </Link>
      <Link to="/analytics">
        <Button style={{ margin: 5 }}>Analytics</Button>
      </Link>
      <Link to="/">
        <Button style={{ margin: 5 }}>Logout</Button>
      </Link>
    </div>
  );
}

export default Header;