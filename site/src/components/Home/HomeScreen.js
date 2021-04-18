import React from 'react';
import Header from '../Widgets/Header';

const HomeScreen = () => {
  return (
    <div>
      <Header></Header>
      <p>Home Screen</p>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p>Recent Analytics</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p>Random Memorization Sets</p>
      </div>
    </div>
  )
}

export default HomeScreen;