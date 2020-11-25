import React, {PureComponent} from "react";

const withAuth = (Component) => {
  class WithAuth extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``,
        isEmailNotValid: false,
        isSubmitNotValid: false,
      };

      this._handleInputEmailChange = this._handleInputEmailChange.bind(this);
      this._handleInputPasswordChange = this._handleInputPasswordChange.bind(this);
      this._handleChangeEmailStatus = this._handleChangeEmailStatus.bind(this);
      this._handleChangeSubmitStatus = this._handleChangeSubmitStatus.bind(this);
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

    _handleChangeEmailStatus(value) {
      this.setState({
        isEmailNotValid: value,
      });
    }

    _handleChangeSubmitStatus(value) {
      this.setState({
        isSubmitNotValid: value,
      });
    }

    render() {
      const {email, password, isEmailNotValid, isSubmitNotValid} = this.state;
      return (
        <Component
          {...this.props}
          email={email}
          password ={password}
          isEmailNotValid={isEmailNotValid}
          isSubmitNotValid={isSubmitNotValid}
          onInputEmailChange={this._handleInputEmailChange}
          onInputPasswordChange={this._handleInputPasswordChange}
          onChangeEmailStatus={this._handleChangeEmailStatus}
          onChangeSubmitStatus={this._handleChangeSubmitStatus}
        />
      );
    }
  }

  return WithAuth;
};

export default withAuth;
