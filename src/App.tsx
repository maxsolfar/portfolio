import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {HomePageEN, HomePageES} from './pages/';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageEN />} />
        <Route path="/es" element={<HomePageES />} />
      </Routes>
      
    </BrowserRouter>
  );
};
