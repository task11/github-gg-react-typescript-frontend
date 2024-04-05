import { render } from '@testing-library/react';

import Avatar from '../Avatar';

describe('Avatar', () => {
  it('Render component', () => {
    render(<Avatar src="test" size="md" />);

    const testImage = document.querySelector('img') as HTMLImageElement;
    expect(testImage.alt).toContain('avatar of the md sizes image');
  });
});
