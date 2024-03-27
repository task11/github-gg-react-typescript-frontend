import { fireEvent, render } from '@testing-library/react';

import { QueryDataProps } from '../../../../types/queryData';

import SearchRecentItem from '../SearchRecentItem';

const clickedRecent = {
  avatarUrl: 'https://avatars.githubusercontent.com/u/57589937?v=4',
  id: 57589937,
  username: 'cmg1411',
};

const searchRecent = {
  username: 'cmg1411',
};

describe('SearchRecentItem', () => {
  const onSearchQuery = jest.fn();
  const navigateToSearhDetail = jest.fn();

  const renderer = (recent: QueryDataProps) => {
    const { getByText } = render(
      <SearchRecentItem
        recent={recent}
        onSearchQuery={onSearchQuery}
        navigateToSearhDetail={navigateToSearhDetail}
      />,
    );

    return getByText;
  };
  it('Renders username', () => {
    const getByText = renderer(clickedRecent);

    expect(getByText('cmg1411')).not.toBeNull();
  });

  it('Calls onSearchQuery', () => {
    const getByText = renderer(clickedRecent);

    fireEvent.mouseDown(getByText('cmg1411'));

    expect(onSearchQuery).toBeCalledWith(clickedRecent);
  });

  it('Calls navigateToSearchDetail', () => {
    const getByText = renderer(searchRecent);

    fireEvent.mouseDown(getByText('cmg1411'));

    expect(navigateToSearhDetail).toBeCalledWith('cmg1411');
  });
});
