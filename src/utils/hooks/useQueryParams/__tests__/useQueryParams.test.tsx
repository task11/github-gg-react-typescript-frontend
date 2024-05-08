import { renderHook } from '@testing-library/react';
import { useSearchParams } from 'react-router-dom';
import useQueryParams from '../useQueryParams';

jest.mock('react-router-dom', () => ({
  useSearchParams: jest.fn(),
}));

describe('useQueryParams 테스트', () => {
  it('주어진 쿼리 스트링을 정상적으로 반환해야 함', () => {
    const mockSearchParams = new URLSearchParams('test=123');

    (useSearchParams as jest.Mock).mockReturnValue([mockSearchParams]);

    const { result } = renderHook(() => useQueryParams('test'));

    expect(result.current.queryString).toBe('123');
  });

  it('존재하지 않는 쿼리 스트링의 경우 undefined를 반환해야 함', () => {
    const mockSearchParams = new URLSearchParams('');
    (useSearchParams as jest.Mock).mockReturnValue([mockSearchParams]);

    const { result } = renderHook(() => useQueryParams('nothing'));

    expect(result.current.queryString).toBeNull();
  });
});
