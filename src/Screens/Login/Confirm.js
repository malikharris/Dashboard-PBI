/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import image from '../../assets/images/Login_Image.svg';
import logo from '../../assets/images/CORE-logo.svg';

import FormField from '../../comps/FormField/FormField';
import CustomButton from '../../comps/CustomButton/CustomButton';
import './Login.css';

export default class Confirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmationCode: '',
      confirmed: false,
    };
  }

  onChangeCode = e => {
    this.setState({ confirmationCode: e.target.value });
  };

  onConfirm = () => {
    const { confirmationCode } = this.state;
    const {
      location: { search },
    } = this.props;
    let username = '';

    const params = new URLSearchParams(search);
    username = params.get('username');

    // After retrieveing the confirmation code from the user
    Auth.confirmSignUp(username, confirmationCode)
      /* eslint-disable no-unused-vars */
      .then(data => {
        this.setState({ confirmed: true });
      })
      .catch(err => alert(err.message));
  };

  render() {
    const { confirmationCode, confirmed } = this.state;

    if (confirmed) {
      return <Redirect to="/App" />;
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
              <p id="emailPromptText">Please check your email for a confirmation code.</p>
              <div>
                <FormField
                  onChange={this.onChangeCode}
                  header="Confirmation Code"
                  value={confirmationCode}
                  placeholder="000000"
                />
              </div>
              <div style={{ clear: 'both', paddingTop: 30 }}>
                <CustomButton onClick={this.onConfirm} text="Confirm Code" />
              </div>
            </div>
          </div>
          <div className="formViewBlock headerOrFooter" />
        </div>
      </div>
    );
  }
}

Confirm.propTypes = {
  location: PropTypes.object.isRequired,
};
