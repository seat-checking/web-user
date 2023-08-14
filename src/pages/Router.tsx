import { PATH } from 'common/utils/constants';
import { LoginPage } from 'pages/LoginPage';
import { MemberInfoPage } from 'pages/MemberInfoPage';
import { MyPage } from 'pages/MyPage';
import { ReservationIntentPage } from 'pages/ReservationIntentPage';
import { ReservationStatusDetailPage } from 'pages/ReservationStatusDetailPage';

import { ReservationStatusPage } from 'pages/ReservationStatusPage';

import { RootPage } from 'pages/RootPage';
import { SearchPage } from 'pages/SearchPage';
import { SeatUsePage } from 'pages/SeatUsePage';
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
    path: `/${PATH.seatuse}`,
    element: <SeatUsePage />,
  },
  {
    path: `/${PATH.intent}`,
    element: <ReservationIntentPage />,
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
    path: `/${PATH.reservationStatusDetail}`,
    element: <ReservationStatusDetailPage />,
  },
]);
