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
import { SearchContext } from 'context/SearchContext';
import { BackButtonIcon } from 'pages/LoginPage/LoginPage.styled';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { StoreUser } from 'api/store/storeApi';
import type { VFC } from 'common/utils/types';

import type { ChangeEvent, KeyboardEvent } from 'react';

export const SearchBar: VFC = () => {
  const searchContext = useContext(SearchContext);

  if (!searchContext) {
    throw new Error('SearchBar must be used within a SearchProvider');
  }

  const { searchValue, setSearchValue, searchResults, setSearchResults } =
    searchContext;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleValueResetClick = () => {
    setSearchValue('');
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(-1);
  };

  const handleKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchValue.length > 0) {
      try {
        setLoading(true);
        const resData = await getSeachList({ name: searchValue });
        setSearchResults(resData.result);
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
            value={searchValue}
            onKeyDown={handleKeyDown}
          />
          {searchValue.length > 0 && (
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
        searchResults.map((store: StoreUser) => (
          <Link key={store.id} to={`/storeDetail/${store.id}`}>
            <StoreItem
              key={store.id}
              src={store.mainImage}
              storeName={store.name}
              introduction={store.introduction}
            />
          </Link>
        ))
      )}
    </SearchBarContainer>
  );
};
