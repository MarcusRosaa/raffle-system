import { createBrowserRouter } from 'react-router-dom';
import RafflesContainer from './components/RafflesContainer';
import Home from './pages/Home';
import Winners from './pages/Winners';

import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Dashboard/Sidebar';
import Purchasers from './components/Dashboard/Purchasers';
import RafflesList from './components/Dashboard/RafflesList';
import Terms from './pages/Terms';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: '/sorteios',
    element: (
      <>
        <Header />
        <RafflesContainer />
        <Footer />
      </>
    ),
  },
  {
    path: '/ganhadores',
    element: (
      <>
        <Header />
        <Winners />
        <Footer />
      </>
    ),
  },
  {
    path: '/pedidos',
    element: <div>meus pedidos</div>,
  },
  {
    path: '/sobre',
    element: <div>sobre</div>,
  },
  {
    path: '/termos',
    element: (
      <>
        <Header />
        <Terms />
        <Footer />
      </>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <>
        <Sidebar />
        <Dashboard onAddRaffle />
      </>
    ),
  },
  {
    path: '/dashboard/rifas',
    element: (
      <>
        <Sidebar />
        <RafflesList />
      </>
    ),
  },
  {
    path: '/dashboard/compradores',
    element: (
      <>
        <Sidebar />
        <Purchasers />
      </>
    ),
  },
]);
