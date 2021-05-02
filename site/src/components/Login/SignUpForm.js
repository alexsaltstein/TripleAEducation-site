import React from 'react';
import { Button } from 'react-materialize';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'

const SignUpForm = () => {
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorText, setErrorText] = React.useState(false)
  const history = useHistory();

  const handleSubmit = (event) => {
    if (username === '' || password === '' || email === '') {
      event.preventDefault()
      setErrorText(true);
    } else {
      history.replace('/home')
    }
  }

  return (
    <div class="row">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <b>Create your account!</b>
        <i>Please enter your account details.</i>
      </div>
      <form class="col s12" onSubmit={(event) => handleSubmit(event)}>
        <div class="row">
          <div class="input-field col s12">
            <input id="email" type='email' class="validate" value={email} onChange={(event) => setEmail(event.target.value)}></input>
            <label for="email">Email</label>
          </div>
        </div>
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
        {errorText && <p style={{ color: 'red', fontWeight: 'bold' }}>Error: Please enter a valid username and/or password</p>}
        <div style={{ flexDirection: 'column', }}>
          <input type="submit" value="SIGN UP" style={styles.submitButton2} />
        </div>
        <br></br>
        <a href="/">Already have an account?</a>
      </form>
    </div >
  )
}

const styles = {
  buttons: {
    color: '#7CFC00'
  },
  submitButton: {
    background: '#66bb6a',
    border: 'none',
    color: 'white',
    padding: '5px 10px',
    fontSize: 20,
    borderRadius: 3,
    boxShadow: '1px 2px 3px #9E9E9E'
  },
  submitButton2: {
    background: '#66bb6a',
    border: 'none',
    color: 'white',
    fontSize: 20,
    paddingBottom: 5,
    boxShadow: '1px 2px 3px #9E9E9E'
  }
}

export default SignUpForm;