import { InputResetIcon } from 'components/form/atoms/InputResetIcon';
import {
  ResetbtnWrapper,
  SearchBarWrapper,
  SearchInput,
  SearchInputWrapper,
} from 'components/store/SearchBar/SearchBar.styled';
import { BackButtonIcon } from 'pages/LoginPage/LoginPage.styled';
import React, { useState } from 'react';
import type { VFC } from 'common/utils/types';
import type { ChangeEvent } from 'react';

export const SearchBar: VFC = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleValueResetClick = () => {
    setValue('');
  };

  const showResetIcon = value.length > 0; // 인풋값이 있는 경우에만 리셋 아이콘을 보여줌

  return (
    <SearchBarWrapper>
      <BackButtonIcon />
      <SearchInputWrapper>
        <SearchInput
          placeholder='검색어를 입력하세요'
          onChange={handleChange}
          value={value}
        />
        {showResetIcon && (
          <ResetbtnWrapper>
            <InputResetIcon onClick={handleValueResetClick} />
          </ResetbtnWrapper>
        )}
      </SearchInputWrapper>
    </SearchBarWrapper>
  );
};
