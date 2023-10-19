import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/main/Main';
import Healthcare from './pages/healthcare/Healthcare';
import BoardList from './pages/board/BoardList'
import BoardWrite from './pages/board/BoardWrite'
import BoardDetail from './pages/board/BoardDetail'
import MemberJoin from './pages/member/MemberJoin'
import MemberLogin from './pages/member/MemberLogin';
import ProductList from './pages/products/ProductList'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/boardList" element={<BoardList />} />
        <Route path="/boardWrite" element={<BoardWrite />} />
        <Route path="/board/:no" element={<BoardDetail />} />
        <Route path="/join/member" element={<MemberJoin />} />
        <Route path="/login/member" element={<MemberLogin />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/productList?search/category=:ctg" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
