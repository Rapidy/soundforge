import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import API from "../../utils/API";

// import icon from '../../img/man2.png';

class SignUp extends Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      apiToken: '' ,
      username: '',
      email: '',
      password: '',
      password_confirm: '',
      passwordErrorLength: '',
      passwordErrorСoincidence: '',
      userError: '',
      emailError: ''
    };
  } 

  handleSubmit(e) {
      if(this.state.password.length < 8){
          this.setState({passwordErrorLength:'Пароль должен быть минимум из 8 символов.',passwordErrorСoincidence:''});
      }else{
        this.setState({passwordErrorLength:''});
        if (this.state.password_confirm !== this.state.password) {
          this.setState({passwordErrorСoincidence:'Пароли не совпадают попробуйте еще раз.', passwordErrorLength:''});
        }else{
          this.setState({passwordErrorСoincidence:''});

          const dataUser = {
            'username': this.state.username,
            'email': this.state.email,
            'password': this.state.password,
            'password_confirm': this.state.password_confirm
          };
      
          API.post('/user/register', dataUser)
              .then(res => {
                this.setState({userError: '',emailError: ''});
                if(typeof res.data === 'object'){
                  // res.data.username = 'Имя пользователя уже занято.';
                  // res.data.email = 'Почта уже занята.';
                  this.setState({
                    userError: res.data.username,
                    emailError: res.data.email
                  });

                }else if(typeof res.data === 'string'){
                  const { cookies } = this.props;
                  cookies.set('apiToken', res.data, { path: '/' });
                  this.setState({ apiToken: res.data });
                  window.location = '/';
                }
              }).catch(error => {console.error(`😱 Axios request failed: ${error}`);});
        }
      }
    
    e.preventDefault();
  }

  handleInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  }

  render(){
    return (
      	<section className="signup">
          <div className="container">
            <div className="signup-container">
              <div className="signup-container__form signup-container__form--register">
                <h2 className="signup-container__title">Регистрация</h2>
                <form className="form" onSubmit={this.handleSubmit} autoComplete="off">
                  <div className="form-group">
                    <label className="form-group__label" for="username"><i className="fas fa-user-alt"></i></label>
                    <input className="form-group__input" type="text" name="username" placeholder="Придумайте имя" value={this.state.username} onChange={this.handleInputChange} required />
                    {this.state.userError ? <span className="error form__error"><i className="fas fa-exclamation-circle"></i> {this.state.userError}</span> : null }
                  </div>
                  <div className="form-group">
                    <label className="form-group__label" for="email"><i className="fas fa-envelope"></i></label>
                    <input className="form-group__input" type="email" name="email" placeholder="Введите почту" value={this.state.email} onChange={this.handleInputChange} required />
                    {this.state.emailError ? <span className="error form__error"><i className="fas fa-exclamation-circle"></i> {this.state.emailError}</span> : null }
                  </div>
                  <div className="form-group">	
                    <label className="form-group__label" for="password"><i className="fas fa-key"></i></label>
                    <input className="form-group__input" type="password" name="password"  placeholder="Введите пароль" value={this.state.password} onChange={this.handleInputChange} required />
                    {this.state.passwordErrorLength ? <span className="error form__error"><i class="fas fa-exclamation-circle"></i> {this.state.passwordErrorLength}</span> : null }
                  </div>
                  <div className="form-group">
                    <label className="form-group__label" for="password_confirm"><i className="fas fa-unlock-alt"></i></label>
                    <input className="form-group__input" type="password" name="password_confirm"  placeholder="Повторите пароль" value={this.state.password_confirm} onChange={this.handleInputChange} required />
                    {this.state.passwordErrorСoincidence ? <span className="error form__error"><i className="fas fa-exclamation-circle"></i> {this.state.passwordErrorСoincidence}</span> : null }
                  </div>
                  <div className="form-group">
                    <input type="submit" name="submit" className="form-submit" value="Создать аккаунт"/>
                  </div> 
                  <NavLink to="/login" className="signup-container__link">У меня уже есть аккаунт</NavLink>
                </form>
              </div>
              <div className="signup-container__image url-register"></div>
            </div>
          </div>
	      </section>
    )
  }
}

export default withCookies(SignUp);