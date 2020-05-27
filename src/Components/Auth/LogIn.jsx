import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import API from "../../utils/API";

import icon from '../../img/man.png';

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
      password: ''
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
    API.post('/login', {'email' : this.state.email,'password' : this.state.password})
       .then(res => {
          this.onChangeCookies(res.data.token);
          this.redirectHome();

       }).catch(error => {console.error(`😱 Axios request failed: ${error}`);});
  
    event.preventDefault();
  }

  redirectHome(){
    if (this.state.apiToken !== 'no') { 
       window.location = '/';
       return null;
    } 
  }

  render() {
    this.redirectHome();
    return (
      <div className="signup">

        <div className="signup-container">

          <div className="signup-container__icon">
            <img src={icon} alt="Иконка человека"/>
          </div>

          <form onSubmit = {this.handleSubmit} autoComplete="off">

            <div className="signup-container__input">
              <input type="email" name="email" placeholder="Введите почту" value={this.state.email} onChange={this.handleInputChange} required/>
            </div>

            <div className="signup-container__input">
              <input type="password" name="password" placeholder="Введит пароль" value={this.state.password} onChange={this.handleInputChange} required/>
            </div>

            <button type="submit" className="signup-container__btn">Войти в аккаунт</button>

          </form>

          <NavLink to="/signup">Нет аккаунта? Создать</NavLink>

        </div>

    </div>
    )
  }

}

export default withCookies(LogIn);
