import { render } from '@testing-library/react';

import Logo from '../Logo';

describe('Logo', () => {
  it('Render Component', () => {
    render(<Logo size="md" mode="light" />);

    const testImage = document.querySelector('img') as HTMLImageElement;
    expect(testImage.alt).toContain('light mode md sizes logo image');
  });
});
