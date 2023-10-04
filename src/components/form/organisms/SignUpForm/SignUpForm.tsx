import { validateEmail } from 'api/user/user';
import { PATH } from 'common/utils/constants';
import { Button } from 'components/form/atoms/Button';
import { InputCheckBox } from 'components/form/atoms/InputCheckBox';
import Inputs from 'components/form/molecules/Inputs/Inputs';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useFromStore } from 'store/formStore';
import {
  ButtonWrapper,
  Form,
  InputAllCheckBoxLabel,
  InputCheckBoxBorderWrapper,
  InputSubCheckBoxLabel,
  InputSubCheckBoxWrapper,
} from './SignUpForm.styled';
import type { VFC } from 'common/utils/types';
import type { ChangeEventHandler } from 'react';

import type React from 'react';
import type { SubmitHandler } from 'react-hook-form';

interface SignUpFormInputs {
  email: string;
  LoginIdUnique: string;
  password: string;
  confirmPassword: string;
  consentToTermsOfUser: boolean;
  consentToMarketing: boolean;
}

export const SignUpForm: VFC = () => {
  const setFormState = useFromStore((state) => state.setFormState);
  const [isCheckedAll, setIsCheckedAll] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    resetField,
    setError,
    setValue,
    clearErrors,
    formState: { errors, touchedFields },
  } = useForm<SignUpFormInputs>({ mode: 'onTouched' });
  const emailValue: string = watch('email', '');
  const passwordValue: string = watch('password', '');
  const confirmPasswordValue: string = watch('confirmPassword', '');

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignUpFormInputs> = (
    data: SignUpFormInputs,
  ) => {
    const { confirmPassword, ...submitData } = data;

    // 사용자가 입력한 데이터를 setFormState 저장
    setFormState(submitData);

    // 회원가입 두번째 페이지로 routing을 한다
    navigate(`/${PATH.memberInfo}`);
  };

  const handleEmailBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    emailRegister.onBlur(e);

    // API 요청
    const responseData = await validateEmail({ email: emailValue });
    const isUnique = responseData.result.isValid; // API 응답

    if (isUnique) {
      // 아이디가 중복되지 않은경우
      clearErrors('LoginIdUnique');
    } else {
      // 아이디가 중복된경우
      setError('LoginIdUnique', {
        message: '이미 사용중인 이메일입니다',
      });
    }
  };

  const handleResetClick = (): void => {
    resetField('email'); // 인풋값 초기화
  };

  const handleResetPasswordClick = (): void => {
    resetField('password'); // 인풋값 초기화
  };

  const handleResetConfirmPasswordClick = (): void => {
    resetField('confirmPassword'); // 인풋값 초기화
  };

  const emailError = errors.email?.message || errors.LoginIdUnique?.message;

  const emailRegister = register('email', {
    required: '이메일은 필수로 입력해주세요',
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: '이메일 포맷에 맞게 입력해야 합니다',
    },
  });

  const handleAllCheckBoxChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const isChecked = e.target.checked;
    setIsCheckedAll(isChecked);
    setValue('consentToTermsOfUser', isChecked);
    setValue('consentToMarketing', isChecked);
  };

  const consentToTermsOfUser = watch('consentToTermsOfUser');
  const consentToMarketing = watch('consentToMarketing');

  useEffect(() => {
    if (!consentToTermsOfUser || !consentToMarketing) {
      setIsCheckedAll(false);
    }
    if (consentToTermsOfUser && consentToMarketing) {
      setIsCheckedAll(true);
    }
  }, [consentToTermsOfUser, consentToMarketing]);

  const isErrorsEmpty = Object.keys(errors).length === 0;

  const isFormValid =
    touchedFields.email &&
    touchedFields.password &&
    touchedFields.confirmPassword &&
    isErrorsEmpty &&
    watch('consentToTermsOfUser');
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Inputs
          onClick={handleResetClick}
          typingrequired
          labelRequired
          placeholder='이메일 형식을 입력해 주세요.'
          helperText='* @를 포함한 이메일 형식으로 입력해 주세요.'
          {...emailRegister}
          valueLength={emailValue.length}
          maximum={50}
          error={touchedFields.email && emailError}
          success={
            touchedFields.email && !emailError
              ? '사용 가능한 아이디 입니다'
              : undefined
          }
          onBlur={handleEmailBlur}
        >
          이메일
        </Inputs>
        <Inputs
          onClick={handleResetPasswordClick}
          typingrequired
          labelRequired
          type='password'
          placeholder='사용하실 비밀번호를 입력해 주세요.'
          helperText='* 영문, 숫자, 특수기호를 포함한 8자이상'
          {...register('password', {
            required: '비밀번호는 필수로 입력해 주세요.',
            pattern: {
              value:
                /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?`~]).{8,}$/,
              message: '* 영문, 숫자, 특수기호를 포함한 8자이상.',
            },
          })}
          valueLength={passwordValue.length}
          maximum={50}
          error={touchedFields.password && errors.password?.message}
          success={
            touchedFields.password && !errors.password
              ? '사용가능한 비밀번호입니다.'
              : undefined
          }
        >
          비밀번호
        </Inputs>
        <Inputs
          onClick={handleResetConfirmPasswordClick}
          typingrequired
          labelRequired
          type='password'
          placeholder='비밀번호를 한 번 더 입력해 주세요.'
          helperText='* 영문, 숫자, 특수기호를 포함한 8자이상'
          {...register('confirmPassword', {
            required: '비밀번호 확인은 필수로 입력해 주세요',
            validate: (value) =>
              value === passwordValue || '비밀번호가 일치하지 않습니다.',
          })}
          valueLength={confirmPasswordValue.length}
          maximum={50}
          error={
            touchedFields.confirmPassword && errors.confirmPassword?.message
          }
          success={
            touchedFields.confirmPassword &&
            !errors.confirmPassword &&
            passwordValue === confirmPasswordValue
              ? '비밀번호가 일치합니다.'
              : undefined
          }
        >
          비밀번호 확인
        </Inputs>
        <InputCheckBoxBorderWrapper>
          <InputCheckBox
            checked={isCheckedAll}
            onChange={handleAllCheckBoxChange}
          />
          <InputAllCheckBoxLabel>
            SeatSence 가입 약관 전체동의
          </InputAllCheckBoxLabel>
        </InputCheckBoxBorderWrapper>
        <InputSubCheckBoxWrapper>
          <InputCheckBox
            {...register('consentToTermsOfUser', {
              required: '체크박스는 기본 입력사항입니다.',
            })}
          />
          <InputSubCheckBoxLabel>
            (필수) <u>서비스 이용약관</u> 및 <u>개인정보 취급 방침</u> 동의
          </InputSubCheckBoxLabel>
        </InputSubCheckBoxWrapper>
        <InputSubCheckBoxWrapper>
          <InputCheckBox {...register('consentToMarketing')} />
          <InputSubCheckBoxLabel>
            (선택) <u>마케팅 정보 수신</u> 동의
          </InputSubCheckBoxLabel>
        </InputSubCheckBoxWrapper>
        <ButtonWrapper>
          {isFormValid ? (
            <Button backgroundColor='#FF8D4E' color=' #FFFFFF'>
              다음
            </Button>
          ) : (
            <Button disabled>다음</Button>
          )}
        </ButtonWrapper>
      </Form>
    </div>
  );
};
