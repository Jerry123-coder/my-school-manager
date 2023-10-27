import {BrowserRouter as RouterProvider} from 'react-router-dom'
import { Router } from './routes/Router'
import ScrollToTop from './components/ScrollToTop'
function App() {


  return (
    <RouterProvider>
      <ScrollToTop />
      <Router />
    </RouterProvider>
  )
}

export default App
