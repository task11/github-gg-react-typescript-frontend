import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { modalAtom } from '../../../store/modal';

export default function useToggleModal() {
  const [modalState, setModalState] = useRecoilState(modalAtom);

  const toggleModal = useCallback(() => {
    setModalState((prev) => !prev);
  }, [modalState]);

  return { modalState, toggleModal };
}
