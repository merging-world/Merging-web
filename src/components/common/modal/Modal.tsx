import styled from '@emotion/styled';
import { useSetRecoilState } from 'recoil';
import { modalStates } from 'atoms';

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const setIsModal = useSetRecoilState(modalStates);

  return (
    <>
      <ModalContainer onClick={() => setIsModal({ type: 'open', status: true })}>
        {children}
      </ModalContainer>
    </>
  );
};

const ModalContainer = styled.article`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

export default Modal;
