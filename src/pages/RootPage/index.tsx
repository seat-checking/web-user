import { PATH } from 'common/utils/constants';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import type { VFC } from 'common/utils/types';

/**
 * 루트 페이지 컴포넌트 입니다.
 */
export const RootPage: VFC = () => {
  return (
    <Container>
      루트 페이지
      <br />
      <Navigation>
        <li>
          <Link to={`/${PATH.login}`}>로그인</Link>
        </li>
        <li>
          <Link to={`/${PATH.signup}`}>회원가입</Link>
        </li>
        <li>
          <Link to={`/${PATH.myPage}`}>마이페이지</Link>
        </li>
        <li>
          <Link to={`/${PATH.storeList}`}>가게목록</Link>
        </li>
        <li>
          <Link to={`/${PATH.storeDetail}`}>가게상세페이지</Link>
        </li>
      </Navigation>
      <Outlet />
    </Container>
  );
};

// 임시 스타일 입니다
const Container = styled.div`
  background-color: yellow;
  font-size: 23px;

  a + a {
    margin: 5px;
  }
`;

const Navigation = styled.ul`
  background-color: skyblue;
`;
