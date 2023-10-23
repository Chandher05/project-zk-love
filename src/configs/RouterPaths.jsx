import { Navigate } from 'react-router-dom';
import ChatOverview from '../pages/chat/ChatOverview';
import { ChatThread } from '../pages/chat/ChatThread';
import Profile from '../pages/create-profile/Profile';

import ProfileSwipe from '../pages/discover/ProfileSwipe';
import Login from '../pages/login/container/Login';
import NotVerified from '../pages/verify/container/NotVerified';
import Verified from '../pages/verify/container/Verify';
import Verify from '../pages/verify/container/Verify';
import CreateProfile from '../pages/create-profile';
import ItsAMatch from '../pages/discover/ItsAMatch';

export const RouterPaths = [
  {
    path: '/',
    element: (
      <PrivateRoute>
        <Verify />
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
    element: (
      <PrivateRoute>
        <Verify />
      </PrivateRoute>
    ),
  },
  {
    path: '/swipe',
    element: (
      <PrivateRoute>
        <ProfileSwipe />
      </PrivateRoute>
    ),
  },

  {
    path: '/chat-view/:id',
    element: (
      <PrivateRoute>
        <ChatThread />
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
    path: '/chat',
    element: (
      <PrivateRoute>
        <ChatOverview />
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
  {
    path: '/match',
    element: (
      <PrivateRoute>
        <ItsAMatch />
      </PrivateRoute>
    ),
  },
];

function PrivateRoute({ children }) {
  const auth = localStorage.getItem('loggedIn');
  return auth == 'true' ? <>{children}</> : <Navigate to='/login' />;
}
