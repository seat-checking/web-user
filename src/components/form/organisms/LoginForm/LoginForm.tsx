import { Button } from 'components/form/atoms/Button';
import { Inputs } from 'components/form/molecules/Inputs';
import React from 'react';
import { useForm } from 'react-hook-form';

import { ButtonWrapper, Form, LoginFormWrapper } from './LoginForm.styled';
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
  } = useForm<LoginFormProps>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<LoginFormProps> = (data) => {
    console.log(data);
  };

  const emailValue: string = watch('email', '');
  const passwordValue: string = watch('password', '');

  const handleEmailResetClick = () => {
    resetField('email'); // 인풋값 초기화
  };
  const handlePasswordResetClick = () => {
    resetField('password'); // 인풋값 초기화
  };

  const isErrorsEmpty = Object.keys(errors).length === 0;

  const inputValue = watch('email') && watch('password');

  const isFormValid = inputValue;

  console.log(isValid);
  console.log(errors);

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
              message: '이메일 형식을 입력해주세요.',
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
              message: '',
            },
          })}
          valueLength={passwordValue.length}
          maximum={50}
        >
          비밀번호
        </Inputs>
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
