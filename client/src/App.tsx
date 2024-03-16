import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'
import Home from './pages/Home'
import { ThemeProvider } from "@/components/theme-provider"
import Save from './pages/Save'
import FlashCard from './pages/FlashCard'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/save' element={<Save />} />
            <Route path='/flashcard' element={<FlashCard />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
