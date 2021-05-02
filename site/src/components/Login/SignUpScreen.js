import React from 'react';
import SignUpForm from './SignUpForm';

const SignUpScreen = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <div style={styles.formContainer}>
                <SignUpForm />
            </div>
        </div>
    )
}
const styles = {
    formContainer: {
        width: 300,
        background: 'white',
        padding: 20,
        borderRadius: 10,
        boxShadow: "2px 3px 5px #9E9E9E"
    }
}

export default SignUpScreen;