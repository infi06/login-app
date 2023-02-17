// Write your code here

import {Component} from 'react'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <h1 className="heading">Please Login</h1>
        <button type="button" className="btn">
          Login
        </button>
      </div>
    )
  }
}

export default Home
