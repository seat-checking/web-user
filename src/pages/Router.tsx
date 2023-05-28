import { PATH } from 'common/utils/constants';
import { LoginPage } from 'pages/LoginPage';
import { MyPage } from 'pages/MyPage';
import { RootPage } from 'pages/RootPage';
import { SignUpPage } from 'pages/SignUpPage';
import { StoreDetailPage } from 'pages/StoreDetailPage';
import { StoreListPage } from 'pages/StoreListPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        path: PATH.login,
        element: <LoginPage />,
      },
      {
        path: PATH.signup,
        element: <SignUpPage />,
      },
      {
        path: PATH.storeList,
        element: <StoreListPage />,
      },
      {
        path: PATH.storeDetail,
        element: <StoreDetailPage />,
      },
      {
        path: PATH.myPage,
        element: <MyPage />,
      },
    ],
  },
]);
