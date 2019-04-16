import React from 'react';
// Styles
import withStyles from 'react-jss'
import styles from './appStyles'


function App({ children, classes }) {
  return (
    <div className={classes.rootLayout}>
      {children}
    </div>
  );
}

const appWithStyles = withStyles(styles)(App)
export default appWithStyles
