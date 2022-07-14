import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderAnalysis from "./Pages/HeaderAnalysis";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderAnalysis />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
