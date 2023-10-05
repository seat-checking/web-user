import { InputLabel } from 'components/form/atoms/InputLabel';
import { InputRadio } from 'components/form/atoms/InputRadio';
import { Inputs } from 'components/form/molecules/Inputs';
import { InputRadioGroup } from 'components/store/reservation/Fields/Fields.styled';
import type { StoreCustomReservationResponse } from 'api/reservation/common';

type FieldsRendererProps = {
  requestData: StoreCustomReservationResponse | null;
  checkedStatus: Record<string, boolean>;
  handleRadioClick: (name: string, fieldId: number) => void;
  handleFreeInputChange: (value: string, fieldId: number) => void;
};

export const Fields: React.FC<FieldsRendererProps> = ({
  requestData,
  checkedStatus,
  handleRadioClick,
  handleFreeInputChange,
}) => {
  if (!requestData || !requestData.storeCustomUtilizationFieldList) {
    return null;
  }

  return (
    <>
      {requestData.storeCustomUtilizationFieldList.map((field) => {
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
                  key={`${field.id}-${option}`}
                  id={`${field.title}-${idx}`}
                  value={option}
                  label={option}
                  name={`${field.title}-${option}`}
                  size='small'
                  checked={checkedStatus[option] || false}
                  onChange={() => handleRadioClick(`${option}`, field.id)}
                  onClick={() => handleRadioClick(`${option}`, field.id)}
                />
              ))}
            </InputRadioGroup>
          );
        }

        return null;
      })}
    </>
  );
};
