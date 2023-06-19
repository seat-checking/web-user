import {
  LoadingSpinner,
  SpinnerContainer,
} from 'components/layout/Spinner/Spinner.styled';

export const Spinner = () => {
  return (
    <SpinnerContainer>
      <LoadingSpinner />
    </SpinnerContainer>
  );
};
