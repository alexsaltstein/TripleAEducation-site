import React from 'react';
import { connect } from 'react-redux';
import Header from '../Widgets/Header';

const HomeScreen = ({val}) => {
  console.log(val);
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

const mapStateToProps = (state) => ({
  val: state.toDoList
})
export default connect(mapStateToProps, null)(HomeScreen);