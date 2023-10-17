import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Healthcare from './pages/healthcare/Healthcare.jsx';
import MainPage from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<MyMain />} /> */}
        <Route path="/" element={<MainPage/>} />
        <Route path="/healthcare" element={<Healthcare />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
