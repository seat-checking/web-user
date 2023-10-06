import { signUp, validateNickname } from 'api/user/user';
import { PATH } from 'common/utils/constants';
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
import { useFromStore } from 'store/formStore';
import {
  ButtonWrapper,
  InfoText,
  InputRadioGroup,
  InputRadiowrapper,
} from './MemberInfoForm.styled';
import type { SignUpParams } from 'api/user/common';

import type { VFC } from 'common/utils/types';
import type { SubmitHandler } from 'react-hook-form';

interface MemberInfoFormprops {
  nickname: string;
  birthDate: string;
  UniqueButtonClicked: string;
  sex: string;
  name: string;
}

export const MemberInfoForm: VFC = () => {
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    setError,
    clearErrors,
    formState: { errors, touchedFields },
  } = useForm<MemberInfoFormprops>({ mode: 'onTouched' });

  const nicknameValue: string = watch('nickname', '');

  const nameValue: string = watch('name', '');

  const ageValue: string = watch('birthDate', '');

  const sexValue: string = watch('sex', '');

  const formState = useFromStore((state) => state.formState);

  const navigate = useNavigate();

  const firstData = formState;

  useEffect(() => {
    if (!firstData) {
      navigate(`/${PATH.signUp}`);
    }
  }, [navigate, firstData]);

  const onSubmit: SubmitHandler<MemberInfoFormprops> = async (data) => {
    // formState 첫번째 페이지 데이터 가져오기

    if (firstData !== null) {
      const requestData: SignUpParams = {
        nickname: data.nickname,
        birthDate: data.birthDate,
        sex: data.sex,
        name: data.name,
        ...firstData,
      };

      try {
        await signUp(requestData);
        navigate(`/${PATH.login}`);
      } catch (e) {
        // 서버 응답이 400번대가 온 경우
        return null;
      }
    }
  };
  const handleNicknameResetClick = (): void => {
    resetField('nickname'); // 인풋값 초기화
  };
  const handleAgeResetClick = (): void => {
    resetField('birthDate'); // 인풋값 초기화
  };
  const handleNameResetClick = (): void => {
    resetField('name'); // 인풋값 초기화
  };
  useEffect(() => {
    setError('UniqueButtonClicked', {
      message: '중복 확인 버튼을 눌러야합니다',
    });

    return () => clearErrors('UniqueButtonClicked');
  }, [nicknameValue, setError, clearErrors]);

  const handleUniqueButtonClick = async () => {
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
  };

  const isErrorsEmpty = Object.keys(errors).length === 0;

  const isFormValid = nicknameValue && isErrorsEmpty && sexValue && nameValue;

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
          helperText='* 2~12자의 영문(대소문자 포함)이나 숫자.'
          {...register('nickname', {
            required: '닉네임은 필수로 입력해주세요',
            pattern: {
              value: /^[A-Za-z0-9ㄱ-ㅎ가-힣]{2,10}$/,
              message:
                '2~10자의 한글, 영문(대소문자 포함), 숫자만 입력가능합니다.',
            },
          })}
          valueLength={nicknameValue.length}
          maximum={10}
          maxLength={10}
          error={touchedFields.nickname && nicknameError}
          success={
            touchedFields.nickname && !nicknameError
              ? '사용 가능한 닉네임 입니다'
              : undefined
          }
          confirmButton={
            <IdCheckButton type='button' onClick={handleUniqueButtonClick}>
              중복 확인
            </IdCheckButton>
          }
        >
          닉네임
        </Inputs>
        <Inputs
          onClick={handleNameResetClick}
          labelRequired
          placeholder='이름을 입력해 주세요.'
          helperText='* 예약 기능을 위해 반드시 실명을 입력해 주세요!'
          error={touchedFields.name && errors.name?.message}
          {...register('name', {
            required: '이름은 필수로 입력해주세요.',
            pattern: {
              value: /^[a-zA-Z가-힣]*$/,
              message: '한글 또는 영어로만 작성해 주세요.',
            },
          })}
          valueLength={nameValue.length}
          maximum={50}
        >
          이름
        </Inputs>
        <Inputs
          onClick={handleAgeResetClick}
          placeholder='생년월일을 입력해 주세요.'
          helperText='* YYYY-MM-DD의 형식으로 입력해주세요. '
          error={touchedFields.birthDate && errors.birthDate?.message}
          {...register('birthDate', {
            pattern: {
              value:
                /^(?:(?:19|20)\d\d)-(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-9]|3[01])$/,
              message: '* YYYY-MM-DD의 형식으로 입력해주세요.',
            },
          })}
          valueLength={ageValue.toString().length}
          maximum={2}
          maxLength={10}
        >
          생년월일
        </Inputs>
        <InputRadiowrapper>
          <InputLabel>성별</InputLabel>
          <InputRadioGroup>
            <InputRadio
              id='1'
              value='여성'
              label='여성'
              checked={sexValue === '여성'}
              {...register('sex', { required: '성별을 선택해주세요' })}
            />
            <InputRadio
              id='2'
              value='남성'
              label='남성'
              checked={sexValue === '남성'}
              {...register('sex', { required: '성별을 선택해주세요' })}
            />
          </InputRadioGroup>
        </InputRadiowrapper>
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
