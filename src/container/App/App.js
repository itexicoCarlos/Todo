import React from 'react';
import './App.css';
// Styles
import withStyles from 'react-jss'
import styles from './appStyles'


function App({ children, classes }) {
  return (
    <div className={classes.layoutGrid}>
      {children}
    </div>
  );
}

const appWithStyles = withStyles(styles)(App)
export default appWithStyles
