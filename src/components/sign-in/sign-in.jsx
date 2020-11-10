import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {JumpTo} from "../../utils/constants";
import {login} from "../../store/api-action";
import {connect} from "react-redux";

class SignIn extends PureComponent {
  constructor(props) {
    super(props)

    this.onSubmitFormClickHandler = this.onSubmitFormClickHandler.bind(this);
  }

  onSubmitFormClickHandler(evt) {
    evt.preventDefault();

    const {onSubmitHandler, email, password} = this.props;

    onSubmitHandler({email, password});
  }

  render() {
    const {email, password, onEmailFieldChangeHandler, onPasswordFieldChangeHandler} = this.props;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to={JumpTo.ROOT} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form
            action="#"
            className="sign-in__form"
            onSubmit={this.onSubmitFormClickHandler}
          >
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  value={email}
                  onChange={onEmailFieldChangeHandler}
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input
                  value={password}
                  onChange={onPasswordFieldChangeHandler}
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <footer className="page-footer">
          <div className="logo">
            <Link to={JumpTo.ROOT} className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    );
  }
}

SignIn.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onEmailFieldChangeHandler: PropTypes.func.isRequired,
  onPasswordFieldChangeHandler: PropTypes.func.isRequired,
  onSubmitHandler: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmitHandler(authData) {
    dispatch(login(authData));
  }
});

export {SignIn};
export default connect(null, mapDispatchToProps)(SignIn);
