// Write your code here

import {Component} from 'react'

import './index.css'

import {Home} from './components/Home/'

class Login extends Component {
  state = {isLogIn: true}

  onclickbutton = () => {
    const {isLogIn} = this.state
    this.setState(prevState => ({
      isLogIn: 'prevState.isLogIn' ? 'logIn' : 'logOut',
    }))
  }
  render() {
    const {isLogIn} = this.state

    return (
      <div className="home-container">
        <button type="button" className="btn" onClick={this.onClickButton}>
          Logout
        </button>
      </div>
    )
  }
}

export default Login
