import { PATH } from 'common/utils/constants';
import { ApprovedListDetail } from 'components/reservationStatus/listDetail/ApprovedListDetail';
import { CancelledDetail } from 'components/reservationStatus/listDetail/CancelledDetail';
import { RejectedDetail } from 'components/reservationStatus/listDetail/RejectedDetail';
import { LoginPage } from 'pages/LoginPage';
import { MemberInfoPage } from 'pages/MemberInfoPage';
import { MyPage } from 'pages/MyPage';
import { ReservationPage } from 'pages/ReservationPage';
import { ReservationStatusPage } from 'pages/ReservationStatusPage';
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
    element: <StoreListPage />,
  },
  {
    path: `/${PATH.storeDetail}/:storeId`,
    element: <StoreDetailPage />,
  },
  {
    path: `/${PATH.reservation}`,
    element: <ReservationPage />,
  },
  {
    path: `/${PATH.myPage}`,
    element: <MyPage />,
  },
  {
    path: `/${PATH.search}`,
    element: <SearchPage />,
  },
  {
    path: `/${PATH.reservationStatus}`,
    element: <ReservationStatusPage />,
  },
  {
    path: `/${PATH.reservationStatus}/approvedListDetail`,
    element: <ApprovedListDetail />,
  },
  {
    path: `/${PATH.reservationStatus}/cancelledDetail`,
    element: <CancelledDetail />,
  },
  {
    path: `/${PATH.reservationStatus}/rejectedDetail`,
    element: <RejectedDetail />,
  },
]);
