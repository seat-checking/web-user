// import { Outlet, useNavigate } from 'react-router-dom';

// // 사용자의 인증 상태를 체크하는 함수
// async function isAuthenticated() {
//   // 실제로는 서버에 요청하여 토큰의 유효성을 체크해야 합니다.
//   // 이 예제에서는 임의로 true를 반환하도록 하겠습니다.
//   return true;
// }

// // 보호된 라우트를 위한 컴포넌트
// const ProtectedRoute = () => {
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

// export const router = createBrowserRouter([
//   // ...생략...
//   {
//     path: `/${PATH.memberInfo}`,
//     element: <ProtectedRoute />,
//     children: [{ index: true, element: <MemberInfoPage /> }],
//   },
//   {
//     path: `/${PATH.myPage}`,
//     element: <ProtectedRoute />,
//     children: [{ index: true, element: <MyPage /> }],
//   },
//   // ...생략...
// ]);

const ProtectedRoute = () => {
  return <div>ProtectedRoute</div>;
};

export default ProtectedRoute;
