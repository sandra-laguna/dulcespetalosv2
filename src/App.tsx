import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from './ui/_components/common/Header/Header';
import { Footer } from './ui/_components/common/Footer/Footer';
import { FlowersList } from './ui/views/FlowersList/FlowersList';
import { FlowerDetail } from './ui/views/FlowerDetail/FlowerDetail';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<FlowersList />} />
          <Route path="/flower/:id" element={<FlowerDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
