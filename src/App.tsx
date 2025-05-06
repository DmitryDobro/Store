import {Routes, Route} from 'react-router-dom';
import Header from './widgets/header/Header';
import MainPage from './pages/mainPage/MainPage';
import List from './pages/productsPage/ProductsPage';
import NoFoundPage from './pages/noFoundPage/NoFoundPage';

function App() {
  return (
    <div className="max-w-[1750px] m-auto p-3">
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/products/:param" element={<List />}></Route>
        <Route path="/*" element={<NoFoundPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
