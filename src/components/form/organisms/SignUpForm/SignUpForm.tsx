import { Button } from 'components/form/atoms/Button';
import { InputCheckBox } from 'components/form/atoms/InputCheckBox';

import Inputs from 'components/form/molecules/Inputs/Inputs';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  ButtonWrapper,
  InputAllCheckBoxLabel,
  InputCheckBoxBorderWrapper,
  InputSubCheckBoxLabel,
  InputSubCheckBoxWrapper,
  Form,
} from './SignUpForm.styled';
import type { VFC } from 'common/utils/types';

import type React from 'react';

interface SignUpFormInputs {
  loginId: string;
  isLoginIdUnique: string;
  password: string;
  confirmPassword: string;
  isPrivateChecked: boolean;
  isMarketingChecked: boolean;
}

export const SignUpForm: VFC = () => {
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
  const loginIdValue: string = watch('loginId', '');
  const passwordValue: string = watch('password', '');
  const confirmPasswordValue: string = watch('confirmPassword', '');

  const [isCheckedAll, setIsCheckedAll] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  console.log(errors);

  const handleResetClick = () => {
    resetField('loginId'); // 인풋값 초기화
  };

  const handleResetPasswordClick = () => {
    resetField('password'); // 인풋값 초기화
  };

  const handleResetConfirmPasswordClick = () => {
    resetField('confirmPassword'); // 인풋값 초기화
  };

  const loginIdError =
    errors.loginId?.message || errors.isLoginIdUnique?.message;

  const loginIdRegister = register('loginId', {
    required: '아이디는 필수로 입력해주세요',
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: '이메일 포맷에 맞게 입력해야 합니다',
    },
  });

  const handleAllCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setIsCheckedAll(isChecked);
    setValue('isPrivateChecked', isChecked);
    setValue('isMarketingChecked', isChecked);
  };

  const inputValue =
    watch('loginId') && watch('password') && watch('confirmPassword');
  const isPrivateChecked = watch('isPrivateChecked');
  const isMarketingChecked = watch('isMarketingChecked');

  useEffect(() => {
    if (!isPrivateChecked || !isMarketingChecked) {
      setIsCheckedAll(false);
    }
  }, [isPrivateChecked, isMarketingChecked]);

  const isFormValid = inputValue && watch('isPrivateChecked');
  console.log(watch('isPrivateChecked'));

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Inputs
          onClick={handleResetClick}
          typingrequired
          labelRequired
          placeholder='이메일 형식을 입력해 주세요.'
          helperText='* @와 .com을 모두 포함해서 입력해 주세요.'
          {...loginIdRegister}
          valueLength={loginIdValue.length}
          maximum={50}
          error={touchedFields.loginId && loginIdError}
          success={
            touchedFields.loginId && !loginIdError
              ? '사용 가능한 아이디 입니다'
              : undefined
          }
          onBlur={(e: any) => {
            // react hook form onBlur call
            loginIdRegister.onBlur(e);

            // TODO: API 요청
            const isUnique = true; // API 응답

            if (isUnique) {
              // 아이디가 중복되지 않은경우
              clearErrors('isLoginIdUnique');
            } else {
              // 아이디가 중복된경우
              setError('isLoginIdUnique', {
                message: '이미 사용중인 이메일입니다',
              });
            }
          }}
        >
          이메일
        </Inputs>
        <Inputs
          onClick={handleResetPasswordClick}
          typingrequired
          labelRequired
          type='password'
          placeholder='사용하실 비밀번호를 입력해 주세요.'
          helperText='* 4~12자의 영문(대소문자 포함), 숫자, 특수기호.'
          {...register('password', {
            required: '비밀번호는 필수로 입력해주세요',
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*[\d\W]).{4,12}$/,
              message: '* 4~12자의 영문(대소문자 포함), 숫자, 특수기호.',
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
          placeholder='영문,한글N자 이하로 입력해주세요.'
          helperText='* 4~12자의 영문(대소문자 포함), 숫자, 특수기호.'
          {...register('confirmPassword', {
            required: '비밀번호 확인은 필수로 입력해주세요',
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*[\d\W]).{4,12}$/,
              message: '* 4~12자의 영문(대소문자 포함), 숫자, 특수기호.',
            },
            validate: (value, formValue) =>
              value === formValue.password || '비밀번호가 일치하지 않습니다',
          })}
          valueLength={confirmPasswordValue.length}
          maximum={50}
          error={
            touchedFields.confirmPassword && errors.confirmPassword?.message
          }
          success={
            touchedFields.confirmPassword && !errors.confirmPassword
              ? '비빌번호가 일치합니다'
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
            {...register('isPrivateChecked', {
              required: '체크박스는 기본 입력사항입니다.',
            })}
          />
          <InputSubCheckBoxLabel>
            (필수) <u>서비스 이용약관</u> 및 <u>개인정보 취급 방침</u> 동의
          </InputSubCheckBoxLabel>
        </InputSubCheckBoxWrapper>
        <InputSubCheckBoxWrapper>
          <InputCheckBox {...register('isMarketingChecked')} />
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
            <Button>다음</Button>
          )}
        </ButtonWrapper>
      </Form>
    </div>
  );
};
