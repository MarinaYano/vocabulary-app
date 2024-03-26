import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'
import Home from './pages/Home/Home'
import { ThemeProvider } from "@/components/theme-provider"
import Save from './pages/Save'
import FlashCard from './pages/FlashCard/FlashCard'
import FlashCardChild from './pages/FlashCard/FlashCardChild'
import NotFound from './pages/NotFound'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='save' element={<Save />} />
            <Route path='flashcard' element={<FlashCard />} />
            <Route path='flashcard/test' element={<FlashCardChild />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
