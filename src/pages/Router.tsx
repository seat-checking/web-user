import { PATH } from 'common/utils/constants';
import { ApprovedListDetail } from 'components/reservationStatus/listDetail/ApprovedDetail';
import { CancelledDetail } from 'components/reservationStatus/listDetail/CancelledDetail';
import { RejectedDetail } from 'components/reservationStatus/listDetail/RejectedDetail';
import { WaitingTabDetail } from 'components/reservationStatus/listDetail/WaitingTabDetail';
import { JoinSpacePage } from 'pages/JoinSpacePage';
import { LoginPage } from 'pages/LoginPage';
import { MemberInfoPage } from 'pages/MemberInfoPage';
import { MyPage } from 'pages/MyPage';
import { ProtectedRoute } from 'pages/ProtectedRoute';
import { ReservationIntentPage } from 'pages/ReservationIntentPage';

import { ReservationWaitingPage } from 'pages/ReservationStatusPage';
import { RootPage } from 'pages/RootPage';
import { SearchPage } from 'pages/SearchPage';
import { SeatUsePage } from 'pages/SeatUsePage';
import { SignUpPage } from 'pages/SignUpPage';
import { SpaceUsePage } from 'pages/SpaceUsePage/SpaceUsePage';
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
    path: `/${PATH.seatReservation}`,
    element: <SeatUsePage />,
  },
  {
    path: `/${PATH.spaceReservation}`,
    element: <SpaceUsePage />,
  },
  {
    path: `/${PATH.intent}`,
    element: <ReservationIntentPage />,
  },
  {
    path: `/${PATH.joinSpace}`,
    element: <JoinSpacePage />,
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
    path: `/${PATH.reservationStatus}`,
    element: <ProtectedRoute />,
    children: [
      { index: true, element: <ReservationWaitingPage /> },
      {
        path: `${PATH.waitingtab}/:reservationId`,
        element: <WaitingTabDetail />,
      },
      {
        path: `${PATH.approved}/:reservationId`,
        element: <ApprovedListDetail />,
      },
      {
        path: `${PATH.cancelled}/:reservationId`,
        element: <CancelledDetail />,
      },
      {
        path: `${PATH.rejected}/:reservationId`,
        element: <RejectedDetail />,
      },
    ],
  },
]);
