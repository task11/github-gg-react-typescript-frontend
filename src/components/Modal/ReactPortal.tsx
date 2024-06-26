import ReactDOM from 'react-dom';

import ModalFrame from './ModalFrame';

import useToggleModal from '../../utils/hooks/useToggleModal';

interface Props {
  children: React.ReactNode;
}

export default function ReactPortal({ children }: Props) {
  const container = document.getElementById('portal-root') as HTMLElement;

  const { modalState, toggleModal } = useToggleModal();

  return ReactDOM.createPortal(
    <ModalFrame state={modalState} handleModal={toggleModal}>
      {children}
    </ModalFrame>,
    container,
  );
}
