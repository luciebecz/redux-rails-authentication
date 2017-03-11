import React from 'react';
import { Link } from 'react-router';
import { handleSignUp } from '../actions/auth';
import { connect } from 'react-redux';

class Signup extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    this.props.dispatch(handleSignUp(email, password));
  }

  render() {
    return(
      <div>
      <h3>Sign Up</h3>
        <form onSubmit={ this.handleSubmit }>
          <input ref='email' type='text' required placeholder='email' />
          <input ref='password' type='password' required placeholder='password' />
          <input type='submit' className='btn' value='Sign Up'/>
          <Link to='./login' className='btn grey'>Cancel</Link>
        </form>
      </div>
    );
  }
}

export default connect()(Signup);
