import React from 'react';

import './sign-in-and-sign-out.styles.css';
import SignIn from '../../components/sign-in/sign-in.component.jsx';
import SignUp from '../../components/sign-up/sign-up.component.jsx';
const SignInAndSignUp = () => {
    return(
        <div className='sign-in-and-sign-up'>
              <SignIn/>
              <SignUp/>
        </div>
    )
};

export default SignInAndSignUp;