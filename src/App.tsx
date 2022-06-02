import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from './views/_components/Header/Header';
import { Footer } from './views/_components/Footer/Footer';
import { FlowersList } from './views/FlowersList/FlowersList';
import { FlowerDetail } from './views/FlowerDetail/FlowerDetail';

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
