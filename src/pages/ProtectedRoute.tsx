import { PATH } from 'common/utils/constants';
import { useEffect } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';

// 사용자의 인증 상태를 체크하는 함수

const isAuthenticated = () => {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    return false;
  }
  return true;
};

// 보호된 라우트를 위한 컴포넌트
export const ProtectedRoute = () => {
  const navigate = useNavigate();
  const auth = isAuthenticated();

  useEffect(() => {
    if (!auth) {
      navigate('/');
    }
  }, [auth, navigate]);

  // 인증된 사용자는 해당 페이지를 보게 됩니다.
  return auth ? <Outlet /> : null;
};
