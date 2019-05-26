import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getTitle } from '../store/actions/titleActions'

class Login extends Component {
  componentDidMount() {
    this.props.getTitle()
  }
  render() {
    return (
      <div className="login" style={{ textAlign: 'center' }}>
        <h1>I am login page.</h1>
        <h2>{ this.props.title }</h2>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title: state.homeTitle.title
})

export default connect(mapStateToProps, { getTitle })(Login)