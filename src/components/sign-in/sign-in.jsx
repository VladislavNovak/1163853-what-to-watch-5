import React from "react";
import PropTypes from "prop-types";
import {JumpTo, LOGO_LINK_LIGHT, WarningTypes} from "../../utils/constants";
import {login} from "../../store/api-action";
import {connect} from "react-redux";
import Logo from "../logo/logo";
import Warning from "../warning/warning";

const SignIn = ({
  changeEmailPassword,
  email,
  password,
  isEmailNotValid,
  isSubmitNotValid,
  onChangeEmailStatus,
  onChangeSubmitStatus,
  onInputEmailChange,
  onInputPasswordChange,
}) => {

  const onFormSubmitClick = (evt) => {
    evt.preventDefault();

    const emailIsCorrect = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email);

    onChangeEmailStatus(!emailIsCorrect);
    onChangeSubmitStatus(!emailIsCorrect || !password.length);

    if (!isEmailNotValid && !isSubmitNotValid) {
      changeEmailPassword({email, password});
    }
    changeEmailPassword({email, password});
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo path={JumpTo.ROOT} />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={onFormSubmitClick}>

          {(isSubmitNotValid && <Warning warningType={WarningTypes.INVALID_EMAIL_AND_PASSWORD} />) || (isEmailNotValid && <Warning warningType={WarningTypes.INVALID_EMAIL} />)}

          <div className="sign-in__fields">
            <div className="sign-in__field">
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
            <div className="sign-in__field">
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
  isEmailNotValid: PropTypes.bool.isRequired,
  isSubmitNotValid: PropTypes.bool.isRequired,
  onChangeEmailStatus: PropTypes.func.isRequired,
  onChangeSubmitStatus: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeEmailPassword(authData) {
    dispatch(login(authData));
  }
});

export {SignIn};
export default connect(null, mapDispatchToProps)(SignIn);

// class SignIn extends PureComponent {
//   constructor(props) {
//     super(props);

//     this._handleFormSubmitClick = this._handleFormSubmitClick.bind(this);
//   }

//   _handleFormSubmitClick(evt) {
//     evt.preventDefault();

//     const {changeEmailPassword, email, password, isEmailNotValid, isSubmitNotValid, onChangeEmailStatus, onChangeSubmitStatus} = this.props;

//     const emailIsCorrect = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email);

//     onChangeEmailStatus(emailIsCorrect);
//     onChangeSubmitStatus(emailIsCorrect && password.length);

//     if (isEmailNotValid && isSubmitNotValid) {
//       changeEmailPassword({email, password});
//     }
//   }

//   render() {
//     const {email, password, onInputEmailChange, onInputPasswordChange, isEmailNotValid} = this.props;

//     return (
//       <div className="user-page">
//         <header className="page-header user-page__head">
//           <Logo path={JumpTo.ROOT} />

//           <h1 className="page-title user-page__title">Sign in</h1>
//         </header>

//         <div className="sign-in user-page__content">
//           <form
//             action="#"
//             className="sign-in__form"
//             onSubmit={this._handleFormSubmitClick}
//           >
//             {!isEmailNotValid && <Warning warningType={WarningTypes.EMPTY_FAVORITE_LIST} />}

//             <div className="sign-in__fields">
//               <div className="sign-in__field">
//                 <input
//                   value={email}
//                   onChange={onInputEmailChange}
//                   className="sign-in__input"
//                   type="email"
//                   placeholder="Email address"
//                   name="user-email"
//                   id="user-email"
//                 />
//                 <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
//               </div>
//               <div className="sign-in__field">
//                 <input
//                   value={password}
//                   onChange={onInputPasswordChange}
//                   className="sign-in__input"
//                   type="password"
//                   placeholder="Password"
//                   name="user-password"
//                   id="user-password"
//                 />
//                 <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
//               </div>
//             </div>
//             <div className="sign-in__submit">
//               <button className="sign-in__btn" type="submit">Sign in</button>
//             </div>
//           </form>
//         </div>

//         <footer className="page-footer">
//           <Logo path={JumpTo.ROOT} additionalClass={LOGO_LINK_LIGHT} />

//           <div className="copyright">
//             <p>© 2019 What to watch Ltd.</p>
//           </div>
//         </footer>
//       </div>
//     );
//   }
// }

// SignIn.propTypes = {
//   email: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired,
//   onInputEmailChange: PropTypes.func.isRequired,
//   onInputPasswordChange: PropTypes.func.isRequired,
//   changeEmailPassword: PropTypes.func.isRequired,
//   isEmailNotValid: PropTypes.bool.isRequired,
//   isSubmitNotValid: PropTypes.bool.isRequired,
//   onChangeEmailStatus: PropTypes.func.isRequired,
//   onChangeSubmitStatus: PropTypes.func.isRequired,
// };

// const mapDispatchToProps = (dispatch) => ({
//   changeEmailPassword(authData) {
//     dispatch(login(authData));
//   }
// });

// export {SignIn};
// export default connect(null, mapDispatchToProps)(SignIn);
