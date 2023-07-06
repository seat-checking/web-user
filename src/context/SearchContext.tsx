import { createContext, useState, useEffect, useMemo } from 'react';
import type { StoreUser } from 'api/store/storeApi';
import type { VFC } from 'common/utils/types';
import type React from 'react';

interface SearchProviderProps {
  children: React.ReactNode;
}

interface SearchContextProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchResults: StoreUser[];
  setSearchResults: React.Dispatch<React.SetStateAction<StoreUser[]>>;
}
export const SearchContext = createContext<SearchContextProps | undefined>(
  undefined,
);

export const SearchProvider: VFC<SearchProviderProps> = ({ children }) => {
  const [searchValue, setSearchValue] = useState<string>(() => {
    const sessionData = sessionStorage.getItem('searchValue');
    return sessionData ? JSON.parse(sessionData) : '';
  });

  const [searchResults, setSearchResults] = useState<StoreUser[]>(() => {
    const sessionData = sessionStorage.getItem('searchResults');
    return sessionData ? JSON.parse(sessionData) : [];
  });

  useEffect(() => {
    sessionStorage.setItem('searchValue', JSON.stringify(searchValue));
    sessionStorage.setItem('searchResults', JSON.stringify(searchResults));
  }, [searchValue, searchResults]);

  const value = useMemo(
    () => ({ searchValue, setSearchValue, searchResults, setSearchResults }),
    [searchValue, searchResults],
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
