import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getTitle } from '../store/actions/titleActions'

class Register extends Component {
  componentDidMount() {
    this.props.getTitle()
  }
  render() {
    return (
      <div className="register" style={{ textAlign: 'center' }}>
        <h1>I am register page.</h1>
        <h2>{ this.props.title }</h2>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title: state.homeTitle.title
})

export default connect(mapStateToProps, { getTitle })(Register)