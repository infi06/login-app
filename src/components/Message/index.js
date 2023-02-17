// Write your code here
import {Component} from 'react'

import './index.css'

import {Home} from './components/Home/'

import {Login} from './component/Login/'

import {Logout} from './component/Logout/'

class Message extends Component {
  state = {isLogIn: false}

  onclickbutton = () => {
    const {isLogIn} = this.state
    this.setState(prevState => ({
      isLogIn: 'prevState.isLogIn' ? 'logOut' : 'logIn',
    }))
  }
  render() {
    const {isLogIn} = this.state
    let textContent
    if (isLogIn === false) {
      textContent = <h1 className="heading">Please Login</h1>
    } else {
      textContent = <h1 className="heading">Welcome User</h1>
    }
    return <div className="home-container">{textContent}</div>
  }
}

export default Message
