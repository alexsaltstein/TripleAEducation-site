import React from 'react';
import 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to="/Analytics">
        <Button>Analytics</Button>
      </Link>
    </div>
  );
}

export default Header;