import { useQuery } from '@tanstack/react-query';
import {
  getCurrentlyInUse,
  getSeatStatistics,
  getSpaceLayout,
  getSpaceList,
} from 'api/store/store';
import { queryKeys } from 'common/utils/constants';

export const useGetSpaceList = (storeId: number) => {
  return useQuery({
    queryKey: [queryKeys.GET_SPACE_LIST],
    queryFn: () => getSpaceList(storeId),
    refetchOnWindowFocus: false,
  });
};

export const useGetSpaceLayout = (spaceId: number | null) => {
  return useQuery({
    queryKey: [queryKeys.GET_SPACE_LAYOUT, spaceId],
    queryFn: () => getSpaceLayout(spaceId),
    enabled: spaceId !== null,
    refetchOnWindowFocus: false,
  });
};

export const useGetSeatStatistics = (storeId: number) => {
  return useQuery({
    queryKey: [queryKeys.GET_SEAT_STATISTICS, storeId],
    queryFn: () => getSeatStatistics(storeId),
    refetchOnWindowFocus: false,
  });
};

export const useGetCurrentlyInUse = (spaceId: number) => {
  return useQuery({
    queryKey: [queryKeys.GET_CURRENTLY_IN_USE, spaceId],
    queryFn: () => getCurrentlyInUse(spaceId),
  });
};
