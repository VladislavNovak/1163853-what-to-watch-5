import React, {PureComponent} from "react";

const withAuth = (Component) => {
  class WithAuth extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``,
      };

      this._handleInputEmailChange = this._handleInputEmailChange.bind(this);
      this._handleInputPasswordChange = this._handleInputPasswordChange.bind(this);
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

    render() {

      return (
        <Component
          {...this.props}
          email={this.state.email}
          password ={this.state.password}
          onInputEmailChange={this._handleInputEmailChange}
          onInputPasswordChange={this._handleInputPasswordChange}
        />
      );
    }
  }

  return WithAuth;
};

export default withAuth;
