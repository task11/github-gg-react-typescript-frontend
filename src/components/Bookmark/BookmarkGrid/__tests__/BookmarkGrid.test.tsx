import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { fireEvent, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { CustomThemeProvider } from '../../../../styles';

import BookmarkGrid from '../BookmarkGrid';

const queryClient = new QueryClient();

const expectedData = [
  {
    id: 350283,
    avatarUrl: 'https://avatars.githubusercontent.com/u/350283?v=4',
    username: 'abbychau',
  },
  {
    id: 89209626,
    avatarUrl: 'https://avatars.githubusercontent.com/u/89209626?v=4',
    username: 'task11',
  },
];

describe('BookmarkGrid', () => {
  const handleCancel = jest.fn();
  const handleNavigate = jest.fn();

  const renderer = () => {
    const { getByText } = render(
      <BookmarkGrid
        bookmarks={expectedData}
        handleBookmarkCancel={handleCancel}
        navigateBookmarkUser={handleNavigate}
      />,
      {
        wrapper: ({ children }) => (
          <QueryClientProvider client={queryClient}>
            <MemoryRouter>
              <CustomThemeProvider>{children}</CustomThemeProvider>
            </MemoryRouter>
          </QueryClientProvider>
        ),
      },
    );

    return getByText;
  };

  it('Renders bookmarked user name', () => {
    const getByText = renderer();

    expect(getByText('task11')).not.toBeNull();
  });

  it('Calls handleNavigte with username', () => {
    const getByText = renderer();

    fireEvent.click(getByText('task11'));

    expect(handleNavigate).toBeCalledWith('task11');
  });
});
