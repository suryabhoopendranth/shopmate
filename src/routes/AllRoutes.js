import { Routes, Route } from 'react-router-dom';
import { Home, Cart } from '../Pages';

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </>
  );
};
