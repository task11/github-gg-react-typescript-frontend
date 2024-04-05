import { act, renderHook } from '@testing-library/react';
import useDebounce from '../useDebounce';

describe('useDebounce', () => {
  jest.useFakeTimers();

  it('should debounce the value after delay', () => {
    const initialValue = 'Test';
    const delay = 500;

    const { result, rerender } = renderHook(
      (props) => useDebounce(props.value, props.delay),
      {
        initialProps: { value: initialValue, delay },
      },
    );

    expect(result.current).toBe(initialValue);

    const updatedValue = 'Complete';

    act(() => {
      rerender({ value: updatedValue, delay });
      jest.advanceTimersByTime(delay - 100);
    });
    expect(result.current).toBe(initialValue);

    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(result.current).toBe(updatedValue);
  });

  it('should handle multiple re-renders and clean up timers', () => {
    const initialValue = 'Test';
    const delay = 500;

    const { result, rerender, unmount } = renderHook(
      (props) => useDebounce(props.value, props.delay),
      {
        initialProps: { value: initialValue, delay },
      },
    );

    expect(result.current).toBe(initialValue);

    const updatedValue = 'Complete';
    act(() => {
      rerender({ value: updatedValue, delay });
      jest.advanceTimersByTime(200);
      rerender({ value: initialValue, delay });
    });

    expect(result.current).toBe(initialValue);

    act(() => {
      unmount();
    });
    expect(result.current).toBe(initialValue);
  });
});
