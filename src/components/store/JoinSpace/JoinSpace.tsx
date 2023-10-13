import { useInfiniteQuery } from '@tanstack/react-query';
import {
  getParticipationList,
  storeSpaceJoin,
} from 'api/reservation/reservation';
import { PATH } from 'common/utils/constants';
import { Modal } from 'components/common/Modal';
import { Spinner } from 'components/common/Spinner';
import {
  getFormattedMonthAndDay,
  getFormattedTime,
} from 'components/reservationStatus/reservationList/ApprovedList';
import {
  ErrorMessage,
  LeftContent,
  ListContent,
  ListDate,
  ListWrapper,
  NickName,
  RightContent,
  StoreSpace,
} from 'components/store/JoinSpace/JoinSpace.styled';

import {
  ModalMainText,
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
import { useLocation, useNavigate } from 'react-router-dom';
import type { ErrorResponse } from 'api/common';
import type {
  ParticipantList,
  ParticipationListResponse,
} from 'api/reservation/common';

export const JoinSpace = () => {
  const location = useLocation();
  const storeInfoFromState = location.state?.storeInfo;
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>('');
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
      queryKey: ['JoinSpace'],
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

  const handleOpenModal = (reservation: ParticipantList) => {
    setSelectedReservation(reservation);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setErrorMessage(false);
  };

  const handleJoin = async () => {
    if (selectedReservation) {
      try {
        await storeSpaceJoin({
          id: selectedReservation.id,
          utilizationUnit: selectedReservation.utilizationUnit,
        });
        navigate(`/${PATH.storeDetail}/${storeInfoFromState.id}`, {
          state: { alertMessage: '스페이스 참여 신청을 완료했어요.' },
        });
        handleCloseModal();
      } catch (error: any) {
        if (error.response) {
          const errorResponse: ErrorResponse = error.response.data;

          if (errorResponse.code === 'PARTICIPATION_400_002') {
            setErrorText(
              '이미 참여을 신청했거나\n참여 할 수 없는 스페이스입니다.',
            );
          } else if (errorResponse.code === 'PARTICIPATION_400_001') {
            setErrorText('본인이 신청한 내역입니다.');
          } else {
            setErrorText('알 수 없는 에러가 발생했습니다.');
          }

          setErrorMessage(true);
        } else {
          console.error(error);
        }
      }
    }
  };
  return (
    <>
      <InfiniteScroll loadMore={handleLoadMore} hasMore={hasNextPage}>
        {reservations.map((reservation) => (
          <ListWrapper
            key={`${reservation.id}-${reservation.utilizationUnit}`}
            onClick={() => handleOpenModal(reservation)}
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
            <ModalMainText>참여 신청</ModalMainText>
            <ModaSubText>
              {`${getFormattedMonthAndDay(selectedReservation.startSchedule)} `}
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
            {errorMessage ? <ErrorMessage>{errorText}</ErrorMessage> : null}
          </ModalContent>
          <ModalButtonWrapper>
            <ModalCancel onClick={handleCloseModal}>취소</ModalCancel>
            <ModalButton onClick={handleJoin}>참여 신청</ModalButton>
          </ModalButtonWrapper>
        </Modal>
      )}
    </>
  );
};
