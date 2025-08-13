import { render, screen } from '@testing-library/react';

import { Skeleton } from './Skeleton';

describe('Test Skeleton component', () => {
  it('renders', () => {
    render(<Skeleton />);
    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toHaveClass('Skeleton');
  });

  it('with className', () => {
    render(<Skeleton className="custom-class" />);
    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toHaveClass('custom-class');
  });

  it('with props', () => {
    render(
      <Skeleton
        height="50px"
        width="100px"
        borderRadius="8px"
      />,
    );
    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toHaveStyle({
      height: '50px',
      width: '100px',
      borderRadius: '8px',
    });
  });
});
