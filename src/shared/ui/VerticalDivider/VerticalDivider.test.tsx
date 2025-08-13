import { render } from '@testing-library/react';

import { VerticalDivider } from './VerticalDivider';
import cls from './VerticalDivider.module.scss';

describe('Test VerticalDivider component', () => {
  test('renders', () => {
    const { container } = render(<VerticalDivider />);
    const divider = container.firstChild;
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveClass(cls.VerticalDivider);
  });

  test('renders with classname', () => {
    const customClass = 'custom-class';
    const { container } = render(<VerticalDivider className={customClass} />);
    const divider = container.firstChild;
    expect(divider).toHaveClass(cls.VerticalDivider);
    expect(divider).toHaveClass(customClass);
  });
});
