import { useState } from 'react';

const useSignIn: () => {
  isModalOpen: boolean;
  handleCancel: () => void;
  handleOpenModal: () => void;
  handleOk: () => void;
} = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  return { isModalOpen, handleCancel, handleOpenModal, handleOk };
};

export default useSignIn;
