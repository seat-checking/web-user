import { useInfiniteQuery } from '@tanstack/react-query';
import { getSeachList } from 'api/store/storeApi';
import { InputResetIcon } from 'components/form/atoms/InputResetIcon';
import { Spinner } from 'components/layout/Spinner';
import {
  ResetbtnWrapper,
  ResponseMessage,
  SearchBarContainer,
  SearchBarWrapper,
  SearchInput,
  SearchInputWrapper,
} from 'components/store/SearchBar/SearchBar.styled';
import { StoreItem } from 'components/store/StoreItem';
import { SearchContext } from 'context/SearchContext';
import { BackButtonIcon } from 'pages/LoginPage/LoginPage.styled';
import { useContext, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Link, useNavigate } from 'react-router-dom';
import type { ErrorResponse } from 'api/store/common';
import type { StoreListResponse, StoreUser } from 'api/store/storeApi';
import type { VFC } from 'common/utils/types';

import type { ChangeEvent, KeyboardEvent } from 'react';

export const SearchBar: VFC = () => {
  const searchContext = useContext(SearchContext);
  const [query, setQuery] = useState('');

  if (!searchContext) {
    throw new Error('SearchBar must be used within a SearchProvider');
  }
  const { searchValue, setSearchValue } = searchContext;

  const getSeachData = async ({ pageParam = 1 }) => {
    const resData = await getSeachList({
      page: pageParam,
      size: 15,
      name: searchValue,
    });
    return resData.result;
  };

  const { isLoading, isError, data, fetchNextPage, hasNextPage } =
    useInfiniteQuery<StoreListResponse, ErrorResponse>({
      queryKey: ['SearchData', query],
      queryFn: ({ pageParam = 1 }) => getSeachData({ pageParam }),
      getNextPageParam: (lastPage) => {
        if (lastPage.totalPage > lastPage.curPage) {
          return lastPage.curPage + 1;
        }
        return undefined;
      },
    });

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setQuery(searchValue);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleLoadMore = (): void => {
    fetchNextPage();
  };

  const handleValueResetClick = () => {
    setSearchValue('');
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(-1);
  };

  if (isLoading) {
    return <Spinner />;
  }
  let stores: StoreUser[] = [];
  if (data) {
    for (let i = 0; i < data.pages.length; i++) {
      const page = data.pages[i];
      stores = [...stores, ...page.storeResponseList];
    }
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
            onKeyDown={handleSearch}
          />
          {searchValue.length > 0 && (
            <ResetbtnWrapper>
              <InputResetIcon onClick={handleValueResetClick} />
            </ResetbtnWrapper>
          )}
        </SearchInputWrapper>
      </SearchBarWrapper>
      <InfiniteScroll loadMore={handleLoadMore} hasMore={hasNextPage}>
        {isError ? (
          <ResponseMessage>
            요청 중 오류가 발생했습니다. 다시 시도해주세요.
          </ResponseMessage>
        ) : stores.length === 0 ? (
          <ResponseMessage>검색 결과가 없습니다.</ResponseMessage>
        ) : (
          stores.map((store) => (
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
      </InfiniteScroll>
    </SearchBarContainer>
  );
};
