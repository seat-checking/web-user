import {
  LoadingSpinner,
  SpinnerContainer,
} from 'components/common/Spinner/Spinner.styled';

export const Spinner = () => {
  return (
    <SpinnerContainer>
      <LoadingSpinner />
    </SpinnerContainer>
  );
};
