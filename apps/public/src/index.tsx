// @refresh reload

import { render } from 'solid-js/web'
import './index.css'
// import 'uno.css'
import 'virtual:uno.css'
import App from './views/app/app'

const root: any = document.getElementById('root')

render( () => <App />, ( root )!)
