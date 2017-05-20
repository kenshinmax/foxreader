import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'
import Routes from './routes'

import './styles/ui.scss'

window.React=React

render(
  <Routes history={hashHistory} />,
  document.getElementById('react-container')
)