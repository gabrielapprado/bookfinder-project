import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import BookDetails from "./pages/BookDetails"
function App() {
  

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/bookdetails" element={<BookDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
