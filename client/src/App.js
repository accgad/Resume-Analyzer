import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Layout/Navbar"
import Footer from "./components/Layout/Footer"
import Home from "./pages/Home"
import Upload from "./pages/Upload"
import Results from "./pages/Results"
import About from "./pages/About"
import Login from "./pages/Login"
import Register from "./pages/Register"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/results" element={<Results />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
