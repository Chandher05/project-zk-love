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
import NotVerified from '../pages/verify/container/NotVerified';
import Verified from '../pages/verify/container/Verify';
import Verify from '../pages/verify/container/Verify';
import CreateProfile from '../pages/create-profile';

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
  // {
  //   path: '/verified',
  //   element: <Verified />,
  // },
  {
    path: '/create',
    element: <PickPassion />,
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
        <CreateProfile />
      </PrivateRoute>
    ),
  },
];

function PrivateRoute({ children }) {
  const auth = localStorage.getItem('loggedIn');
  return auth == 'true' ? <>{children}</> : <Navigate to='/login' />;
}
