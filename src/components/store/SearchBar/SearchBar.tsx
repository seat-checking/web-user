import { getSeachList } from 'api/store/storeApi';
import { InputResetIcon } from 'components/form/atoms/InputResetIcon';
import { Spinner } from 'components/layout/Spinner';
import {
  ResetbtnWrapper,
  SearchBarContainer,
  SearchBarWrapper,
  SearchInput,
  SearchInputWrapper,
} from 'components/store/SearchBar/SearchBar.styled';
import { StoreItem } from 'components/store/StoreItem';
import { ErrorMessage } from 'components/store/storeList/AllList/AllList.styled';
import { BackButtonIcon } from 'pages/LoginPage/LoginPage.styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { StoreUser } from 'api/store/storeApi';
import type { VFC } from 'common/utils/types';

import type { ChangeEvent, KeyboardEvent } from 'react';

export const SearchBar: VFC = () => {
  const [value, setValue] = useState<string>('');
  const [Stores, setStores] = useState<StoreUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleValueResetClick = () => {
    setValue('');
  };

  const showResetIcon = value.length > 0; // 인풋값이 있는 경우에만 리셋 아이콘을 보여줌

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(-1);
  };

  const handleKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value.length > 0) {
      try {
        setLoading(true);
        const resData = await getSeachList({ name: value });
        setStores(resData.result.storeList);
        setLoading(false);
      } catch (err) {
        setError('서버에서 데이터를 받아오지 못했습니다');
        setLoading(false);
      }
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <SearchBarContainer>
      <SearchBarWrapper>
        <BackButtonIcon onClick={handleButtonClick} />
        <SearchInputWrapper>
          <SearchInput
            placeholder='검색어를 입력하세요'
            onChange={handleChange}
            value={value}
            onKeyDown={handleKeyDown} // 엔터 키 이벤트 처리
          />
          {showResetIcon && (
            <ResetbtnWrapper>
              <InputResetIcon onClick={handleValueResetClick} />
            </ResetbtnWrapper>
          )}
        </SearchInputWrapper>
      </SearchBarWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading ? (
        <Spinner />
      ) : (
        Stores.map((store) => (
          <StoreItem
            key={store.id}
            src={store.mainImage}
            storeName={store.name}
            introduction={store.introduction}
          />
        ))
      )}
    </SearchBarContainer>
  );
};
