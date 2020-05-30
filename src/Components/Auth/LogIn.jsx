import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import API from "../../utils/API";

// import icon from '../../img/man.png';

class LogIn extends Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    const { cookies } = props;

    this.state = {
      apiToken: cookies.get('apiToken'),
      email: '',
      password: '',
      errorForm:''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } 

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  onChangeCookies(apiToken) {
    const { cookies } = this.props;    
    cookies.set('apiToken', apiToken, { path: '/' });
    this.setState({ apiToken });
  }

  handleSubmit(event) {
    API.post('/user/login', {'email' : this.state.email,'password' : this.state.password})
       .then(res => {
          this.onChangeCookies(res.data);
          this.redirectHome();

       }).catch(error => {
          this.setState({errorForm: 'Неверная почта или пароль.'});
       });
  
    event.preventDefault();
  }

  redirectHome(){
    if (this.state.apiToken !== 'no') { 
       window.location = '/';
       return null;
    } 
  }

  render() {
    // this.redirectHome();
    return (
      <section className="signup">
          <div className="container">
            <div className="signup-container">
              <div className="signup-container__image url-login"></div>
              <div className="signup-container__form signup-container__form--login">
                <h2 className="signup-container__title">Авторизация</h2>
                <form onSubmit={this.handleSubmit} className="form" autoComplete="off">
                  {this.state.errorForm ? <span className="error form__error-login"><i className="fas fa-exclamation-circle"></i> {this.state.errorForm}</span> : null }
                  <div className="form-group">
                    <label className="form-group__label" for="email"><i className="fas fa-envelope"></i></label>
                    <input className="form-group__input" type="email" name="email" placeholder="Введите почту" value={this.state.email} onChange={this.handleInputChange} required />
                  </div>
                  <div className="form-group">
                    <label className="form-group__label" for="password"><i className="fas fa-key"></i></label>
                    <input className="form-group__input" type="password" name="password"  placeholder="Введите пароль" value={this.state.password} onChange={this.handleInputChange} required />
                  </div>
                  <div className="form-group">
                    <input type="submit" name="submit" className="form-submit" value="Войти"/>
                  </div> 
                  <NavLink to="/signup" className="signup-container__link">Нет аккаунта? Создать</NavLink>
                </form>
              </div>
            </div>
          </div>
      </section>
    )
  }

}

export default withCookies(LogIn);
