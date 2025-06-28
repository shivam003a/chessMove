import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import PlayBots from "./pages/PlayBots";
import Analysis from "./pages/Analysis";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/play-bots" element={<PlayBots />} />
        <Route path="/analysis" element={<Analysis />} />
      </Routes>
    </>
  );
}

export default App;
