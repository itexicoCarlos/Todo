import React from 'react'
// ! Routes
import PrivateRoutes from './private/PrivateRoutes.routes'
import PublicRoutes from './public/PublicRoutes.routes'
// Components Root
import App from '../../container/App/App'
// * Styles jss
import styles from './appRouterStyles'
import withStyles from 'react-jss'
// Styles antd
import { Layout } from 'antd'


const {
  Header, Footer, Sider, Content
} = Layout

function AppRouter({ classes }) {

  const login = true
  return (
    <App>
      <Layout className={classes.routerConteiner}>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content className={classes.contentContainer}>
            {login ? <PrivateRoutes /> : <PublicRoutes />}
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </App>
  )
}


const appRouterWithStyles = withStyles(styles)(AppRouter)
export default appRouterWithStyles