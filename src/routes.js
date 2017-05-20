import React from 'react'
import { Router, Route } from 'react-router'
import App from './components/App'
import NotFound from './components/NotFound'


const Routes = (props) => (
 <Router {...props} >
  <Route path="/" component={App}></Route>
  <Route path="list-books" component={App}>
    <Route path=":filter" component={App} />
  </Route>
  <Route path="add-book" component={App} />
  <Route path="*" component={NotFound}/>
 </Router>
)

export default Routes;