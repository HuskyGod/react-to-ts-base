import React from 'react'
import CONFIG from '@/config/index'
import {Switch, Route, Redirect, withRouter, RouteComponentProps} from 'react-router-dom'
import {IRouteProps} from '@/router/type'

type Props = IRouteProps & RouteComponentProps;

const PrivateRoute: React.FC<Props> = ({
  component: Component,
  childrenRoutes,
  location,
  ...rest
}) => {
  const {meta} = rest;

  if (meta) {
    if (meta.title) {
      document.title = `${meta.title} - ${CONFIG.title}`
    } else {
      document.title = CONFIG.title
    }
  }

  return (
    <Route render={(props) => {
      return (
        <Component {...props} {...rest} >
          {
            Array.isArray(childrenRoutes)
              ? (
                <Switch>
                  {
                    childrenRoutes.map((route, idx: number) => {
                      return <PrivateRoute {...route} key={idx} />
                    })
                  }
                </Switch>
              ) : null
          }
        </Component>
      )
    }} />
  )
}

export default withRouter(PrivateRoute)
