import { getImage } from '../../utils';
import App from '../pages/app/App';
import Home from '../pages/home/container/Home';
import Login from '../pages/login/container/Login';
import Verified from '../pages/verify/components/Verified';
import Verify from '../pages/verify/container/Verify';

export const RouterPaths = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/home',
    element: <Home></Home>,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/verify',
    element: <Verified />,
  },
];
