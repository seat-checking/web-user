import { useGoogleLogin } from '@react-oauth/google';
import {
  GoogleButton,
  GoogleButtonWrapper,
  GoogleIcon,
} from 'components/socialLogin/GoogleLoginButton/GoogleLoginButton.styled';
import type { VFC } from 'common/utils/types';

export const GoogleLoginButton: VFC = () => {
  const googleSocialLogin = useGoogleLogin({
    scope: 'email profile',
    onSuccess: ({ code }) => {
      console.log(code);
      // axios
      //  .post("http://localhost:4000/auth/google/callback", { code })
      // .then(({ data }) => {
      //  console.log(data);
      //   });
    },
    onError: (errorResponse) => {
      console.error(errorResponse);
    },
    flow: 'auth-code',
  });

  return (
    <GoogleButtonWrapper>
      <GoogleButton onClick={googleSocialLogin}>
        <GoogleIcon />
        구글 아이디로 로그인하기
      </GoogleButton>
    </GoogleButtonWrapper>
  );
};
// export default GoogleLoginButton;
