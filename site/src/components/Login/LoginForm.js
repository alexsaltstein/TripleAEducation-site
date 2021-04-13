import React from 'react';
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();

  const handleSubmit = () => {
    alert(username + ' ' + password);
    history.push('/home')
  }
  return (
    <div class="row">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <b>Welcome to Triple A Education!</b>
        <i>Please enter your account details.</i>
      </div>
      <form class="col s12" onSubmit={handleSubmit}>
        <div class="row">
          <div class="input-field col s12">
            <input id="username" type="text" class="validate" value={username} onChange={(event) => setUsername(event.target.value)}></input>
            <label for="username">Username</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="password" type="password" class="validate" value={password} onChange={(event) => setPassword(event.target.value)}></input>
            <label for="password">Password</label>
          </div>
        </div>
        <input type="submit" value="Login" style={styles.submitButton} />
      </form>
    </div>
  )
}

const styles = {
  submitButton: {
    background: '#66bb6a',
    border: 'none',
    color: 'white',
    padding: '5px 10px',
    fontSize: 20,
    borderRadius: 3,
    boxShadow: '1px 2px 3px #9E9E9E'
  }
}

export default LoginForm;