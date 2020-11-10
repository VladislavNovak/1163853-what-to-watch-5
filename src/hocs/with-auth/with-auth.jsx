import React, {PureComponent} from "react";

const withAuth = (Component) => {
  class WithAuth extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``,
      };

      this.onSubmitFormClickHandler = this.onSubmitFormClickHandler.bind(this);
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

    onSubmitFormClickHandler(evt) {
      evt.preventDefault();

      const {onSubmitHandler} = this.props;
      const {email, password} = this.state;

      onSubmitHandler({email, password});
    }

    render() {

      return (
        <Component
          // {...this.props}
          email={this.state.email}
          password ={this.state.password}
          onSubmitFormClickHandler={this.onSubmitFormClickHandler}
          onEmailFieldChangeHandler={this.onEmailFieldChangeHandler}
          onPasswordFieldChangeHandler={this.onPasswordFieldChangeHandler}
          onSubmitHandler={onSubmitHandler}
        />
      );
    }
  }

  return WithAuth;
};

export default withAuth;
