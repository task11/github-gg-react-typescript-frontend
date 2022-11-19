import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('Shows App test', () => {
    const { queryByText } = render(<App />);

    expect(queryByText(/hel/)).not.toBeNull();
  });
});
