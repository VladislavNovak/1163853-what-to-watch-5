import React, {PureComponent} from "react";

const withAuth = (Component) => {
  class WithAuth extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``,
        isValidEmail: true,
        isValidPassword: true,
      };

      this._handleInputEmailChange = this._handleInputEmailChange.bind(this);
      this._handleInputPasswordChange = this._handleInputPasswordChange.bind(this);
      this._changeEmailStatus = this._changeEmailStatus.bind(this);
      this._changePasswordStatus = this._changePasswordStatus.bind(this);
    }

    _handleInputEmailChange(evt) {
      this.setState({
        email: evt.target.value,
      });
    }

    _handleInputPasswordChange(evt) {
      this.setState({
        password: evt.target.value,
      });
    }

    _changeEmailStatus(value) {
      this.setState({
        isValidEmail: value,
      });
    }

    _changePasswordStatus(value) {
      this.setState({
        isValidPassword: value,
      });
    }

    render() {
      const {email, password, isValidEmail, isValidPassword} = this.state;
      return (
        <Component
          {...this.props}
          email={email}
          password ={password}
          isValidEmail={isValidEmail}
          isValidPassword={isValidPassword}
          onInputEmailChange={this._handleInputEmailChange}
          onInputPasswordChange={this._handleInputPasswordChange}
          changeEmailStatus={this._changeEmailStatus}
          changePasswordStatus={this._changePasswordStatus}
        />
      );
    }
  }

  return WithAuth;
};

export default withAuth;
