import React from 'react';
import LoginForm from './LoginForm';

const LoginScreen = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <div style={styles.fomrContainer}>
        <LoginForm />
      </div>
    </div>
  )
}
const styles = {
  fomrContainer: {
    width: 300,
    background: 'white',
    padding: 20,
    borderRadius: 10,
    boxShadow: "2px 3px 5px #9E9E9E"
  }
}

export default LoginScreen;