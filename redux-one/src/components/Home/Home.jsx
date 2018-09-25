import React from 'react';

// 6) CONNECT THE COMPONENT.
// to validate the type of the prop that we will pass to this componet.
import { bool } from 'prop-types';

// connect our component to Redux or store.
import { connect } from 'react-redux';

const Home = props => {
  const { isMobile } = props;

  return (
    <div>
      <h1>Home componet</h1>
      <strong>{isMobile ? 'You are using mobile': 'You are using desktop'}</strong>
    </div>
  );
};

// Validating the prop type passing.
Home.propTypes = {
  isMobile: bool
};

function mapStateToProps(state) {
  return {
    isMobile: state.device.isMobile
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
