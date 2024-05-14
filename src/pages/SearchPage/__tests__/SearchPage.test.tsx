import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import SearchPage from '../SearchPage';
import SearchResultHeader from '../../../components/SearchResult/SearchResultHeader';
import SearchResultCardList from '../../../components/SearchResult/SearchResultCardList';
import SearchResultInfinityScroll from '../../../components/SearchResult/SearchResultInfinityScroll';

import { CustomThemeProvider } from '../../../styles';

const queryClient = new QueryClient();

jest.mock('../../../utils/hooks/useQueryParams', () => ({
  __esModule: true,
  default: () => ({
    queryString: 'test',
  }),
}));

jest.mock('../../../components/SearchResult/SearchResultHeader');
jest.mock('../../../components/SearchResult/SearchResultCardList');
jest.mock('../../../components/SearchResult/SearchResultInfinityScroll');

describe('SearchPage Component', () => {
  beforeEach(() => {
    (SearchResultHeader as jest.Mock).mockImplementation(() => (
      <div>SearchResultHeader Component</div>
    ));
    (SearchResultCardList as jest.Mock).mockImplementation(() => (
      <div>SearchResultCardList Component</div>
    ));
    (SearchResultInfinityScroll as jest.Mock).mockImplementation(() => (
      <div>SearchResultInfinityScroll Component</div>
    ));
  });

  it('renders SearchPage with username from URL parameters', async () => {
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={['/search?q=test']}>
          <CustomThemeProvider>
            <SearchPage />
          </CustomThemeProvider>
        </MemoryRouter>
      </QueryClientProvider>,
    );

    await waitFor(() => {
      expect(getByText('SearchResultHeader Component')).toBeInTheDocument();
      expect(getByText('SearchResultCardList Component')).toBeInTheDocument();
      expect(
        getByText('SearchResultInfinityScroll Component'),
      ).toBeInTheDocument();
    });
  });
});
