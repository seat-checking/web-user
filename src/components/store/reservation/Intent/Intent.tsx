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
import { InputLabel } from 'components/form/atoms/InputLabel';
import { InputRadio } from 'components/form/atoms/InputRadio';
import { Inputs } from 'components/form/molecules/Inputs';
import {
  ButtonWrapper,
  InputRadioGroup,
  IntentWrapper,
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
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useReservationStore } from 'store/reservationStore';
import { useTheme } from 'styled-components';
import type { StoreCustomReservationResponse } from 'api/reservation/common';
import type {
  GetRequestInformationParams,
  SeatScheduleParams,
  SpaceScheduleParams,
} from 'api/reservation/reservation';

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
  const setCustomContent = useReservationStore(
    (state) => state.setCustomContent,
  );
  const startSchedule = useReservationStore((state) => state.startSchedule);
  const endSchedule = useReservationStore((state) => state.endSchedule);
  const storeChairId = useReservationStore((state) => state.storeChairId);
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

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
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
    setSelectedValues(updatedValues);

    setCustomContent(fieldId, updatedValues);
  };

  const handleFreeInputChange = (value: string, fieldId: number) => {
    setCustomContent(fieldId, [value]);
  };

  const renderFields = () => {
    if (!requestData || !requestData.storeCustomUtilizationFieldList) {
      return null;
    }

    return requestData.storeCustomUtilizationFieldList.map((field) => {
      if (field.type === '자유 입력') {
        return (
          <Inputs
            key={field.id}
            labelRequired
            placeholder={JSON.parse(field.contentGuide)[0]}
            valueLength={0}
            onChange={(e) => handleFreeInputChange(e.target.value, field.id)}
          >
            {field.title}
          </Inputs>
        );
      }

      if (field.type === '선택지 제공') {
        const options = JSON.parse(field.contentGuide);

        return (
          <InputRadioGroup key={field.id}>
            <InputLabel labelRequired>{field.title}</InputLabel>
            {options.map((option: string, idx: number) => (
              <InputRadio
                key={field.id}
                id={`${field.title}-${idx}`}
                value={option}
                label={option}
                name={`${field.title}-${option}`}
                size='small'
                checked={checkedStatus[option]}
                onClick={() => handleRadioClick(`${option}`, field.id)}
              />
            ))}
          </InputRadioGroup>
        );
      }

      return null;
    });
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
          storeId: '55',
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
  }, []);

  const handleReservationSubmit = async () => {
    try {
      if (apiFunction === null) {
        throw new Error('API function is not defined');
      }

      if (from === 'SeatBooking' || from === 'SeatUseNow') {
        const params: SeatScheduleParams = {
          storeChairId: 58,
          startSchedule,
          endSchedule,
          customUtilizationContents,
        };
        await (
          apiFunction as (params: SeatScheduleParams) => Promise<ApiResponse>
        )(params);
      } else if (from === 'SpaceBooking' || from === 'SpaceUseNow') {
        const params: SpaceScheduleParams = {
          storeSpaceId: 58,
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

      navigate(PATH.storeDetail); // TODO: 해당 스토어디테일 페이지 이동
    } catch (error) {
      return null;
    }
  };

  const startScheduleFormatted = formatTimeFromISO(startSchedule);
  const endScheduleFormatted = formatTimeFromISO(endSchedule);

  return (
    <IntentWrapper>
      {renderFields()}
      <ButtonWrapper>
        <Button
          backgroundColor={theme.palette.primary.orange}
          color='white'
          onClick={openModal}
        >
          사용신청
        </Button>
      </ButtonWrapper>
      {modalOpen && (
        <Modal>
          <ModalContent>
            <ModaMainText>사용신청</ModaMainText>
            <ModaSubText>{`${dateDisplay} ${startScheduleFormatted} - ${endScheduleFormatted}`}</ModaSubText>
            <ModalSeatNumberText>
              {storeChairId}번 좌석을 예약할까요?
            </ModalSeatNumberText>
            <ModalHelperText>
              사용 승인 후, <ModalColorText>10분 안에</ModalColorText> 착석하지
              않으면, 예약이 취소될 수 있습니다
            </ModalHelperText>
          </ModalContent>
          <ModalButtonWrapper>
            <ModalCancel onClick={closeModal}>취소</ModalCancel>
            <ModalButton onClick={handleReservationSubmit}>
              예약신청
            </ModalButton>
          </ModalButtonWrapper>
        </Modal>
      )}
    </IntentWrapper>
  );
};
