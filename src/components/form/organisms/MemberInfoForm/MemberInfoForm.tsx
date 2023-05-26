import { Button } from 'components/form/atoms/Button';
import { InputLabel } from 'components/form/atoms/InputLabel';
import { InputRadio } from 'components/form/atoms/InputRadio';
import Inputs from 'components/form/molecules/Inputs/Inputs';
import {
  Form,
  IdCheckButton,
} from 'components/form/organisms/SignUpForm/SignUpForm.styled';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import {
  ButtonWrapper,
  InfoText,
  InputRadioGroup,
  InputRadioLabel,
  InputRadiowrapper,
} from './MemberInfoForm.styled';
import type { VFC } from 'common/utils/types';
import type React from 'react';
import type { SubmitHandler } from 'react-hook-form';

interface MemberInfoFormprops {
  nickname: string;
  age: string;
  UniqueButtonClicked: string;
  gender: boolean;
  isfemaleChecked: boolean;
}

export const MemberInfoForm: VFC = () => {
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    setError,
    clearErrors,
    formState: { errors, touchedFields, isValid },
  } = useForm<MemberInfoFormprops>({ mode: 'onTouched' });

  const nicknameValue: string = watch('nickname', '');
  const ageValue: string = watch('age', '');

  const onSubmit: SubmitHandler<MemberInfoFormprops> = (data) => {
    console.log(data);
  };
  const handleNicknameResetClick = (): void => {
    resetField('nickname'); // 인풋값 초기화
  };
  const handleAgeeResetClick = (): void => {
    resetField('age'); // 인풋값 초기화
  };

  useEffect(() => {
    setError('UniqueButtonClicked', {
      message: '중복 확인 버튼을 눌러야합니다',
    });
  }, [setError]);

  const inputValue = watch('nickname');
  const isErrorsEmpty = Object.keys(errors).length === 0;

  const isFormValid = inputValue && isErrorsEmpty;

  console.log(isValid);
  console.log(errors);

  const nicknameError =
    errors.nickname?.message || errors.UniqueButtonClicked?.message;

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Inputs
          onClick={handleNicknameResetClick}
          typingrequired
          labelRequired
          placeholder='사용할 닉네임을 입력해주세요.'
          helperText='* 4~12자의 영문(대소문자 포함)이나 숫자.'
          {...register('nickname', {
            required: '닉네임은 필수로 입력해주세요',
            pattern: {
              value: /^[a-zA-Z0-9가-힣]{4,12}$/,
              message: '4~12자의 영문(대소문자 포함)이나 숫자.',
            },
          })}
          valueLength={nicknameValue.length}
          maximum={12}
          error={touchedFields.nickname && nicknameError}
          success={
            touchedFields.nickname && !nicknameError
              ? '사용 가능한 닉네임 입니다'
              : undefined
          }
          confirmButton={
            <IdCheckButton
              type='button'
              onClick={(): void => {
                // TODO: API 요청
                const isUnique = true; // API 응답

                if (isUnique) {
                  // 닉네임이 중복되지 않은경우
                  clearErrors('UniqueButtonClicked');
                } else {
                  // 닉네임이 중복된경우
                  setError('nickname', {
                    message: '이미 사용중인 닉네임입니다',
                  });
                }
              }}
            >
              중복 확인
            </IdCheckButton>
          }
        >
          닉네임
        </Inputs>
        <Inputs
          onClick={handleAgeeResetClick}
          typingrequired
          placeholder='숫자만 입력해 주세요.'
          helperText='* 숫자만 입력해 주세요.'
          {...register('age', {
            pattern: {
              value: /^(?:[1-9]|[1-9][0-9])$/,
              message: '숫자만 입력해 주세요',
            },
          })}
          valueLength={ageValue.length}
          maximum={12}
        >
          나이
        </Inputs>
        <InputRadiowrapper>
          <InputLabel>성별</InputLabel>
          <InputRadioGroup>
            <InputRadioLabel>
              <InputRadio
                checked
                value='female'
                {...register('gender', { required: '성별을 선택해주세요' })}
              />
              여성
            </InputRadioLabel>
            <InputRadioLabel>
              <InputRadio
                value='male'
                {...register('gender', { required: '성별을 선택해주세요' })}
              />
              남성
            </InputRadioLabel>
          </InputRadioGroup>
        </InputRadiowrapper>
        <InfoText>입력한 정보를 바탕으로 가게를 추천해 드려요.</InfoText>
        <ButtonWrapper>
          {isFormValid ? (
            <Button backgroundColor='#FF8D4E' color='#FFFFFF'>
              완료
            </Button>
          ) : (
            <Button>다음</Button>
          )}
        </ButtonWrapper>
      </Form>
    </div>
  );
};
