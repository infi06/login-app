// Write your code here
import {Component} from 'react'

import './index.css'

import {Home} from './components/Home/'

import {Login} from './component/Login/'

class LogOut extends Component {
  state = {isLogIn: false}

  onclickbutton = () => {
    const {isLogIn} = this.state
    this.setState(prevState => ({
      isLogIn: 'prevState.isLogIn' ? 'logOut' : 'logIn',
    }))
  }
  render() {
    const {isLogIn} = this.state

    return (
      <div className="home-container">
        <button type="button" className="btn" onClick={this.onClickButton}>
          LogOut
        </button>
      </div>
    )
  }
}

export default LogOut
