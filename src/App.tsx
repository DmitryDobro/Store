import {Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import MainPage from './pages/mainPage/MainPage';
import List from './pages/productsPage/List';

function App() {
  return (
    <div className="max-w-[1750px] m-auto p-3">
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/products/:param" element={<List />}></Route>
      </Routes>
    </div>
  );
}

export default App;
