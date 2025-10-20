import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToDoListPage } from './pages/ToDoListPage'
import './assets/scss/style.scss'
import './assets/scss/normalize.scss'
//import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToDoListPage/>
  </StrictMode>
)
