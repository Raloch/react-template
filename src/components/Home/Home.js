import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTitle, changeTitle } from '../store/actions/titleActions'

class Home extends Component {
  componentDidMount() {
    this.props.getTitle()
  }
  changeHandler = (e) => {
    this.props.changeTitle(e.target.value)
  }
  render() {
    return (
        <div className="home" style={{ textAlign: 'center' }}>
          <h1><Link to="/login">I am home page.</Link></h1>
          <input type="text" value={this.props.title} onChange={ this.changeHandler } />
        </div>
      
    );
  }
}

const mapStateToProps = state => ({
  title: state.homeTitle.title
})

export default connect(mapStateToProps, { getTitle, changeTitle})(Home)