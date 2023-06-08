import { getSeachList } from 'api/store/storeApi';
import { InputResetIcon } from 'components/form/atoms/InputResetIcon';
import {
  ResetbtnWrapper,
  SearchBarContainer,
  SearchBarWrapper,
  SearchInput,
  SearchInputWrapper,
} from 'components/store/SearchBar/SearchBar.styled';
import { StoreItem } from 'components/store/StoreItem';
import { BackButtonIcon } from 'pages/LoginPage/LoginPage.styled';
import { useEffect, useState } from 'react';
import type { StoreUser } from 'api/store/storeApi';

import type { VFC } from 'common/utils/types';
import type { ChangeEvent } from 'react';

export const SearchBar: VFC = () => {
  const [value, setValue] = useState<string>('');
  const [stores, setStores] = useState<StoreUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleValueResetClick = () => {
    setValue('');
  };

  const showResetIcon = value.length > 0; // 인풋값이 있는 경우에만 리셋 아이콘을 보여줌

  useEffect(() => {
    const getSearchData = async () => {
      try {
        setLoading(true);
        const resData = await getSeachList({ name: value });
        setStores(resData.result.storeList);
        setLoading(false);
      } catch (e) {
        setError('서버에서 데이터를 받아오지 못했습니다');
        setLoading(false);
      }
    };
    getSearchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <SearchBarContainer>
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
      {error && <div>Error: {error}</div>}
      {!error &&
        stores.map((store) => (
          <StoreItem
            key={store.name}
            src={store.mainImage}
            storeName={store.name}
            introduction={store.introduction}
          />
        ))}
    </SearchBarContainer>
  );
};
