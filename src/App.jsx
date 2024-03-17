import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainMenu from "./pages/MainMenu/MainMenu"
import Question from "./pages/Question/Question"
import Results from "./pages/Results/Results"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/:level" element={<Question />} />
        <Route path="/risultati" element={<Results />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
