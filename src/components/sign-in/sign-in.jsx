import React from "react";
import PropTypes from "prop-types";
import {JumpTo, LOGO_LINK_LIGHT, REG, WarningTypes} from "../../utils/constants";
import {login} from "../../store/api-action";
import {connect} from "react-redux";
import Logo from "../logo/logo";
import Warning from "../warning/warning";

const SignIn = ({
  email,
  password,
  isValidEmail,
  isValidPassword,
  onInputEmailChange,
  onInputPasswordChange,
  changeEmailStatus,
  changePasswordStatus,
  changeEmailPassword,
}) => {

  const onFormSubmitClick = (evt) => {
    evt.preventDefault();

    const emailIsCorrect = REG.test(email);
    const passwordIsCorrect = Boolean(password.length);

    changeEmailStatus(emailIsCorrect);
    changePasswordStatus(passwordIsCorrect);

    if (passwordIsCorrect && emailIsCorrect) {
      changeEmailPassword({email, password});
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo path={JumpTo.ROOT} />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={onFormSubmitClick}>

          {(!isValidEmail && isValidPassword && <Warning warningType={WarningTypes.INVALID_EMAIL} />)}

          {(!isValidPassword && <Warning warningType={WarningTypes.INVALID_EMAIL_AND_PASSWORD} />)}

          <div className="sign-in__fields">
            <div className={`sign-in__field ${!isValidEmail && `sign-in__field--error`}` }>
              <input
                value={email}
                onChange={onInputEmailChange}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                required
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={`sign-in__field ${!isValidEmail && `sign-in__field--error`}` }>
              <input
                value={password}
                onChange={onInputPasswordChange}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                required
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
        <Logo path={JumpTo.ROOT} additionalClass={LOGO_LINK_LIGHT} />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

SignIn.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onInputEmailChange: PropTypes.func.isRequired,
  onInputPasswordChange: PropTypes.func.isRequired,
  changeEmailPassword: PropTypes.func.isRequired,
  isValidEmail: PropTypes.bool.isRequired,
  isValidPassword: PropTypes.bool.isRequired,
  changeEmailStatus: PropTypes.func.isRequired,
  changePasswordStatus: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeEmailPassword(authData) {
    dispatch(login(authData));
  }
});

export {SignIn};
export default connect(null, mapDispatchToProps)(SignIn);
