import { createRoot } from 'react-dom/client'
import {appRouter} from './router/index'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import './lang/lang.config'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}/>
)
