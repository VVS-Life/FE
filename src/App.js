import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main';
import Healthcare from './pages/healthcare/Healthcare';
import BoardList from './pages/board/BoardList'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/boardList" element={<BoardList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
