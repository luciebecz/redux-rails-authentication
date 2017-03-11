import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth'

class Navbar extends React.Component {
  logout = (e) => {
    e.preventDefault();
    // figure out how to dispatch the logout action
    this.props.dispatch(handleLogout());
  }
  authLinks = () => {
    // return links depending on if user is logged in or not, dispatch correct actions
    if(this.props.auth && this.props.auth.isAuthenticated) {
      return(
        <li><a href='#' onClick={this.logout}>Logout</a></li>
      )
    } else {
      return(
        <li><Link to='/login'>Login</Link></li>
      );
    }  
  }

  render() {
    return(
      <header> 
        <div className='navbar-fixed'>
          <nav>
            <div className='nav-wrapper'>
              <Link to='/' className='brand-logo'>Repack: Redux Rails Auth</Link>
              <ul className='right'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                { this.authLinks() }
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default connect()(Navbar);