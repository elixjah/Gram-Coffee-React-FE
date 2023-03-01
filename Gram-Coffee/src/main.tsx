import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { StateProvider } from "./context/StateProvider";
import { initialState } from "./context/initalState";
import reducer from "./context/reducer";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StateProvider>
      <React.StrictMode>
      <App />
  </React.StrictMode>,
  </StateProvider>

)
