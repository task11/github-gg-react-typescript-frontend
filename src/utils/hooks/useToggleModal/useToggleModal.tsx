import { useCallback } from 'react';
import { useAtom } from 'jotai';

import { modalAtom } from '../../../atoms/modal';

export default function useToggleModal() {
  const [modalState, setModalState] = useAtom(modalAtom);

  const toggleModal = useCallback(() => {
    setModalState((prev) => !prev);
  }, [modalState]);

  return { modalState, toggleModal };
}
