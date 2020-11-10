import React, {PureComponent} from "react";

const withAuth = (Component) => {
  class WithAuth extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``,
      };

      this.onEmailFieldChangeHandler = this.onEmailFieldChangeHandler.bind(this);
      this.onPasswordFieldChangeHandler = this.onPasswordFieldChangeHandler.bind(this);
    }

    onEmailFieldChangeHandler(evt) {
      this.setState({
        email: evt.target.value,
      });
    }

    onPasswordFieldChangeHandler(evt) {
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
          onEmailFieldChangeHandler={this.onEmailFieldChangeHandler}
          onPasswordFieldChangeHandler={this.onPasswordFieldChangeHandler}
        />
      );
    }
  }

  return WithAuth;
};

export default withAuth;
