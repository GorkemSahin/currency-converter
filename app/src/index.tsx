import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'
import 'antd/dist/antd.css'
import { css, Global } from '@emotion/react'

ReactDOM.render(
  <>
    <Global
      styles={css`
        body {
          background-color: aliceblue;
        }
      `}
    />
    <App />
  </>,

  document.getElementById('root')
)
