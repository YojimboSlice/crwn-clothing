import { Routes, Route } from 'react-router-dom';
import Navigation from './components/routes/navigation/navigation.component';
import Authentication from './components/routes/authentication/authentication.component';
import Shop from './components/routes/shop/shop.component';
import Home from './components/routes/home/home.component';
import Checkout from './components/routes/checkout/checkout.component';
import './categories.styles.scss';

const App = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Navigation />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path='shop'
          element={<Shop />}
        />
        <Route
          path='checkout'
          element={<Checkout />}
        />
        <Route
          path='auth'
          element={<Authentication />}
        />
      </Route>
    </Routes>
  );
};

export default App;
