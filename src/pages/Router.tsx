import { PATH } from 'common/utils/constants';
import { LoginPage } from 'pages/LoginPage';
import { MemberInfoPage } from 'pages/MemberInfoPage';
import { MyPage } from 'pages/MyPage';
import { ProtectedRoute } from 'pages/ProtectedRoute';
import { ReservationDetailPage } from 'pages/ReservationDetailPage';
import { ReservationPage } from 'pages/ReservationPage';
import { RootPage } from 'pages/RootPage';
import { SearchPage } from 'pages/SearchPage';
import { SignUpPage } from 'pages/SignUpPage';
import { StoreDetailPage } from 'pages/StoreDetailPage';
import { StoreListPage } from 'pages/StoreListPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
  },
  {
    path: `/${PATH.login}`,
    element: <LoginPage />,
  },
  {
    path: `/${PATH.signUp}`,
    element: <SignUpPage />,
  },
  {
    path: `/${PATH.memberInfo}`,
    element: <MemberInfoPage />,
  },
  {
    path: `/${PATH.storeList}`,
    element: <ProtectedRoute />,
    children: [{ index: true, element: <StoreListPage /> }],
  },
  {
    path: `/${PATH.storeDetail}/:storeId`,
    element: <ProtectedRoute />,
    children: [{ index: true, element: <StoreDetailPage /> }],
  },
  {
    path: `/${PATH.myPage}`,
    element: <ProtectedRoute />,
    children: [{ index: true, element: <MyPage /> }],
  },
  {
    path: `/${PATH.search}`,
    element: <ProtectedRoute />,
    children: [{ index: true, element: <SearchPage /> }],
  },
  {
    path: `/${PATH.reservation}`,
    element: <ProtectedRoute />,
    children: [{ index: true, element: <ReservationPage /> }],
  },
  {
    path: `/${PATH.reservationDetail}`,
    element: <ProtectedRoute />,
    children: [{ index: true, element: <ReservationDetailPage /> }],
  },
]);
