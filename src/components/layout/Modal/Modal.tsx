import {
  ModalOverlay,
  ModalWrapper,
} from 'components/layout/Modal/Modal.styled';
import type React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  const handleWrapperClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalWrapper onClick={handleWrapperClick}>{children}</ModalWrapper>
    </ModalOverlay>
  );
};
