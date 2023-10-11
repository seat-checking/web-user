import {
  SpaceNowUse,
  SpaceReservation,
  chairNowUse,
  chairReservation,
  getRequestInformation,
} from 'api/reservation/reservation';
import { PATH } from 'common/utils/constants';
import { Modal } from 'components/common/Modal';
import { Button } from 'components/form/atoms/Button';
import { Fields } from 'components/store/reservation/Fields';
import {
  ButtonWrapper,
  IntentWrapper,
  ModaSubText,
  ModalButton,
  ModalButtonWrapper,
  ModalCancel,
  ModalColorText,
  ModalContent,
  ModalHelperText,
  ModalMainText,
  ModalSeatNumberText,
} from 'components/store/reservation/Intent/Intent.styled';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useReservationStore } from 'store/reservationStore';
import { useTheme } from 'styled-components';
import type {
  GetRequestInformationParams,
  SeatScheduleParams,
  SpaceScheduleParams,
  StoreCustomReservationResponse,
} from 'api/reservation/common';

type ApiResponse = {
  isSuccess: boolean;
  status: number;
  code: string;
  message: string;
  result: null;
};

const formatTimeFromISO = (isoString: string) => {
  const date = new Date(isoString);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);

  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${month}월 ${day}일`;
};
export const Intent = () => {
  const [checkedStatus, setCheckedStatus] = useState<Record<string, boolean>>(
    {},
  );
  const [requestData, setRequestData] =
    useState<StoreCustomReservationResponse | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [fieldValues, setFieldValues] = useState<
    Record<string, string | string[]>
  >({});
  const [areAllFieldsFilled, setAreAllFieldsFilled] = useState(false);

  const setCustomContent = useReservationStore(
    (state) => state.setCustomContent,
  );
  const storeId = useReservationStore((state) => state.storeId);
  const startSchedule = useReservationStore((state) => state.startSchedule);
  const endSchedule = useReservationStore((state) => state.endSchedule);
  const storeChairId = useReservationStore((state) => state.storeChairId);
  const storeSpaceId = useReservationStore((state) => state.storeSpaceId);
  const customUtilizationContents = useReservationStore(
    (state) => state.customUtilizationContents,
  );
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from;
  const theme = useTheme();
  const dateDisplay = formatDate(startSchedule);

  const firstData = startSchedule && endSchedule;

  const apiFunction =
    from === 'SeatBooking'
      ? chairReservation
      : from === 'SeatUseNow'
      ? chairNowUse
      : from === 'SpaceBooking'
      ? SpaceReservation
      : from === 'SpaceUseNow'
      ? SpaceNowUse
      : null;

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleRadioClick = (name: string, fieldId: number) => {
    setCheckedStatus({
      ...checkedStatus,
      [name]: !checkedStatus[name],
    });

    let updatedValues;
    if (checkedStatus[name]) {
      updatedValues = selectedValues.filter((val) => val !== name);
    } else {
      updatedValues = [...selectedValues, name];
    }

    setFieldValues({
      ...fieldValues,
      [fieldId]: updatedValues,
    });

    setSelectedValues(updatedValues);
    setCustomContent(fieldId, updatedValues);
  };

  const handleFreeInputChange = (value: string, fieldId: number) => {
    setFieldValues({
      ...fieldValues,
      [fieldId]: value,
    });
    setCustomContent(fieldId, [value]);
  };

  useEffect(() => {
    if (!firstData) {
      navigate(`/${PATH.storeList}`);
    }
  }, [navigate, firstData]);

  useEffect(() => {
    const getRequestData = async () => {
      try {
        const params: GetRequestInformationParams = {
          storeId: String(storeId),
        };
        const data = await getRequestInformation(params);
        if (!data.result) {
          setModalOpen(true);
        } else {
          setRequestData(data.result);
        }
      } catch (error) {
        setModalOpen(true);
      }
    };

    getRequestData();
  }, [storeId]);

  useEffect(() => {
    if (!requestData || !requestData.storeCustomUtilizationFieldList) {
      setAreAllFieldsFilled(false);
      return;
    }

    const totalFields = requestData.storeCustomUtilizationFieldList.length;
    const filledFields = Object.values(fieldValues).length;

    if (filledFields !== totalFields) {
      setAreAllFieldsFilled(false);
      return;
    }

    const allFilled = Object.values(fieldValues).every((value) => {
      if (Array.isArray(value)) {
        return value.length > 0;
      }
      return value !== '';
    });

    setAreAllFieldsFilled(allFilled);
  }, [fieldValues, requestData]);

  const handleReservationSubmit = async () => {
    try {
      if (apiFunction === null) {
        throw new Error('API function is not defined');
      }

      if (from === 'SeatBooking' || from === 'SeatUseNow') {
        const params: SeatScheduleParams = {
          storeChairId,
          startSchedule,
          endSchedule,
          customUtilizationContents,
        };
        await (
          apiFunction as (params: SeatScheduleParams) => Promise<ApiResponse>
        )(params);
      } else if (from === 'SpaceBooking' || from === 'SpaceUseNow') {
        const params: SpaceScheduleParams = {
          storeSpaceId,
          startSchedule,
          endSchedule,
          customUtilizationContents,
        };
        await (
          apiFunction as (params: SpaceScheduleParams) => Promise<ApiResponse>
        )(params);
      } else {
        throw new Error('Invalid "from" type');
      }

      navigate(`/${PATH.storeDetail}/${storeId}`, { replace: true });
    } catch (error) {
      return null;
    }
  };

  const startScheduleFormatted = formatTimeFromISO(startSchedule);
  const endScheduleFormatted = formatTimeFromISO(endSchedule);

  return (
    <IntentWrapper>
      <Fields
        requestData={requestData}
        checkedStatus={checkedStatus}
        handleRadioClick={handleRadioClick}
        handleFreeInputChange={handleFreeInputChange}
      />
      <ButtonWrapper>
        {areAllFieldsFilled ? (
          <Button
            backgroundColor={theme.palette.primary.orange}
            color={theme.palette.white.main}
            onClick={handleOpenModal}
          >
            사용신청
          </Button>
        ) : (
          <Button
            backgroundColor={theme.palette.grey[100]}
            color={theme.palette.grey[400]}
            disabled
          >
            사용신청
          </Button>
        )}
      </ButtonWrapper>
      {modalOpen && (
        <Modal>
          <ModalContent>
            <ModalMainText>사용신청</ModalMainText>
            <ModaSubText>{`${dateDisplay} ${startScheduleFormatted} - ${endScheduleFormatted}`}</ModaSubText>
            <ModalSeatNumberText>
              {storeChairId}번 좌석을 예약할까요?
            </ModalSeatNumberText>
            {from === 'SeatBooking' || from === 'SeatUseNow' ? (
              <ModalHelperText>
                사용 승인 후, <ModalColorText>10분 안에</ModalColorText>{' '}
                착석하지 않으면,
                <br />
                예약이 취소될 수 있습니다
              </ModalHelperText>
            ) : (
              <ModalHelperText>
                사용 승인 후, <ModalColorText>30분 안에</ModalColorText>{' '}
                착석하지 않으면,
                <br />
                예약이 취소될 수 있습니다
              </ModalHelperText>
            )}
          </ModalContent>
          <ModalButtonWrapper>
            <ModalCancel onClick={handleCloseModal}>취소</ModalCancel>
            <ModalButton onClick={handleReservationSubmit}>
              예약신청
            </ModalButton>
          </ModalButtonWrapper>
        </Modal>
      )}
    </IntentWrapper>
  );
};
