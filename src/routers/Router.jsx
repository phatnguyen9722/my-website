import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Cart from '../pages/Cart';
import Digimon from '../pages/Digimon/Digimon';
import Login from '../pages/Login';
import More from '../pages/More';
import Contact from '../pages/Contact';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="digimon" element={<Digimon />} />
      <Route path="login" element={<Login />} />
      <Route path="cart" element={<Cart />} />
      <Route path="more" element={<More />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
