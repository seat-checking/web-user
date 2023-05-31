import { signUp, validateNickname } from 'api/user';
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

import { useNavigate } from 'react-router-dom';
import {
  ButtonWrapper,
  InfoText,
  InputRadioGroup,
  InputRadioLabel,
  InputRadiowrapper,
} from './MemberInfoForm.styled';
import type { SignUpParams } from 'api/user';
import type { VFC } from 'common/utils/types';
import type React from 'react';
import type { SubmitHandler } from 'react-hook-form';

interface MemberInfoFormprops {
  nickname: string;
  age: string;
  UniqueButtonClicked: string;
  sex: boolean;
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

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<MemberInfoFormprops> = async (data) => {
    // localStorage에서 첫번째 페이지 데이터 가져오기
    const firstData = localStorage.getItem('signup_first_data');

    if (firstData !== null) {
      const requestData: SignUpParams = {
        nickname: data.nickname,
        age: data.age,
        sex: data.sex,
        ...JSON.parse(firstData),
      };

      try {
        await signUp(requestData);
        alert('회원가입이 완료되었습니다!');
        navigate('/login');
      } catch (e) {
        // 서버 응답이 400번대가 온 경우
        alert('회원가입에 실패했습니다. 다시 시도해주세요');
      }
    }
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

  const isErrorsEmpty = Object.keys(errors).length === 0;

  const isFormValid = nicknameValue && isErrorsEmpty;

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
              value: /^[A-Za-z0-9ㄱ-ㅎ가-힣]{2,10}$/,
              message: '4~12자의 한글,영문(대소문자 포함)이나 숫자.',
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
              onClick={async () => {
                // TODO: API 요청
                const responseData = await validateNickname({
                  nickname: nicknameValue,
                });
                const isUnique = responseData.result.isValid;

                if (isUnique) {
                  // 닉네임이 중복되지 않은경우
                  clearErrors('UniqueButtonClicked');
                } else {
                  // 닉네임이 중복된경우
                  setError('UniqueButtonClicked', {
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
          error={touchedFields.age && errors.age?.message}
          {...register('age', {
            pattern: {
              value: /^(?:[1-9]|[1-9][0-9])$/,
              message: '3자리 미만의 숫자를 입력해주세요',
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
                value='여성'
                {...register('sex', { required: '성별을 선택해주세요' })}
              />
              여성
            </InputRadioLabel>
            <InputRadioLabel>
              <InputRadio
                value='남성'
                {...register('sex', { required: '성별을 선택해주세요' })}
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
