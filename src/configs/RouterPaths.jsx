import { getImage } from '../../utils';
import App from '../pages/app/App';
import ChatOverview from '../pages/chat/ChatOverview';
import { ChatThread } from '../pages/chat/ChatThread';
import Profile from '../pages/create-profile/Profile';
import UploadPhoto from '../pages/create-profile/UploadPhoto';
import PickPassion from '../pages/create-profile/pickPassion';
import ProfileSwipe from '../pages/discover/ProfileSwipe';
import Home from '../pages/home/container/Home';
import Login from '../pages/login/container/Login';
import Verified from '../pages/verify/components/Verified';
import Verify from '../pages/verify/container/Verify';

export const RouterPaths = [
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/verified',
    element: <Verified />,
  },
  {
    path: '/verify',
    element: <Verify />,
  },
  {
    path: '/passions',
    element: <ProfileSwipe />,
  },
  {
    path: '/chat',
    element: <ChatOverview />,
  },
  {
    path: '/chat/:id',
    element: <ChatThread />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
];
