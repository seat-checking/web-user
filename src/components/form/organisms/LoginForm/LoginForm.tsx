import { login } from 'api/user/user';
import { Button } from 'components/form/atoms/Button';
import { Inputs } from 'components/form/molecules/Inputs';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';
import {
  ButtonWrapper,
  ErrorIcon,
  ErrorMessage,
  ErrorMessageWrapper,
  Form,
  LoginFormWrapper,
} from './LoginForm.styled';
import type { VFC } from 'common/utils/types';
import type { SubmitHandler } from 'react-hook-form';

interface LoginFormProps {
  email: string;
  password: string;
}

export const LoginForm: VFC = () => {
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors, isValid },
  } = useForm<LoginFormProps>({ mode: 'onSubmit' });

  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginFormProps> = async (data) => {
    try {
      if (errors.email || errors.password) {
        setErrorMsg('아이디 또는 비밀번호를 다시 입력해주세요.');
      } else {
        const requestData = await login(data);
        if (requestData.isSuccess) {
          alert('Welcome to SeatSense');
          navigate('./storeList');
        }
      }
    } catch (error) {
      setErrorMsg('아이디 또는 비밀번호를 다시 입력해주세요.');
    }
  };

  useEffect(() => {
    if (errors.email || errors.password) {
      setErrorMsg('아이디 또는 비밀번호를 다시 입력해주세요.');
    } else {
      setErrorMsg('');
    }
  }, [errors]);

  const emailValue: string = watch('email', '');
  const passwordValue: string = watch('password', '');
  const inputValue = watch('email') && watch('password');

  const handleEmailResetClick = () => {
    resetField('email'); // 인풋값 초기화
  };
  const handlePasswordResetClick = () => {
    resetField('password'); // 인풋값 초기화
  };

  const isFormValid = inputValue;

  const getErrorMessage = () => {
    if (errors.email) return errors.email.message;
    if (errors.password) return errors.password.message;
    return errorMsg;
  };

  return (
    <LoginFormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Inputs
          onClick={handleEmailResetClick}
          labelRequired
          typingrequired
          placeholder='이메일 형식을 입력해주세요.'
          {...register('email', {
            required: '이메일은 필수로 입력해주세요.',
            pattern: {
              value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
              message: '아이디 또는 비밀번호를 다시 입력해주세요.',
            },
          })}
          valueLength={emailValue.length}
          maximum={50}
        >
          이메일
        </Inputs>
        <Inputs
          onClick={handlePasswordResetClick}
          labelRequired
          typingrequired
          placeholder='비밀번호를 입력해주세요.'
          type='password'
          {...register('password', {
            required: '비밀번호는 필수로 입력해주세요.',
            pattern: {
              value:
                /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?`~]).{8,}$/,
              message: '아이디 또는 비밀번호를 다시 입력해주세요.',
            },
          })}
          valueLength={passwordValue.length}
          maximum={50}
        >
          비밀번호
        </Inputs>
        <ErrorMessageWrapper>
          {(errors.email || errors.password || errorMsg) && (
            <>
              <ErrorIcon />
              <ErrorMessage>{getErrorMessage()}</ErrorMessage>
            </>
          )}
        </ErrorMessageWrapper>
        <ButtonWrapper>
          {isFormValid ? (
            <Button backgroundColor='#FF8D4E' color='#FFFFFF'>
              로그인
            </Button>
          ) : (
            <Button disabled>로그인</Button>
          )}
        </ButtonWrapper>
      </Form>
    </LoginFormWrapper>
  );
};
