import { render, screen } from '@testing-library/react';

import { Button, ButtonSize, ButtonTheme } from './Button';

describe('Test Button component', () => {
  test('with TEST as a children', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
    expect(screen.getByText('TEST')).toHaveClass('primary');
    expect(screen.getByText('TEST')).toHaveClass('size_m');
    expect(screen.getByText('TEST')).not.toBeDisabled();
  });
  test('with secondary theme', () => {
    render(<Button theme={ButtonTheme.SECONDARY}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('secondary');
  });
  test('with common theme', () => {
    render(<Button theme={ButtonTheme.COMMON}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('common');
  });
  test('with size L', () => {
    render(<Button size={ButtonSize.L}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('size_l');
  });
  test('with isDisabled true', () => {
    render(<Button isDisabled>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('disabled');
    expect(screen.getByText('TEST')).toBeDisabled();
  });
});
