// import React, {PureComponent, createRef} from "react";
// import PropTypes from "prop-types";
// import {Link} from "react-router-dom";
// import {JumpTo} from "../../utils/constants";
// import {login} from "../../store/api-action";
// import {connect} from "react-redux";

// class SignIn extends PureComponent {
//   constructor(props) {
//     super(props);

//     // this.loginRef = createRef();
//     // this.passwordRef = createRef();

//     this.state = {
//       email: null,
//       passward: null,
//     }

//     this._onSubmitFieldClickHandler = this._onSubmitFieldClickHandler.bind(this);
//   }

//   _onSubmitFieldClickHandler(evt) {
//     const {onSubmit} = this.props;
//     evt.preventDefault();

//     this.setState({
//       email:
//     })

//     onSubmit({
//       email: this.loginRef.current.value,
//       password: this.passwordRef.current.value,
//     });
//   }

//   render() {

//     return (
//       <div className="user-page">
//         <header className="page-header user-page__head">
//           <div className="logo">
//             <Link to={JumpTo.ROOT} className="logo__link">
//               <span className="logo__letter logo__letter--1">W</span>
//               <span className="logo__letter logo__letter--2">T</span>
//               <span className="logo__letter logo__letter--3">W</span>
//             </Link>
//           </div>

//           <h1 className="page-title user-page__title">Sign in</h1>
//         </header>

//         <div className="sign-in user-page__content">
//           <form
//             action="#"
//             className="sign-in__form"
//             onSubmit={this._onSubmitFieldClickHandler}
//           >
//             <div className="sign-in__fields">
//               <div className="sign-in__field">
//                 <input
//                   value={email}
//                   onChange={onEmailFieldChangeHandler}
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
//                   onChange={onPasswordFieldChangeHandler}
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
//           <div className="logo">
//             <Link to={JumpTo.ROOT} className="logo__link logo__link--light">
//               <span className="logo__letter logo__letter--1">W</span>
//               <span className="logo__letter logo__letter--2">T</span>
//               <span className="logo__letter logo__letter--3">W</span>
//             </Link>
//           </div>

//           <div className="copyright">
//             <p>© 2019 What to watch Ltd.</p>
//           </div>
//         </footer>
//       </div>
//     );
//   }
// }

// SignIn.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit(authData) {
//     dispatch(login(authData));
//   }
// });

// export {SignIn};
// export default connect(null, mapDispatchToProps)(SignIn);

// --------------------------------------------------------------------------

import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {JumpTo} from "../../utils/constants";
import {login} from "../../store/api-action";
import {connect} from "react-redux";

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();

    this._onSubmitFieldClickHandler = this._onSubmitFieldClickHandler.bind(this);
  }

  _onSubmitFieldClickHandler(evt) {
    const {onSubmit} = this.props;

    evt.preventDefault();

    onSubmit({
      email: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  render() {

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
            onSubmit={this._onSubmitFieldClickHandler}
          >
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  ref={this.loginRef}
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
                  ref={this.passwordRef}
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
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {SignIn};
export default connect(null, mapDispatchToProps)(SignIn);
