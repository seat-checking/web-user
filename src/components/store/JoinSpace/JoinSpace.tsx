import { useInfiniteQuery } from '@tanstack/react-query';
import { getParticipationList } from 'api/reservation/reservation';
import { Modal } from 'components/common/Modal';
import { Spinner } from 'components/common/Spinner';
import {
  getFormattedMonthAndDay,
  getFormattedTime,
} from 'components/reservationStatus/reservationList/ApprovedList';
import {
  LeftContent,
  ListContent,
  ListDate,
  ListWrapper,
  NickName,
  RightContent,
  StoreSpace,
} from 'components/store/JoinSpace/JoinSpace.styled';
import { ErrorMessage } from 'components/store/StoreList/StoreList.styled';
import {
  ModaMainText,
  ModaSubText,
  ModalButton,
  ModalButtonWrapper,
  ModalCancel,
  ModalColorText,
  ModalContent,
  ModalHelperText,
  ModalSeatNumberText,
} from 'components/store/reservation/Intent/Intent.styled';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { useLocation } from 'react-router-dom';
import type {
  ParticipantList,
  ParticipationListResponse,
} from 'api/reservation/common';

export const JoinSpace = () => {
  const location = useLocation();
  const storeInfoFromState = location.state?.storeInfo;
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedReservation, setSelectedReservation] =
    useState<ParticipantList | null>(null);

  const getParticipationData = async ({ pageParam = 1 }) => {
    if (storeInfoFromState && storeInfoFromState?.id) {
      const resData = await getParticipationList(storeInfoFromState.id, {
        page: pageParam,
        size: 15,
      });
      return resData.result;
    }
    throw new Error('스토어 아이디 없음');
  };
  const { isLoading, isError, data, fetchNextPage, hasNextPage } =
    useInfiniteQuery<ParticipationListResponse>({
      queryKey: ['ㄴㅇㅇㄴ'],
      queryFn: getParticipationData,
      getNextPageParam: (lastPage) => {
        if (lastPage.hasNext) {
          return lastPage.page + 1;
        }
        return undefined;
      },
    });

  const handleLoadMore = (): void => {
    fetchNextPage();
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorMessage>요청한 페이지를 찾을 수 없습니다.</ErrorMessage>;
  }

  let reservations: ParticipantList[] = [];
  for (let i = 0; i < data.pages.length; i++) {
    const page = data.pages[i];
    reservations = [...reservations, ...page.content];
  }

  const openModal = (reservation: ParticipantList) => {
    setSelectedReservation(reservation);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <InfiniteScroll loadMore={handleLoadMore} hasMore={hasNextPage}>
        {reservations.map((reservation) => (
          <ListWrapper
            key={reservation.id}
            onClick={() => openModal(reservation)}
          >
            <ListContent>
              <LeftContent>
                <NickName>{reservation.userNickname}</NickName>
                <StoreSpace>{reservation.storeSpaceName}</StoreSpace>
              </LeftContent>
              <RightContent>
                <ListDate>
                  {getFormattedMonthAndDay(reservation.startSchedule)}
                </ListDate>
                <ListDate>{`${getFormattedTime(
                  reservation.startSchedule,
                )}-${getFormattedTime(reservation.endSchedule)}`}</ListDate>
              </RightContent>
            </ListContent>
          </ListWrapper>
        ))}
      </InfiniteScroll>
      {modalOpen && selectedReservation && (
        <Modal>
          <ModalContent>
            <ModaMainText>참여 신청</ModaMainText>
            <ModaSubText>
              {getFormattedMonthAndDay(selectedReservation.startSchedule)}
              {`${getFormattedTime(
                selectedReservation.startSchedule,
              )}-${getFormattedTime(selectedReservation.endSchedule)}`}
            </ModaSubText>
            <ModalSeatNumberText>
              1층 레드룸에 참여 신청할까요?
            </ModalSeatNumberText>
            <ModalHelperText>
              참여 내역은{' '}
              <ModalColorText>이용현황 스페이스 참여</ModalColorText>에서
              <br />
              확인할 수 있어요.
            </ModalHelperText>
          </ModalContent>
          <ModalButtonWrapper>
            <ModalCancel onClick={closeModal}>취소</ModalCancel>
            <ModalButton>참여 신청</ModalButton>
          </ModalButtonWrapper>
        </Modal>
      )}
    </>
  );
};
