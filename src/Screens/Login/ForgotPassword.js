/* eslint-disable no-unused-vars */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import image from '../../assets/images/Login_Image.svg';
import logo from '../../assets/images/CORE-logo.svg';

import FormField from '../../comps/FormField/FormField';
import CustomButton from '../../comps/CustomButton/CustomButton';
import { containsCOREDomain } from '../../utils';
import './Login.css';

export default class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmationCode: '',
      email: '',
      newPassword: '',
      codeSent: false,
      confirmed: false,
    };
  }

  onChangeCode = e => {
    this.setState({ confirmationCode: e.target.value });
  };

  onChangeEmail = e => {
    this.setState({ email: e.target.value });
  };

  onChangeNewPassword = e => {
    this.setState({ newPassword: e.target.value });
  };

  onGetCode = () => {
    const { email } = this.state;

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
        this.setState({ codeSent: true });
      })
      .catch(err => console.log(err));
  };

  onUpdatePassword = () => {
    const { email, confirmationCode, newPassword } = this.state;
    // Collect confirmation code and new password , then
    Auth.forgotPasswordSubmit(email, confirmationCode, newPassword)
      .then(data => {
        console.log(data);
        this.setState({ confirmed: true });
      })
      .catch(err => {
        alert(err.message);
        console.log(err);
      });
  };

  render() {
    const { confirmationCode, confirmed, codeSent, email, newPassword } = this.state;

    if (confirmed) {
      return <Redirect to="/Login" />;
    }

    return (
      <div id="loginScreenContainer">
        <div id="loginImageView">
          <img src={image} id="loginImage" alt="login" />
        </div>
        <div id="loginFormView">
          <div className="formViewBlock headerOrFooter" />
          <div className="formViewBlock">
            <div>
              <div>
                <img id="coreLogo" src={logo} alt="The CORE Logo" />
              </div>
              {codeSent === true ? (
                <div>
                  <p id="emailPromptText">Please enter the code and your new password.</p>
                  <div>
                    <FormField
                      onChange={this.onChangeCode}
                      header="Code"
                      value={confirmationCode}
                      placeholder="000000"
                    />
                    <FormField
                      onChange={this.onChangeNewPassword}
                      header="New Password"
                      value={newPassword}
                      placeholder="*************"
                    />
                  </div>
                  <div style={{ clear: 'both', paddingTop: 30 }}>
                    <CustomButton onClick={this.onUpdatePassword} text="Update Password" />
                  </div>
                </div>
              ) : (
                <div>
                  <p id="emailPromptText">
                    Please enter your email to receive a verification code.
                  </p>
                  <div>
                    <FormField
                      onChange={this.onChangeEmail}
                      header="Email"
                      value={email}
                      placeholder="janedoe@construction.com"
                    />
                  </div>
                  <div style={{ clear: 'both', paddingTop: 30 }}>
                    <CustomButton onClick={this.onGetCode} text="Get Code" />
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
}
