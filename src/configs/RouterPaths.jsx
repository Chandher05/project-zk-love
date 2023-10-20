import { Navigate } from 'react-router-dom';
import { getImage } from '../../utils';
import ChatOverview from '../pages/chat/ChatOverview';
import { ChatThread } from '../pages/chat/ChatThread';
import Profile from '../pages/create-profile/Profile';

import UploadPhoto from '../pages/create-profile/UploadPhoto';
import PickPassion from '../pages/create-profile/pickPassion';
import ProfileSwipe from '../pages/discover/ProfileSwipe';
import Home from '../pages/home/container/Home';
import Login from '../pages/login/container/Login';
import Verified from '../pages/verify/container/Verify';
import Verify from '../pages/verify/container/Verify';

export const RouterPaths = [
  {
    path: '/',
    element: (
      <PrivateRoute>
        <Login />
      </PrivateRoute>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/verified',
    element: (
      <PrivateRoute>
        <Verified />
      </PrivateRoute>
    ),
  },
  {
    path: '/verify',
    element: <Verify />,
    element: (
      <PrivateRoute>
        <Verify />
      </PrivateRoute>
    ),
  },
  {
    path: '/passions',
    element: <ProfileSwipe />,
    element: (
      <PrivateRoute>
        <ProfileSwipe />
      </PrivateRoute>
    ),
  },
  {
    path: '/chat',
    element: (
      <PrivateRoute>
        <ChatOverview />
      </PrivateRoute>
    ),
  },
  {
    path: '/chat/:id',
    element: (
      <PrivateRoute>
        <ChatThread />
      </PrivateRoute>
    ),
  },
  {
    path: '/profile',
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
  {
    path: '/create',
    element: (
      <PrivateRoute>
        <PickPassion />
      </PrivateRoute>
    ),
  },
];

function PrivateRoute({ children }) {
  const auth = true;
  return auth ? <>{children}</> : <Navigate to='/login' />;
}
