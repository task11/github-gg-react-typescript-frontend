import { render } from '@testing-library/react';

import { RecoilRoot } from 'recoil';

import App from './App';

describe('App', () => {
  it('Shows App test', () => {
    const { queryByText } = render(
      <RecoilRoot>
        <App />
      </RecoilRoot>,
    );

    expect(queryByText(/Home/)).not.toBeNull();
  });
});
