import { BackButtonIcon } from 'components/common/BackButton/BackButton.styled';

import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = (): void => {
    navigate(-1);
  };

  return <BackButtonIcon onClick={handleBackClick} />;
};
