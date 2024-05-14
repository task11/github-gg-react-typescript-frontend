import { act, renderHook } from '@testing-library/react';

import useToggleModal from '../useToggleModal';

describe('UseToggleModal', () => {
  const renderer = () => {
    const { result } = renderHook(() => useToggleModal());
    return result;
  };

  it('Initial modal state is False', () => {
    const result = renderer();

    expect(result.current.modalState).toBe(false);
  });

  it('Calls toggleModal', () => {
    const result = renderer();

    act(() => {
      result.current.toggleModal();
    });

    expect(result.current.modalState).toBe(true);
  });
});
