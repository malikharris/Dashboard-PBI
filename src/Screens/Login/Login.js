/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import { Auth, Hub } from 'aws-amplify';
import { withOAuth } from 'aws-amplify-react';
import Background from '../../components/Background'
import Logo from '../../components/Logo';
import CustomButton from '../../components/CustomButton/CustomButton';
import FormField from '../../components/FormField/FormField';
import './Login.css';


const Login=(props)=>{
  const [state, setState] = useState({
    name: '',
    /* eslint-disable no-undef */
    email: localStorage.getItem('current_user_email') || '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    user: undefined,
    showSignUp: false,
    rememberMe: !!localStorage.getItem('current_user_email'),
    forgotPassword: false,
  });

  const {name, email, password, confirmPassword, phoneNumber, user, showSignUp, rememberMe, forgotPassword} = state;

  useEffect(() => {
    Hub.listen('auth', data => {
      switch (data.payload.event) {
        case 'signIn':
          this.setState({ user: data.payload.data });
          break;
        case 'signIn_failure':
          console.log('login -> sign in error: ', JSON.stringify(data, null, 2));
          alert(
            `Error occured while attempting to sign in. Please share this error message: ${JSON.stringify(
              data,
              null,
              2,
            )}`,
          );
          break;
        default:
          break;
      }
    });

    Auth.currentAuthenticatedUser()
      .then(user => {
        this.setState({ user });
      })
      .catch(() => console.log('Not signed in'));
  }, []);

  const onLogin=()=>{
    console.log("Log in clicked")
  }
  const onChangeEmail = event => {
    setState({ email: event.target.value });
  };

  const onChangePassword = event => {
    setState({ password: event.target.value });
  };

  const onCheckRememberMe = e => {
    setState({ rememberMe: e.target.checked });
  };

  const onForgotPassword = () => {
    setState({ forgotPassword: true });
  };

    if (forgotPassword) {
      return <Redirect to="/ForgotPassword" />;
    }

    if (user && showSignUp) {
      return (
        <Redirect
          to={{
            pathname: '/Confirm',
            search: `?username=${email}`,
          }}
        />
      );
    }

    if (user) return <Redirect to="/App" />;

    return (

      <div id="loginScreenContainer">
      <Background width="60%"/>
        <div id="loginImageView"/>
        <div id="loginFormView">
          <div className="formViewBlock headerOrFooter" />
          <div className="formViewBlock">
            <div>
              <div>
                <Logo/>
              </div>
                <div>
                  <FormField
                    onChange={onChangeEmail}
                    header="Email"
                    value={email}
                    placeholder="johndoe@coreconstruction.com"
                  />
                  <div style={{ marginTop: 40 }}>
                    <FormField
                      onChange={onChangePassword}
                      header="Password"
                      value={password}
                      type="password"
                      placeholder="************"
                    />
                  </div>
                  <div id="signUpDiv">
                    <p id="rememberMeSegment">
                      <input
                        className="rememberMeCheckbox"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={onCheckRememberMe}
                      />
                      <span style={{ marginTop: 3 }}> Remember Me</span>
                    </p>
                  </div>
                  <div id="subcontractorLoginButtonContainer">
                    <CustomButton onClick={onLogin} text="Login" />
                  </div>
                </div>
            </div>
          </div>
          <div className="formViewBlock headerOrFooter">
            <button type="button" id="forgotPasswordView" onClick={onForgotPassword}>
              <p id="forgotPasswordText">Forgot Password?</p>
            </button>
            <p id="copyrightFooter">
              {'Copyright '}
              {new Date().getFullYear()}
              {' The CORE Group LTD.'}
            </p>
          </div>
        </div>
      </div>
    );
  }




export default withOAuth(Login);
