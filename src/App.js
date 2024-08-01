import "./App.css";
import Error from "./Error";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="movie/:id" element={<SingleMovie/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
