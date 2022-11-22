import { act, renderHook } from '@testing-library/react';

import { RecoilRoot } from 'recoil';
import { QueryDataProps } from '../../../../types/queryData';

import useHandleSearch from '../useHandleSearch';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('UseHandleSearch', () => {
  const renderer = () => {
    const { result } = renderHook(() => useHandleSearch('initQuery'), {
      wrapper: ({ children }) => <RecoilRoot>{children}</RecoilRoot>,
    });
    return result;
  };

  it('Calls onSearchQuery', () => {
    const result = renderer();

    act(() => {
      result.current.onSearchQuery({
        id: 1,
        avatarUrl: 'test@test.com',
        username: 'task11',
      } as QueryDataProps);
    });
  });
});
