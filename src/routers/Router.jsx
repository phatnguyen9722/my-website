import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from '../pages/Home/HomePage';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import Pokemons from '../pages/Pokemons/Pokemons';
import Login from '../pages/Login';
import CheckOut from '../pages/CheckOut';
import SignUp from '../pages/SignUp';
import More from '../pages/More';
import Contact from '../pages/Contact';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<HomePage />} />
      <Route path="shop" element={<Shop />} />
      <Route path="pokemons" element={<Pokemons />} />
      <Route path="login" element={<Login />} />
      <Route path="checkout" element={<CheckOut />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="cart" element={<Cart />} />
      <Route path="More" element={<More />} />
      <Route path="Contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
