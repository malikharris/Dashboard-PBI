/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import Background from '../../components/Background'
import Logo from '../../components/Logo';
import CustomButton from '../../components/CustomButton/CustomButton';
import FormField from '../../components/FormField/FormField';
import containsCOREDomain from '../../utils/containsCOREDomain';
import './Login.css';

const ForgotPassword=()=>{
  const [state, setState] = useState({
    confirmationCode: '',
    email: '',
    newPassword: '',
    codeSent: false,
    confirmed: false,
  })

  const onChangeCode = e => {
    setState({ confirmationCode: e.target.value });
  };

  const onChangeEmail = e => {
    setState({ email: e.target.value });
  };

  const onChangeNewPassword = e => {
    setState({ newPassword: e.target.value });
  };

  const onGetCode = () => {
    const { email } = state;

    if (!email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid email.');
      return;
    }
    if (containsCOREDomain(email) && email !== 'admin@coreconstruction.com') {
      alert('Please use the CORE Employee Azure login portal to reset any passwords.');
      return;
    }

    // After retrieveing the confirmation code from the user
    Auth.forgotPassword(email)
      .then(data => {
        setState({ codeSent: true });
      })
      .catch(err => console.log(err));
  };

  const onUpdatePassword = () => {
    const { email, confirmationCode, newPassword } = state;
    // Collect confirmation code and new password , then
    Auth.forgotPasswordSubmit(email, confirmationCode, newPassword)
      .then(data => {
        console.log(data);
        setState({ confirmed: true });
      })
      .catch(err => {
        alert(err.message);
        console.log(err);
      });
  };


    const { confirmationCode, confirmed, codeSent, email, newPassword } = state;

    if (confirmed) {
      return <Redirect to="/Login" />;
    }

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
              {codeSent === true ? (
                <div>
                  <p id="emailPromptText">Please enter the code and your new password.</p>
                  <div>
                    <FormField
                      onChange={onChangeCode}
                      header="Code"
                      value={confirmationCode}
                      placeholder="000000"
                    />
                    <FormField
                      onChange={onChangeNewPassword}
                      header="New Password"
                      value={newPassword}
                      placeholder="*************"
                    />
                  </div>
                  <div style={{ clear: 'both', paddingTop: 30 }}>
                    <CustomButton onClick={onUpdatePassword} text="Update Password" />
                  </div>
                </div>
              ) : (
                <div>
                  <p id="emailPromptText">
                    Please enter your email to receive a verification code.
                  </p>
                  <div>
                    <FormField
                      onChange={onChangeEmail}
                      header="Email"
                      value={email}
                      placeholder="janedoe@construction.com"
                    />
                  </div>
                  <div style={{ clear: 'both', paddingTop: 30 }}>
                    <CustomButton onClick={onGetCode} text="Get Code" />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="formViewBlock headerOrFooter" />
        </div>
      </div>
    );
  }


export default ForgotPassword;
