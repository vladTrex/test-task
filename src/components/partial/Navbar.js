import React from 'react';

const styles = {
  navBarContainer: {
    backgroundColor: '#f7fbfc',
    height: '45px',
    width: '100%',
    borderBottom: '1px solid #ccc',
    paddingTop: '25px',
  },
  navbarText: {
    margin: '0',
    padding: '0',
    textAlign: 'center',
    color: '#002fb2'
  },
};

const Navbar = () => (<div style={styles.navBarContainer}>
  <p style={styles.navbarText}>VIDEO FEED</p>
</div>);

export default Navbar;