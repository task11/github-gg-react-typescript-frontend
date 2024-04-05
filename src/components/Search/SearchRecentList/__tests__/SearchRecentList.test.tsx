import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { MemoryRouter } from 'react-router-dom';
import { CustomThemeProvider } from '../../../../styles';

import SearchRecentList from '../SearchRecentList';

const recentUser = [
  {
    avatarUrl: 'https://avatars.githubusercontent.com/u/57589937?v=4',
    id: 57589937,
    username: 'cmg1411',
  },
];

const queryClient = new QueryClient();

describe('SearchRecentList', () => {
  const onSearchQuery = jest.fn();
  const navigateToSearhDetail = jest.fn();

  const renderer = () => {
    const { getByText } = render(
      <SearchRecentList
        onSearchQuery={onSearchQuery}
        navigateToSearhDetail={navigateToSearhDetail}
      />,
      {
        wrapper: ({ children }) => (
          <QueryClientProvider client={queryClient}>
            <RecoilRoot>
              <MemoryRouter>
                <CustomThemeProvider>{children}</CustomThemeProvider>
              </MemoryRouter>
            </RecoilRoot>
          </QueryClientProvider>
        ),
      },
    );

    return getByText;
  };

  const createMockLocalStorage = (storage: any) => {
    const localStorageMock = (function () {
      let store: any = storage;

      return {
        getItem(key: string) {
          return store[key] ?? null;
        },
        setItem(key: string, value: string) {
          store[key] = value.toString();
        },
        clear() {
          store = {};
        },
      };
    })();

    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });
  };

  it('LocalStorage Mock', async () => {
    createMockLocalStorage({
      recentQuery: JSON.stringify(recentUser),
    });
  });

  it('Renders recent list layout', () => {
    const getByText = renderer();

    expect(getByText(/최근 검색어/)).not.toBeNull();
  });

  it('Renders recent list user', () => {
    const getByText = renderer();

    expect(getByText(/cmg1411/)).not.toBeNull();
  });
});
