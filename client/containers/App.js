import React from 'react';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(refreshLogin());
  }

  render() {
    let { auth, children } = this.props;
    return (
      <div>
        <Navbar auth={auth} />
        { children }
      </div>
    );
  }
}

// calling auth piece of our redux store 
const mapStateToProps = (state) => {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(App);

