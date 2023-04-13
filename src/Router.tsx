import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import LandingPage from 'pages/Landing/Landing';
import ProfilePage from 'pages/Profile/Profile';
import Shop from 'pages/Shop/Shop';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route path="/" element={<Home />} />*/}
        {/*<Route path="/shop" element={<Shop />} />*/}
        {/*<Route path="/profile" element={<ProfilePage />} />*/}
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
