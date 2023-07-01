import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePageEN, HomePageES } from './pages/';
import { getAllProjects, getAllResume } from './redux/actions/actionsProjects';
import { useAppDispatch } from './redux/hooks/redux-hooks';
import "./App.css";

export const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllProjects());
    dispatch(getAllResume());
  }, [dispatch]); 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageEN />} />
        <Route path="/es" element={<HomePageES />} />
      </Routes>
    </BrowserRouter>
  );
};
