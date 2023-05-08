import { createBrowserRouter } from 'react-router-dom';
import RafflesContainer from './components/RafflesContainer';
import Home from './pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/sorteios',
    element: <RafflesContainer />,
  },
  {
    path: '/ganhadores',
    element: <div>ganhadores</div>,
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
    element: <div>termos</div>,
  },
]);
