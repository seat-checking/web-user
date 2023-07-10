// import { PATH } from 'common/utils/constants';
// import { Outlet, useNavigate } from 'react-router-dom';

// // 사용자의 인증 상태를 체크하는 함수

// const isAuthenticated = async () => {
//   const token = localStorage.getItem('accessToken');

//   if (!token) {
//     return false;
//   }

//   const response = await
// };

// // 보호된 라우트를 위한 컴포넌트
// export const ProtectedRoute = () => {
//   const navigate = useNavigate();
//   const auth = isAuthenticated();

//   if (!auth) {
//     // 인증되지 않은 사용자는 로그인 페이지로 리다이렉트
//     navigate(`/${PATH.login}`);
//     return null;
//   }

//   // 인증된 사용자는 해당 페이지를 보게 됩니다.
//   return <Outlet />;
// };

// // export const router = createBrowserRouter([
// //   // ...생략...
// //   {
// //     path: `/${PATH.memberInfo}`,
// //     element: <ProtectedRoute />,
// //     children: [{ index: true, element: <MemberInfoPage /> }],
// //   },
// //   {
// //     path: `/${PATH.myPage}`,
// //     element: <ProtectedRoute />,
// //     children: [{ index: true, element: <MyPage /> }],
// //   },
// //   // ...생략...
// // ]);
import React from 'react';

const ProtectedRoute = () => {
  return <div>ProtectedRoute</div>;
};

export default ProtectedRoute;
