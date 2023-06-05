import { LoginForm } from 'components/form/organisms/LoginForm';
import { LoginPage } from 'pages/LoginPage';
import { MemberInfoPage } from 'pages/MemberInfoPage';
import { RootPage } from 'pages/RootPage';
import { SignUpPage } from 'pages/SignUpPage';
import { Route, Routes } from 'react-router-dom';
import type { VFC } from 'common/utils/types';

const App: VFC = () => {
  return (
    <div>
      <Routes>
        <Route path='/signup/first' element={<SignUpPage />} />
        <Route path='/signup/second' element={<MemberInfoPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
      <SignUpPage />
    </div>
  );
};

export default App;
