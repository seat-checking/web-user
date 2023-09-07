import { Button } from 'components/form/atoms/Button';
import { InputLabel } from 'components/form/atoms/InputLabel';
import { InputRadio } from 'components/form/atoms/InputRadio';
import { Inputs } from 'components/form/molecules/Inputs';
import {
  InputRadioGroup,
  IntentWrapper,
} from 'components/store/reservation/Intent/Intent.styled';
import { ButtonWrapper } from 'pages/RootPage/RootPage.styled';
import { useState } from 'react';
import { useTheme } from 'styled-components';

export const Intent = () => {
  const [checkedStatus, setCheckedStatus] = useState<Record<string, boolean>>(
    {},
  );
  const theme = useTheme();

  const handleRadioClick = (name: string) => {
    setCheckedStatus({
      ...checkedStatus,
      [name]: !checkedStatus[name],
    });
  };
  return (
    <IntentWrapper>
      <Inputs
        labelRequired
        placeholder='사용 목적을 입력해주세요'
        valueLength={0}
      >
        사용목적
      </Inputs>
      <InputRadioGroup>
        <InputLabel labelRequired>대여장비</InputLabel>
        <InputRadio
          id='1'
          value='모니터'
          label='모니터'
          name='모니터'
          size='small'
          checked={checkedStatus['모니터']}
          onClick={() => handleRadioClick('모니터')}
        />
        <InputRadio
          id='2'
          value='마우스'
          label='마우스'
          name='마우스'
          size='small'
          checked={checkedStatus['마우스']}
          onClick={() => handleRadioClick('마우스')}
        />
        <InputRadio
          id='3'
          value='노트북'
          label='노트북'
          name='노트북'
          size='small'
          checked={checkedStatus['노트북']}
          onClick={() => handleRadioClick('노트북')}
        />
      </InputRadioGroup>
      <ButtonWrapper>
        <Button backgroundColor={theme.palette.primary.orange} color='white'>
          사용신청
        </Button>
      </ButtonWrapper>
    </IntentWrapper>
  );
};
