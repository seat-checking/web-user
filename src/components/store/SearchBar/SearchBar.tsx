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
import { BackButtonIcon } from 'pages/LoginPage/LoginPage.styled';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import type { ErrorResponse } from 'api/store/common';
import type { StoreListResponse, StoreUser } from 'api/store/storeApi';
import type { VFC } from 'common/utils/types';

import type { ChangeEvent, KeyboardEvent } from 'react';

export const SearchBar: VFC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get('query') || '');
  const [query, setQuery] = useState(searchParams.get('query') || '');

  const getSeachData = async ({ pageParam = 1 }) => {
    const resData = await getSeachList({
      page: pageParam,
      size: 15,
      name: query,
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
      enabled: query.length > 0,
    });

  const navigate = useNavigate();

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setQuery(inputValue);
      navigate(`?query=${inputValue}`, { replace: true });
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleLoadMore = (): void => {
    fetchNextPage();
  };

  const handleValueResetClick = () => {
    setInputValue('');
  };

  let stores: StoreUser[] = [];
  if (data) {
    for (let i = 0; i < data.pages.length; i++) {
      const page = data.pages[i];
      stores = [...stores, ...page.storeResponseList];
    }
  }

  const handleButtonClick = () => {
    navigate(-1);
  };

  return (
    <SearchBarContainer>
      <SearchBarWrapper>
        <BackButtonIcon onClick={handleButtonClick} />
        <SearchInputWrapper>
          <SearchInput
            placeholder='검색어를 입력하세요'
            onChange={handleChange}
            value={inputValue}
            onKeyDown={handleSearch}
          />
          {query.length > 0 && (
            <ResetbtnWrapper>
              <InputResetIcon onClick={handleValueResetClick} />
            </ResetbtnWrapper>
          )}
        </SearchInputWrapper>
      </SearchBarWrapper>
      <InfiniteScroll loadMore={handleLoadMore} hasMore={hasNextPage}>
        {query.length === 0 ? null : isError ? (
          <ResponseMessage>
            요청 중 오류가 발생했습니다. 다시 시도해주세요.
          </ResponseMessage>
        ) : isLoading ? (
          <Spinner />
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
