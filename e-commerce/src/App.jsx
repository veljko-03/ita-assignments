import { Routes, Route } from "react-router-dom"
import "./styles/App.css"
import Navbar from "./components/Navbar"
import HomePage from "./home"

const App = () => (
  <>
    <Navbar />

    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </>
)

export default App
